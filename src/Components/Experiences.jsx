import "../Css/Experiences.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experiences() {
  const [activeTab, setActiveTab] = useState("visa");

  return (
    <section className="experiences" id="experience">
      <h2>Experience</h2>

      <div className="tab">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={activeTab === "visa" ? "active" : ""}
          onClick={() => setActiveTab("visa")}
        >
          Thailand Visa Assistant
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={activeTab === "intern" ? "active" : ""}
          onClick={() => setActiveTab("intern")}
        >
          Data Management and IT Intern
        </motion.button>
      </div>

      <div className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === "visa" && (
            <motion.div
              key="visa"
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <h3>Thailand Visa Assistant</h3>

              <p className="company">
                Rectangle Green Travel & Tour Company
              </p>

              <p className="description">
                Assisted clients throughout the Thailand visa
                application process by preparing and verifying
                required documentation, coordinating application
                submissions, and providing customer support.

                Responsible for reviewing supporting documents,
                processing client bank statements, ensuring
                document accuracy, and communicating visa
                requirements to applicants.
              </p>

              <div className="skills">
                <span>Customer Service</span>
                <span>Documentation Processing</span>
                <span>Bank Statement Verification</span>
                <span>Administrative Support</span>
                <span>Communication</span>
                <span>Attention to Detail</span>
              </div>
            </motion.div>
          )}

          {activeTab === "intern" && (
            <motion.div
              key="intern"
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 50,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <h3>Data Management & IT Intern</h3>

              <p className="company">
                Internship Position
              </p>

              <p className="description">
                Supported data management operations by
                organizing, validating, and maintaining records
                to ensure accuracy and consistency.

                <br />
                <br />

                Assisted with Airtable management, form
                administration, reporting activities, and
                digital workflow processes.

                <br />
                <br />

                Updated website content, published events and
                announcements using WordPress and Elementor,
                and provided technical support for online Zoom
                conferences. Assisted participants with
                troubleshooting issues such as microphone,
                audio, and connectivity problems to ensure
                smooth virtual events.
              </p>

              <div className="skills">
                <span>Airtable</span>
                <span>Data Management</span>
                <span>Data Validation</span>
                <span>WordPress</span>
                <span>Elementor</span>
                <span>Zoom Support</span>
                <span>Technical Support</span>
                <span>Reporting</span>
                <span>Problem Solving</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}