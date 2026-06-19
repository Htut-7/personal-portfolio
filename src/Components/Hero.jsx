import "../Css/Hero.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPhp,
  FaDownload,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFirebase,
  SiMysql,
  SiVite,
  SiAirtable,
  SiWordpress,
  SiElementor,
} from "react-icons/si";
import me from "../assets/sth.jpg"
import resume from "../assets/resume.pdf"
import SplitText from "../Components/SplitText";
import Antigravity from "../Components/Antigravity";

export default function Hero() {

  return (
    <section className="hero" id="home">

      <div className="hero-bg">
    <Antigravity
      count={250}
      magnetRadius={6}
      ringRadius={7}
      waveSpeed={0.4}
      waveAmplitude={1}
      particleSize={1.2}
      lerpSpeed={0.05}
      color="#4ACF50"
      autoAnimate={true}
    />
  </div>

      <div className="hero-container">
        <motion.div
          className="hero-img"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={me} alt="sithu htut" />
        </motion.div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="hero-greeting">Hi I'm</p>
          <SplitText
  text="Sithu Htut"
  tag="h1"
  delay={80}
  duration={0.8}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 50 }}
  to={{ opacity: 1, y: 0 }}
/>

          <h2>Aspiring Full-Stack Developer</h2>

          <div className="tech-stack">
            <FaHtml5 />
            <FaCss3Alt />
            <SiJavascript />
            <FaReact />
            <SiFirebase />
            <SiMysql />
            <FaPhp />
            <FaGithub />
            <SiVite />
            <SiAirtable />
            <SiWordpress />
            <SiElementor />
          </div>

          <motion.div
            className="hero-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href={resume} download>
              Download Resume <FaDownload />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
