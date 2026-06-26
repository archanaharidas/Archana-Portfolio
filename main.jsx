import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Phone, MapPin, ExternalLink, Download, Code2, BrainCircuit, Cloud, ShieldCheck } from 'lucide-react';
import './style.css';

const projects = [
  {
    title: 'AI-Powered Event Management Application',
    stack: 'React Native, Flask, SQL, LLM, Tableau, Power BI',
    text: 'Intelligent event planning platform with AI chatbot support, recommendation systems, backend APIs, and dashboards.',
  },
  {
    title: 'Movie Recommendation System',
    stack: 'Python, Flask, Django',
    text: 'Machine learning web application using collaborative filtering to generate personalized movie recommendations.',
  },
  {
    title: 'Aeryx365 Aviation Intelligence App',
    stack: 'SwiftUI, Supabase, APIs, iOS',
    text: 'Aviation-focused iOS platform for airport activity, live flight intelligence, owner insights, and premium airport tools.',
  },
  {
    title: 'AI Report Automation for Pavement Analysis',
    stack: 'Python, Automation, Word Reports, Data Pipelines',
    text: 'Automated report generation workflow to convert pavement condition data into structured editable engineering reports.',
  },
];

const skills = [
  'Python', 'Java', 'SQL', 'JavaScript', 'HTML/CSS', 'PHP', 'R',
  'Flask', 'React Native', 'Pandas', 'NumPy', 'PyTorch', 'Scikit-learn',
  'Bootstrap', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Tableau',
  'Power BI', 'Figma', 'Microsoft Azure', 'Kali Linux'
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <strong>Archana Haridas</strong>
          <div>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">AI Software Engineer Intern</p>
            <h1>Building AI-powered aviation, data, and software solutions.</h1>
            <p className="summary">
              Master's student in Computer Science at George Mason University with experience in AI software engineering,
              data science, backend services, cloud computing, cybersecurity, and intelligent application development.
            </p>
            <div className="heroButtons">
              <a className="primary" href="#projects">View Projects <ExternalLink size={18} /></a>
              <a className="secondary" href="/Archana_Haridas_Resume.pdf" target="_blank">Resume <Download size={18} /></a>
            </div>
          </div>
          <div className="card profileCard">
            <div className="avatar">AH</div>
            <h2>Archana Haridas</h2>
            <p>MS Computer Science · George Mason University</p>
            <div className="info"><MapPin size={17}/> Fairfax, VA</div>
            <div className="info"><Mail size={17}/> aharida@gmu.edu</div>
            <div className="info"><Phone size={17}/> +1 (571) 663-7994</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="sectionTitle">
          <p className="eyebrow">About</p>
          <h2>Computer science student focused on practical AI systems.</h2>
        </div>
        <p className="bodyText">
          I am currently pursuing my Master of Science in Computer Science at George Mason University with a 3.89 GPA.
          At Silent Falcon UAS Technologies, I work on AI-enabled aviation and unmanned aerial systems software,
          including backend services, REST APIs, data pipelines, and flight intelligence platforms.
        </p>
      </section>

      <section className="section cards3">
        <div className="miniCard"><BrainCircuit /><h3>AI & ML</h3><p>LLMs, predictive modeling, recommendation systems, PyTorch, Scikit-learn.</p></div>
        <div className="miniCard"><Code2 /><h3>Software</h3><p>Backend APIs, React Native apps, Flask services, Git/GitHub workflows.</p></div>
        <div className="miniCard"><Cloud /><h3>Cloud & Data</h3><p>Azure, data pipelines, dashboards, SQL, Tableau, Power BI, Excel.</p></div>
      </section>

      <section className="section" id="experience">
        <div className="sectionTitle">
          <p className="eyebrow">Experience</p>
          <h2>Professional Experience</h2>
        </div>
        <div className="timeline">
          <div><span>May 2026 – Present</span><h3>AI Software Engineer Intern · Silent Falcon UAS Technologies</h3><p>Developing AI-powered aviation software, backend services, REST APIs, data pipelines, and flight intelligence platforms.</p></div>
          <div><span>Jul 2023 – Jul 2024</span><h3>Data Science Intern · Smollan Pvt. Ltd.</h3><p>Worked on Google's data science project, data preprocessing, visualization, web scraping, SQL pipelines, and dashboards.</p></div>
          <div><span>Sep 2022 – Dec 2022</span><h3>Cyber Security Intern · Acmegrade</h3><p>Supported network security monitoring, vulnerability assessment, incident response, scripting, and compliance practices.</p></div>
          <div><span>May 2021 – Aug 2021</span><h3>Azure Cloud Computing Intern · SmartKnower</h3><p>Deployed Azure services, automated cloud resource management, and applied cloud security best practices.</p></div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionTitle">
          <p className="eyebrow">Projects</p>
          <h2>Selected Work</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <h3>{project.title}</h3>
              <p className="stack">{project.stack}</p>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="sectionTitle">
          <p className="eyebrow">Skills</p>
          <h2>Technical Skills</h2>
        </div>
        <div className="skills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section publication">
        <ShieldCheck />
        <div>
          <p className="eyebrow">Publication</p>
          <h2>Chatbot-Based Event Planning Application Using AI and ML</h2>
          <p>Published in the Proceedings of the 5th International Conference on Recent Trends in Machine Learning, IoT, Smart Cities, and Applications.</p>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Let's connect</h2>
        <p>Open to AI software engineering, data science, iOS, and full-stack opportunities.</p>
        <div className="contactLinks">
          <a href="mailto:aharida@gmu.edu"><Mail size={18}/> Email</a>
          <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          <a href="https://github.com/" target="_blank">GitHub</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
