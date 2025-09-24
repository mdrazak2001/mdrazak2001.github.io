import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const experiences = [
    {
      company: "JP Morgan Chase",
      role: "Software Engineer 1",
      duration: "2023 - Present",
      location: "India",
      description: "Currently working in Investment Bank's ETL team, contributing to the sourcing, processing, and loading of critical data used by internal bankers for trade execution. Built customer-onboarding microservices in Spring Boot & JPA, cutting average client setup time by around 80%."
    },
    {
      company: "European Summer of Code (pgmpy)",
      role: "Open Source Contributor",
      duration: "June '25 - Present",
      location: "Part Time, India", 
      description: "Developing a high-performance Rust backend for the Python-based pgmpy library (PGMs & causal inference). Designing multi language bindings using PyO3 (Python), wasm-bindgen (JavaScript/WebAssembly), and extendr (R)."
    },
    {
      company: "Indian Institute of Science",
      role: "Project Intern",
      duration: "2023",
      location: "India",
      description: "Designed React Native UI/UX for Skyrax, enabling farmers to request drone services via mobile app. Implemented real-time push notifications (FCM) for service updates to 100+ pilot users."
    }
  ];

  const achievements = [
    "AWS DeepRacer - Runner up in JPMC Bengaluru Tech Center, Top 15 JPMC Global",
    "CNI Hackathon (DS Track) - Winner",
    "CFG Hackathon - Winner",
    "Research Publication - Prediction of Drug-Drug Interactions Using Support Vector Machine"
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
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-text-primary">razak</h1>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#home" className="text-sm text-text-secondary hover:text-text-primary transition-colors">home</a>
                <a href="#experience" className="text-sm text-text-secondary hover:text-text-primary transition-colors">experience</a>
                <a href="#projects" className="text-sm text-text-secondary hover:text-text-primary transition-colors">projects</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:mohammedrazak2001@gmail.com" 
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Email"
              >
                email
              </a>
              <a 
                href="https://github.com/mdrazak2001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                github
              </a>
              <a 
                href="https://www.linkedin.com/in/marazakw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="home" className="mb-16">
          {/* <div className="mb-4">
            <p className="text-sm text-text-secondary mb-2">India</p>
          </div> */}
          
          <h2 className="text-2xl font-semibold text-text-primary mb-6">About</h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            
            passionate about creating meaningful software and exploring new technologies.
            i love building products that solve real problems and have impact on people's lives.
          </p>
        </section>

        {/* GitHub Activity Placeholder */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">Recent GitHub Activity</h2>
          <div className="p-6 bg-surface-subtle rounded-lg border border-border">
            <div className="grid grid-cols-7 gap-1 mb-4">
              {Array.from({ length: 365 }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.7 
                      ? 'bg-green-500' 
                      : Math.random() > 0.4 
                      ? 'bg-green-300' 
                      : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-text-secondary">
              <span>Jan</span>
              <span>Dec</span>
            </div>
            <p className="text-sm text-text-secondary mt-2">
              <a 
                href="https://github.com/mdrazak2001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-accent hover:underline inline-flex items-center gap-1"
              >
                View on GitHub <ExternalLink size={12} />
              </a>
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-2/3">
                    <h3 className="font-semibold text-text-primary">{exp.company}</h3>
                    <p className="text-sm text-text-accent font-medium">{exp.role}</p>
                    <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="md:w-1/3 md:text-right">
                    <p className="text-sm text-text-secondary">{exp.duration} — {exp.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">Education</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-2/3">
              <h3 className="font-semibold text-text-primary">RV College of Engineering</h3>
              <p className="text-sm text-text-accent font-medium">Bachelor of Technology</p>
              <p className="text-sm text-text-secondary mt-2">
                Relevant Coursework: Data Structures and Algorithms, Operating Systems, 
                Database Management Systems, Computer Networks, Object Oriented Programming.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <p className="text-sm text-text-secondary">2019-2023</p>
            </div>
          </div>
        </section>

        {/* Open Source Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">Open Source Contributions</h2>
          <div className="grid gap-4">
            {openSourceProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-surface-subtle hover:bg-surface-hover rounded-lg border border-border transition-colors group"
                aria-label={`View ${project.name} contribution`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-text-primary group-hover:text-text-accent transition-colors">{project.name}</h3>
                      <ExternalLink size={14} className="text-text-secondary group-hover:text-text-accent transition-colors" />
                    </div>
                    <p className="text-sm text-text-secondary mt-1">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">Achievements</h2>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-text-secondary text-sm leading-relaxed">
                • {achievement}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-surface-subtle text-text-secondary text-sm rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-text-secondary text-sm">
                Let's connect and build something amazing together.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:mohammedrazak2001@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                <Mail size={16} />
                Get in touch
              </a>
              <a
                href="https://github.com/mdrazak2001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/marazakw/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;