import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Coffee, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const experiences = [
    {
      company: "JP Morgan Chase",
      role: "Software Engineer",
      duration: "2023 - Present",
      location: "India",
      description: "Currently working in Investment Bank's ETL team, contributing to the sourcing, processing, and loading of critical data used by internal bankers for trade execution."
    },
    {
      company: "European Summer of Code (pgmpy)",
      role: "Open Source Developer",
      duration: "June '25 - Present",
      location: "Part Time, Germany",
      description: "Developing a high-performance Rust backend for the Python-based pgmpy library (PGMs & causal inference) + designing multi language ffi bindings using PyO3 (Python), wasm-bindgen (JavaScript/WebAssembly), and extendr (R)."
    },
  ];

  const openSourceProjects = [
    { name: "pgmpy", description: "Developing Rust backend & multi-lang bindings", url: "https://github.com/pgmpy/causalgraphs" },
    { name: "Haystack", description: "12 bugfix & feature PRs merged across core pipelines", url: "https://github.com/deepset-ai/haystack/pulls?q=is%3Apr+is%3Amerged+author%3Amdrazak2001+" },
    { name: "Twenty (YC '23)", description: "Top 5% contributor; 7 PRs merged", url: "https://github.com/twentyhq/twenty/pulls?q=is%3Amerged+author%3Amdrazak2001+" },
    { name: "Streamlit", description: "Single-component integration with 2K+ downloads", url: "https://github.com/mdrazak2001/streamlit-anywidget" },
    { name: "Apidash", description: "Built a video previewer for the API client", url: "https://github.com/foss42/apidash/pulls?q=is%3Apr+is%3Aclosed+author%3Amdrazak2001" }
  ];

  const skills = [
    "Java", "Python", "Rust", "JavaScript", "TypeScript",
    "React", "Angular", "Spring Boot", "Docker", "AWS",
    "SQL", "REST", "gRPC", "Protobufs", "Git"
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="home" className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-poppins md:w-1/4">About</h2>
          <p className="text-text-secondary leading-relaxed md:w-3/4 text-sm font-extralight">
            i'm passionate about creating meaningful software and exploring new technologies and love building products that solve real problems having an impact on people's lives.
          </p>
        </section>

        {/* GitHub Activity */}
        <section className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-poppins md:w-1/4">Recent GitHub Activity</h2>
          <div className="md:w-3/4">
            <img src="http://ghchart.rshah.org/mdrazak2001" alt="2016rshah's Github chart" className="w-full h-auto" />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-poppins md:w-1/4">Experience</h2>
          <div className="md:w-3/4 space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="md:w-2/3">
                    <h3 className="font-medium text-text-primary text-sm">{exp.company}</h3>
                    <p className="text-xs text-text-accent font-medium">{exp.role}</p>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed font-extralight">
                      {exp.description}
                    </p>
                  </div>
                  <div className="md:w-1/3 md:text-right">
                    <p className="text-xs text-text-secondary">{exp.duration}</p>
                    <p className="text-xs text-text-secondary">{exp.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-poppins md:w-1/4">Education</h2>
          <div className="md:w-3/4">
            <div className="flex flex-col md:flex-row md:items-start gap-3">
              <div className="md:w-2/3">
                <h3 className="font-medium text-text-primary text-sm">RV College of Engineering</h3>
                <p className="text-xs text-text-accent font-medium">B.Tech in Information Technology</p>
              </div>
              <div className="md:w-1/3 md:text-right">
                <p className="text-xs text-text-secondary">2019-2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Projects */}
        <section id="projects" className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-poppins md:w-1/4">Open Source Contributions</h2>
          <div className="md:w-3/4 grid gap-3">
            {openSourceProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-surface-subtle hover:bg-surface-hover rounded-md border border-border transition-colors group"
                aria-label={`View ${project.name} contribution`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-text-primary group-hover:text-text-accent transition-colors text-sm">{project.name}</h3>
                      <ExternalLink size={12} className="text-text-secondary group-hover:text-text-accent transition-colors" />
                    </div>
                    <p className="text-xs text-text-secondary mt-1">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 flex flex-col md:flex-row gap-4">
          <h2 className="text-lg text-text-primary font-poppins md:w-1/4">Skills</h2>
          <div className="md:w-3/4 flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-surface-subtle text-text-secondary text-xs rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Portfolio;