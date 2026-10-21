
import "../Css/Project.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { useState } from "react";

import nexora from "../assets/nexora.png";
import moviehub from "../assets/movie_hub.png";
import jobFinder from "../assets/job-finder.png";
import mind from "../assets/mindlog.png";
import talk from "../assets/talkspace.png";
import smartmeal from "../assets/smart-meals.png";
import weather from "../assets/weather dashboard.png";
import task from "../assets/taskflow.png";
import restaurant from "../assets/restaurantPOS.png";
import room from "../assets/roomly.png";
import mega from "../assets/mega.png";
import lumen from "../assets/lumenform.png";
import log from "../assets/log.png";



export default function Project() {
  const projects = [
     {
      title: "Log Management System",
      description:
        "A full-stack log management application built with Next.js, TypeScript, MongoDB, and Tailwind CSS. Access is restricted to authorized users and administrators.",
      github: "https://github.com/Htut-7/log-management-system.git",
      demo: "https://log-management-system-kappa.vercel.app/",
      demoNote:
        "Restricted demo: Login requires authorized credentials configured through environment variables. Contact me for demo access.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      category: "Full-Stack / Monitoring",
      image: log,
    },
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
      demo: "https://task-flow-phi-rosy.vercel.app/",
      tech: ["React", "Vite", "Firebase"],
      category: "Project Management",
      image: task,
    },
    {
      title: "Restaurant POS System",
      description:
        "A restaurant POS and management system built with React and Firebase. Includes menu and category management, order processing, cart functionality, sales analytics, a revenue dashboard, and a responsive admin interface.",
      github: "https://github.com/Htut-7/restaurant-pos-system.git",
      demo: "https://restaurant-pos-system-kappa.vercel.app/",
      tech: ["React", "Vite", "Firebase"],
      category: "POS System",
      image: restaurant,
    },
    {
      title: "Roomly — Travel Booking Platform",
      description:
        "A travel booking platform for exploring and booking hotels, flights, and activities. Features authentication, personalized profiles, booking management, search, filtering, and a responsive interface.",
      github: "https://github.com/Htut-7/Roomly.git",
      demo: "https://roomly-7ae4aw022-htut-7s-projects.vercel.app",
      tech: ["React.js", "Firebase", "JavaScript", "CSS3"],
      category: "Travel & Booking",
      image: room,
    },
    {
      title: "Mega Ace — Learning Management System",
      description:
        "A learning management system that helps students explore courses, enroll in classes, and manage their learning journey through a responsive interface.",
      github: "https://github.com/Htut-7/megaace-education-platform.git",
      demo: "https://megaace-education-platform.vercel.app/",
      tech: [
        "React.js",
        "JavaScript",
        "Firebase Authentication",
        "Cloud Firestore",
        "React Router",
        "CSS3",
        "Vite",
      ],
      category: "Education Platform",
      image: mega,
    },
    {
      title: "LumenForm — Interactive 3D E-Commerce Store",
      description:
        "An interactive 3D e-commerce application featuring rotatable product models, email and Google authentication, a shopping cart, and order placement with data stored in Firebase Firestore.",
      github: "https://github.com/Htut-7/lumenform.git",
      demo: "https://lumenform.vercel.app/product/terra",
      tech: [
        "React",
        "Vite",
        "JavaScript",
        "Three.js",
        "React Three Fiber",
        "Firebase Authentication",
        "Firestore",
        "CSS",
      ],
      category: "3D E-Commerce",
      image: lumen,
    }
   
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const firstIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    firstIndex,
    firstIndex + projectsPerPage
  );

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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="projects" id="project">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        key={currentPage}
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {currentProjects.map((project) => (
          <motion.div
            className="project-card"
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />
            )}

            <span className="project-category">{project.category}</span>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            {project.demoNote && (
              <div className="project-demo-note">
                <div className="project-demo-note-title">
                  <FaLock aria-hidden="true" />
                  <strong>Restricted Demo</strong>
                </div>

                <p>{project.demoNote}</p>
              </div>
            )}

            <div className="project-tech">
              {project.tech.map((tech) => (
                <motion.span key={tech} whileHover={{ scale: 1.1 }}>
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((page) => Math.min(totalPages, page + 1))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
