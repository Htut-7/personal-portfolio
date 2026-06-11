import "../Css/Contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_f0ce5ho",
        "template_rrve9pe",
        form.current,
        "39E6g5y3XvcHpJriQ",
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setSending(false);

        setTimeout(() => {
          setStatus("");
        }, 4000);
      })
      .catch((error) => {
        console.error(error);

        setStatus("error");
        setSending(false);

        setTimeout(() => {
          setStatus("");
        }, 4000);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Let's Work Together</h2>

          <p>
            I'm currently seeking opportunities in Web Development, Software
            Engineering, and IT-related roles. Whether you have a project,
            internship, or collaboration opportunity, I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <motion.input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              {sending ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className="success-message">Message sent successfully</p>
            )}

            {status === "error" && (
              <p className="error-message">Failed to send message</p>
            )}
          </form>

          <div className="contact-socials">
            <motion.a
              href="mailto:hsithuhtut@gmail.com"
              aria-label="Email"
              whileHover={{
                scale: 1.15,
                y: -8,
                rotate: 5,
              }}
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              href="https://github.com/Htut-7"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              whileHover={{
                scale: 1.15,
                y: -8,
                rotate: -5,
              }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sithuhtut-htut-2bb7393b1 "
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              whileHover={{
                scale: 1.15,
                y: -8,
                rotate: -5,
              }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
