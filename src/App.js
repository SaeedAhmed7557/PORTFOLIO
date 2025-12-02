import React from "react";
import "./App.css";

const projects = [
  {
    title: "Face & Emotion Detection System",
    tech: "Python, OpenCV, TensorFlow/Keras, Jupyter Notebook",
    details:
      "Developed a real-time face and emotion recognition system using a CNN model trained in Jupyter Notebook. Integrated OpenCV for webcam input to detect faces and classify emotions like happy, sad, neutral, and angry with around 94% accuracy.",
  },
  {
    title: "E-Commerce Web Application",
    tech: "HTML, CSS, JavaScript, Java, MySQL",
    details:
      "Built a functional e-commerce website where users can browse products, add items to their cart, and place orders. Implemented secure login, authentication, and data storage with a clean, responsive UI.",
  },
  {
    title: "BingeCart-Online Shopping Platform Clone",
    tech: "ReactJS, JavaScript, Firebase, REST APIs",
    details:
      "Developed a modern shopping platform inspired by real e-commerce websites. Implemented product filtering, cart updates, and user login with real-time data sync using Firebase.",
  },
  {
    title: "Power BI Sales Analytics Dashboard",
    tech: "Power BI, Excel, DAX",
    details:
      "Designed an interactive dashboard to analyze sales performance across regions and products. Used Power Query and DAX to automate calculations and identify best-selling categories and revenue trends.",
  },
];

const skills = {
  "Programming Languages": ["Java", "Python", "C"],
  "Web Development": ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  "Data & AI": ["Power BI", "Excel", "NumPy", "Pandas", "Matplotlib", "TensorFlow"],
  Databases: ["MySQL", "MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "IntelliJ", "Jupyter Notebook"],
  Concepts: ["DSA", "OOP", "Networking", "SDLC"],
  Testing: ["Manual Testing"],
  "Soft Skills": ["Problem-solving", "Communication", "Teamwork", "Leadership"],
};

function App() {
  return (
    <div className="app">
      <Navbar />

      <section id="home" className="section hero">
        <div className="hero-content">
          <p className="hero-tag">Hello, I’m</p>
          <h1 className="hero-title">Shaik Saeed Ahmed</h1>
          <p className="hero-subtitle">
            Full-Stack Developer | AI & Data Enthusiast
          </p>
          <p className="hero-text">
            A dedicated Computer Science Engineering graduate with hands-on
            experience in web development, AI, and data analytics. I enjoy
            building real-world applications, solving problems, and learning new
            technologies.
          </p>
          <div className="hero-buttons">
            {/* Replace # with resume link */}
             <a
  href="/Resume FD.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn primary"
>
  Download Resume
</a>


            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-text">
          I am a detail-oriented Computer Science graduate based in Bengaluru,
          India. I have worked on projects ranging from e-commerce platforms to
          real-time face and emotion detection systems. My interests span
          full-stack development, data analytics, and artificial intelligence.
          I’m comfortable working with Java, Python, React, databases, and
          modern tools like Power BI and TensorFlow. I enjoy collaborating in
          teams, learning quickly, and contributing to impactful projects.
        </p>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="card">
              <h3 className="card-title">{category}</h3>
              <ul className="chip-list">
                {list.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="card project-card">
              <h3 className="card-title">{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="section-text">{project.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="card">
          <h3 className="card-title">
            Artificial Intelligence Intern – Tech Nook, Bengaluru
          </h3>
          <p className="muted">Dec 2023 – Feb 2024</p>
          <ul className="list">
            <li>
              Developed a real-time Emotion Recognition System using Python,
              TensorFlow, and OpenCV.
            </li>
            <li>
              Trained a CNN model in Jupyter Notebook and achieved around 94%
              accuracy in emotion classification.
            </li>
            <li>
              Worked on preprocessing, model optimization, and real-time webcam
              integration.
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="card-title">
            Job Oriented Value-Added Course – Website Development
          </h3>
          <p className="muted">GITAM University, Bengaluru | Jun 2024 – Jul 2024</p>
          <ul className="list">
            <li>
              Learned and applied HTML, CSS, JavaScript, SQL, and Java for web
              development.
            </li>
            <li>
              Built basic web modules integrating frontend and database
              operations.
            </li>
          </ul>
        </div>
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <h3 className="card-title">
            Bachelor of Technology in Computer Science
          </h3>
          <p className="muted">GITAM University, Bengaluru – 2025</p>
        </div>
        <div className="card">
          <h3 className="card-title">Diploma in Mechanical Engineering</h3>
          <p className="muted">
            Sree Vidya Nikethan Engineering College, Tirupati – 2022
          </p>
        </div>
        <div className="card">
          <h3 className="card-title">High School</h3>
          <p className="muted">
            Deepti English Medium High School, Hindupur – 2019
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          I’m open to opportunities in software development, AI/ML, and data
          analytics. Feel free to reach out for roles, collaborations, or
          projects.
        </p>
        <div className="contact-grid">
          <div className="card">
            <h3 className="card-title">Contact Info</h3>
            <ul className="list">
              <li>
                📍 <span className="muted">Bengaluru, India</span>
              </li>
              <li>
                📧{" "}
                <a href="mailto:shaiksaeed2003@gmail.com">
                  shaiksaeed2003@gmail.com
                </a>
              </li>
              <li>📞 +91 7013669572</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">Online Profiles</h3>
            <ul className="list">
              <li>
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/saeedahmed7557"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                🧑‍💻{" "}
                <a
                  href="https://github.com/SaeedAhmed7557"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="navbar">
      <div className="nav-logo" onClick={() => scrollTo("home")}>
        PORTFOLIO
      </div>
      <nav className="nav-links">
        {["home", "about", "skills", "projects", "experience", "education", "contact"].map(
          (id) => (
            <button key={id} onClick={() => scrollTo(id)} className="nav-link">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          )
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="muted">
        © {new Date().getFullYear()} Shaik Saeed Ahmed · Built with React
      </p>
    </footer>
  );
}

export default App;
