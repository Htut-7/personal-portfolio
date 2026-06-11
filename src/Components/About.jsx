import "../Css/About.css";
import { motion } from "framer-motion";

export default function About() {
  const education = [
    {
      year: "Foundation Programme",
      title: "NCC Education Foundation",
      school: "KBTC College (KBTC)",
    },
    {
      year: "Level 4",
      title: "NCC Education Level 4",
      school: "KMD Institute",
    },
    {
      year: "Level 5",
      title: "NCC Education Level 5",
      school: "KMD Institute",
    },
    {
      year: "Honours Degree",
      title: "Honours Programme in Computing",
      school: "University of Greenwich, United Kingdom",
    },
    {
      year: "Bachelor Degree",
      title: "Digital Technology Innovation",
      school: "Kasem Bundit University, Thailand",
    },
  ];

  return (
    <motion.section
  className="about"
  id="about"
  initial={{
    opacity: 0,
    x: -100,
  }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
  }}
>
      <div className="about-container">
        <div className="about-header">
          <motion.h2
            initial={{
              opacity: 0,
              letterSpacing: "15px",
            }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0px",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            About Me
          </motion.h2>

          <div className="line"></div>
        </div>

        <div className="about-content">
          <p>
            I am a graduate with an international academic
            background and a strong interest in web development
            and technology. My academic journey began with the
            NCC Education Foundation Programme at Kasem Bundit
            Technology College (KBTC), where I built a solid
            foundation in computing and information technology.

            I later continued my studies at KMD, progressing
            through NCC Education Level 4 and Level 5
            qualifications before completing the final year of
            the Honours Programme in Computing awarded by the
            University of Greenwich, United Kingdom.

            In parallel, I pursued a degree in Digital
            Technology Innovation at Kasem Bundit University,
            Thailand, where previously earned credits were
            recognized toward my studies.

            Alongside my academic journey, I have developed
            practical experience through personal projects and
            professional work, building web applications with
            React, Vite, Firebase, PHP, and MySQL, while also
            gaining experience with WordPress, Elementor,
            Airtable, and data management systems.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              className="timeline-item"
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-year">
                  {item.year}
                </span>

                <h4>{item.title}</h4>

                <p>{item.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}