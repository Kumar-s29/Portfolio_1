import React, { useState } from "react";
import "./App.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaEnvelope, // Email icon
  FaPhoneAlt, // Phone icon
  FaLinkedin, // LinkedIn icon
  FaGithub, // GitHub icon
  FaInstagram, // Instagram icon
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si"; // Express & MongoDB Icons
import image from "./assets/image.avif";
import image2 from "./assets/image7.jpeg";
import image3 from "./assets/image4.jpg";
import image4 from "./assets/image5.jpg";
import image5 from "./assets/image6.webp";
import image6 from "./assets/image8.png";

function App() {
  const [skills, setSkills] = useState([
    { name: "JavaScript", icon: <FaJsSquare />, level: 70 },
    { name: "HTML", icon: <FaHtml5 />, level: 70 },
    { name: "CSS", icon: <FaCss3Alt />, level: 70 },
    { name: "React", icon: <FaReact />, level: 70 },
    { name: "Node.js", icon: <FaNodeJs />, level: 70 },
    { name: "Express", icon: <SiExpress />, level: 70 },
    { name: "MongoDB", icon: <SiMongodb />, level: 70 },
    { name: "Git", icon: <FaGitAlt />, level: 70 },
  ]);

  const handleSliderChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index].level = value;
    setSkills(updatedSkills);
  };

  const getSkillLevel = (level) => {
    if (level >= 80) return "Proficient";
    if (level >= 50) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="main-container">
      <div className="header">
        <nav>
          <h1>KS</h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="top-btn">
            <button className="btn">Get In Touch</button>
          </div>
        </nav>
      </div>
      <div className="main-banner">
        <img src={image} alt="" />
        <div className="text-overlay">
          I'm Kumara Swamy
          <br />
          <span>
            <p>Full Stack Developer</p>
          </span>
        </div>
      </div>
      <div id="about" className="about-me">
        <h2>About Me</h2>
        <p>
          I'm Kumara Swamy, a passionate Full Stack Developer with a strong
          focus on creating dynamic, user-friendly web applications. With
          expertise in both frontend and backend technologies, I enjoy building
          innovative solutions that solve real-world problems. I thrive in
          collaborative environments and am always eager to learn new tools and
          techniques. My journey in web development has equipped me with skills
          in JavaScript, React, Node.js, and more. Outside of coding, I love
          exploring the latest trends in tech and continuously improving my
          craft.
        </p>
        <img src={image2} alt="" />
      </div>
      <div id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src={image3} alt="" />
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="project-card">
            <img src={image4} alt="" />
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="project-card">
            <img src={image5} alt="" />
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="project-card">
            <img src={image6} alt="" />
            <h3>Project 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name}>
              {skill.icon}
              <h3>{skill.name}</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => handleSliderChange(index, e.target.value)}
                className="slider"
              />
              <p>Level: {getSkillLevel(skill.level)}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="contact" className="contact">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>
            <FaEnvelope /> Email:{" "}
            <a href="mailto:example@example.com">example@example.com</a>
          </p>
          <p>
            <FaPhoneAlt /> Phone: <a href="tel:+1234567890">+1234567890</a>
          </p>
          <p>
            <FaLinkedin /> LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/example/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            <FaGithub /> GitHub:{" "}
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
          <p>
            <FaInstagram /> Instagram:{" "}
            <a
              href="https://www.instagram.com/example/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram Profile
            </a>
          </p>
        </div>
      </div>
      <div className="footer">
        <p>Developed by Kumara Swamy .S</p>
      </div>
    </div>
  );
}

export default App;
