import "../Css/Project.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import nexora from "../assets/nexora.png";
import moviehub from "../assets/movie_hub.png";
import jobFinder from "../assets/job-finder.png";
import mind from "../assets/mindlog.png";
import talk from "../assets/talkspace.png";
import smartmeal from "../assets/smart-meals.png";
import weather from "../assets/weather dashboard.png";
import task from "../assets/taskflow.png";
import restaurant from "../assets/restaurantPOS.png";

export default function Project() {
  const projects = [
    {
      title: "Nexora Commerce",
      description:
        "Modern fashion e-commerce platform built with React, Vite, Firebase Authentication, and Firestore. Features authentication, product management, shopping cart functionality, and a responsive user interface.",
      github: "https://github.com/Htut-7/nexora-commerce",
      demo: "https://nexora-4dd7b.web.app/",
      tech: ["React", "Vite", "Firebase", "Firestore"],
      category: "E-Commerce",
      image: nexora,
    },
    {
      title: "TalkSpace Messaging System",
      description:
        "Real-time messaging application built with React and Firebase featuring live chat, user presence tracking, message status indicators, authentication, and responsive design.",
      github: "https://github.com/Htut-7/TalkSpace_Messaging-System",
      demo: "https://chat-project-3586c.web.app",
      tech: ["React", "Firebase", "Firestore"],
      category: "Messaging",
      image: talk,
    },
    {
      title: "MindLog Blog App",
      description:
        "Full-stack blogging platform built with React and Firebase. Includes user authentication, CRUD operations for blog posts, real-time comments, and content management features.",
      github: "https://github.com/Htut-7/mindlog-blog-app",
      demo: "https://blog-9b49e.web.app",
      tech: ["React", "Firebase", "Firestore"],
      category: "Blog Platform",
      image: mind,
    },
    {
      title: "SmartMeal",
      description:
        "Recipe discovery web application built with React, Vite, Firebase, and TheMealDB API. Features recipe search, ingredient filtering, saved recipes, authentication, and responsive design.",
      github: "https://github.com/Htut-7/SmartMeal",
      demo: "https://smart-meal-navy.vercel.app",
      tech: ["React", "Vite", "Firebase", "API"],
      category: "Food & Recipe",
      image: smartmeal,
    },
    {
      title: "MovieHub",
      description:
        "Movie and TV show discovery platform powered by React, Firebase, and the TMDB API. Includes search functionality, trailers, wishlist management, authentication, protected routes, and pagination.",
      github: "https://github.com/Htut-7/moviehub",
      demo: "https://moviehub-woad.vercel.app",
      tech: ["React", "Firebase", "TMDB API"],
      category: "Entertainment",
      image: moviehub,
    },
    {
      title: "Job Finder",
      description:
        "Career exploration platform built with React and Firebase. Allows users to search jobs, bookmark opportunities, manage saved listings, and explore career options through a modern responsive interface.",
      github: "https://github.com/Htut-7/Job-Finder",
      demo: "https://job-finder-e6cb2.web.app",
      tech: ["React", "Firebase"],
      category: "Career Platform",
      image: jobFinder,
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather forecasting application providing real-time weather information, location-based forecasts, temperature tracking, and responsive data visualization using external weather APIs.",
      github: "https://github.com/Htut-7/Weather_Dashboard",
      demo: "https://weather-dashboard-ecru-three.vercel.app/",
      tech: ["React", "Weather API"],
      category: "Dashboard",
      image: weather,
    },
    {
      title: "TaskFlow",
      description:
      "A project management web application built with React and Firebase for creating, organizing, tracking, and managing tasks with status updates and user authentication.",
      github: "https://github.com/Htut-7/TaskFlow.git",
      demo: 'https://task-flow-phi-rosy.vercel.app/',
      tech: ["React", "Vite", "Firebase"],
      category: "Dashboard, ProjectManagement",
      image: task, 
    },
    {
      title: "restaurant-pos-system",
      description:
      "A full-featured Restaurant POS and Management System built with React, Firebase Authentication, and Firestore. Includes menu management, category management, order processing, cart functionality, sales analytics, revenue dashboard, and responsive admin interface.",
      github: "https://github.com/Htut-7/restaurant-pos-system.git",
      demo: 'https://restaurant-pos-system-kappa.vercel.app/',
      tech: ["React", "Vite", "Firebase"],
      category: "Dashboard, POS system",
      image: restaurant
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="projects" id="project">
      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0,
        }}
      >
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.title}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <span className="project-category">{project.category}</span>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className={!project.demo ? "disabled-link" : ""}
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
