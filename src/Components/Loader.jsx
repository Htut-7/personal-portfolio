import { useEffect, useState } from "react";
import "../Css/Loader.css";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("SCANNING PROFILE...");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        if (next === 25) {
          setStatus("ANALYZING PROJECTS...");
        }

        if (next === 50) {
          setStatus("VERIFYING EXPERIENCE...");
        }

        if (next === 75) {
          setStatus("BUILDING INTERFACE...");
        }

        if (next === 100) {
          setStatus("ACCESS GRANTED");
        }

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 1000);

          return 100;
        }

        return next;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="loader">
      <div className="loader-content">
        <h1>CHAMP</h1>

        <h2>Aspiring Full-Stack Developer</h2>

        <p>{status}</p>

        <div className="loader-bar">
          <div
            className="loader-fill"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>

        <span>{progress}%</span>
      </div>
    </div>
  );
}