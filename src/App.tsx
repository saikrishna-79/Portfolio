import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Database,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
  Phone,
  BarChart,
  Brain
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [visibleSections, setVisibleSections] = useState(new Set(['hero']));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Track active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Track visible sections for animations
      const newVisibleSections = new Set(visibleSections);
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          if (isVisible) {
            newVisibleSections.add(section);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const webDevSkills = [
    { name: 'React.js', icon: <Code className="w-4 h-4" /> },
    { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
    { name: 'Golang', icon: <Database className="w-4 h-4" /> },
    { name: 'JavaScript', icon: <Globe className="w-4 h-4" /> }
  ];

  const dataScienceSkills = [
    { name: 'Python', icon: <Code className="w-4 h-4" /> },
    { name: 'Pandas', icon: <BarChart className="w-4 h-4" /> },
    { name: 'NumPy', icon: <BarChart className="w-4 h-4" /> },
    { name: 'Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { name: 'SQL', icon: <Database className="w-4 h-4" /> }
  ];

  const projects = [
    {
      title: "AI Code Reviewer",
      description: "An intelligent code review assistant that uses Google Generative AI (Gemini API)...",
      tech: ["Node.js", "React.js", "Google Generative AI API"],
      github: "https://github.com/saikrishna-79/ai-code-reviewer",
      live: "https://ai-code-reviewer-mauve.vercel.app/"
    },
    {
      title: "Pradhva | Sports Registration Platform",
      description: "A React app built for Pradhva 2.0, the intra-sports meet at IIIT Kottayam. Streamlined registration for various sports categories with real-time tracking and error-free participant management.",
      tech: ["React.js", "JavaScript", "Firebase"],
      github: "https://github.com/saikrishna-79/sports_app_iiitkottyam",
      live: "https://sports-app-iiitkottyam.vercel.app/"
    },
    {
      title: "EduBond",
      description: "A full-stack learning platform enabling users to connect with mentors and peers to learn specific skills. Features real-time communication, resource sharing (PDFs/videos), and interactive learning experiences.",
      tech: ["React.js", "Node.js", "JavaScript", "CSS"],
      github: "https://github.com/saikrishna-79/edu-bond",
    },
    {
      title: "Customer Churn Prediction",
      description: "A machine learning project to predict customer churn based on demographic and behavioral data. Implemented using data preprocessing, feature engineering, and multiple ML models to identify churn patterns.",
      tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Logistic Regression"],
      github: "https://github.com/saikrishna-79/Customerchurn",
      live: "" // Optional: Add a deployed app link if available
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-slate-100 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-40 border-b border-slate-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              BALAKA SAIKRISHNA
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400 font-medium' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-slate-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-16 sm:pt-20 min-h-screen flex items-center text-white bg-gradient-to-br from-black via-[#0f1e1d] to-[#0c1918] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-slate-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="saikrishna.jpg"
                      alt="Balaka Saikrishna"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-slate-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-2">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
                  BALAKA
                </span>
                <br />
                <span className="text-slate-100">SAIKRISHNA</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400 mb-3 sm:mb-4">
                Full Stack Web Developer & Data Scientist
              </h2>

              <p className="text-lg sm:text-xl text-cyan-400 font-medium mb-4 sm:mb-6">
                MERN STACK – Golang – JavaScript – Python – Machine Learning
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Dedicated Computer Science student passionate about building scalable web applications
                and contributing to open-source, with a keen interest in data science and machine learning.
                Experienced in backend and full-stack development, and data analysis.
              </p>

              {/* Skills */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-3 sm:mb-4 text-center lg:text-left">Web Development Skills:</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6">
                  {webDevSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium border border-slate-600 hover:bg-blue-800/50 hover:border-blue-500 transition-all duration-300 cursor-pointer text-slate-200 shadow-sm"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-3 sm:mb-4 text-center lg:text-left">Data Science Skills:</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {dataScienceSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium border border-slate-600 hover:bg-cyan-800/50 hover:border-cyan-500 transition-all duration-300 cursor-pointer text-slate-200 shadow-sm"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="http://www.linkedin.com/in/saikrishna-balaka-84994a2b4"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/saikrishna-79"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  GitHub
                </a>
                <a
                  href="mailto:saikrishnabalaka@gmail.com"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Email
                </a>
                <a
                  href="/SaikrishnaBalaka_Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className={`py-12 sm:py-16 lg:py-20 bg-[#071a1f] text-white transition-all duration-1000 ${
          visibleSections.has('about') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              I specialize in crafting seamless user experiences, building scalable backend systems, and exploring AI/ML possibilities to solve real-world problems.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Frontend */}
            <div className="relative group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/10 border border-blue-600/30 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400">Frontend Development</h3>
                <p className="text-slate-300 text-base sm:text-lg">
                  Crafting modern interfaces using React.js, Tailwind CSS, and responsive design for all screen sizes.
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className="relative group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/10 border border-cyan-600/30 rounded-full flex items-center justify-center">
                <Server className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-400">Backend Engineering</h3>
                <p className="text-slate-300 text-base sm:text-lg">
                  Developing scalable APIs and services using Node.js, Golang, Express.js and RESTful architecture.
                </p>
              </div>
            </div>

            {/* Databases */}
            <div className="relative group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-indigo-500/10 border border-indigo-600/30 rounded-full flex items-center justify-center">
                <Database className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-400">Database Systems</h3>
                <p className="text-slate-300 text-base sm:text-lg">
                  Proficient in schema design, indexing, and query optimization for MongoDB, PostgreSQL, and Redis.
                </p>
              </div>
            </div>

            {/* Data Science */}
            <div className="relative group hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/10 border border-purple-600/30 rounded-full flex items-center justify-center">
                <BarChart className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-400">Data Science & AI</h3>
                <p className="text-slate-300 text-base sm:text-lg">
                  From data wrangling with Pandas to predictive modeling using Scikit-Learn, I turn raw data into insight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        id="education" 
        className={`py-12 sm:py-16 lg:py-20 bg-[#071a1e] text-emerald-100 transition-all duration-1000 ${
          visibleSections.has('education') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/50 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
                  <p className="text-lg sm:text-xl text-cyan-400 font-semibold mb-2">
                    Indian Institute of Information Technology, Kottayam
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-300 mb-4 text-sm sm:text-base">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      2022 - 2026
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Kottayam, Kerala
                    </span>
                    <span className="font-semibold text-blue-400">GPA: 7.65 / 10</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-slate-400">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures and Algorithms",
                    "Operating Systems",
                    "Database Management Systems",
                    "Computer Networks",
                    "Machine Learning",
                    "Web Development"
                  ].map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-700/50"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className={`py-12 sm:py-16 lg:py-20 bg-[#081b1f] text-green-100 transition-all duration-1000 ${
          visibleSections.has('projects') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/50 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors text-slate-100">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className={`py-12 sm:py-16 lg:py-20 bg-[#081b1f] text-green-100 transition-all duration-1000 ${
          visibleSections.has('experience') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              My professional journey and key contributions in software development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/50 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">Full Stack Developer</h3>
                  <p className="text-lg sm:text-xl text-blue-400 font-semibold mb-2">
                    Personal Projects & Open Source
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 text-slate-300 mb-4 text-sm sm:text-base">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      2022 - Present
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 text-slate-400">Key Achievements</h4>
                <ul className="space-y-2 text-slate-300 text-sm sm:text-base">
                  <li>• Developed multiple full-stack applications using React, Node.js, and modern databases</li>
                  <li>• Created AI-powered tools using Google Generative AI and machine learning techniques</li>
                  <li>• Built scalable backend systems with efficient database design and API optimization</li>
                  <li>• Contributed to open-source projects and maintained active GitHub profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-12 sm:py-16 lg:py-20 bg-[#081b1f] text-green-100 transition-all duration-1000 ${
          visibleSections.has('contact') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
                Resume & Contact
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Let's connect and discuss opportunities to work together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/50 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-cyan-400">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:saikrishnabalaka@gmail.com"
                    className="flex items-center gap-4 text-slate-300 hover:text-slate-100 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-900/50 rounded-xl flex items-center justify-center group-hover:bg-cyan-800/50 transition-colors">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-xs sm:text-sm text-slate-400">saikrishnabalaka@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919959877881"
                    className="flex items-center gap-4 text-slate-300 hover:text-slate-100 transition-colors group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900/50 rounded-xl flex items-center justify-center group-hover:bg-blue-800/50 transition-colors">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Phone</p>
                      <p className="text-xs sm:text-sm text-slate-400">+91 9959877881</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/50 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-400">Download Resume</h3>
                <p className="text-slate-300 mb-6 text-sm sm:text-base">
                  Get a detailed overview of my experience, skills, and projects.
                </p>
                <a
                  href="SaikrishnaBalaka_Resume.pdf"
                  className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-slate-600 to-cyan-600 hover:from-slate-500 hover:to-cyan-500 rounded-lg transition-all duration-300 font-medium text-white shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="flex justify-center gap-4 sm:gap-6">
                <a
                  href="http://www.linkedin.com/in/saikrishna-balaka-84994a2b4"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-900/50 hover:bg-blue-800/50 rounded-xl flex items-center justify-center transition-colors group border border-blue-700/50"
                >
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300" />
                </a>
                <a
                  href="https://github.com/saikrishna-79"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-colors group border border-slate-600/50"
                >
                  <Github className="w-6 h-6 sm:w-7 sm:h-7 text-slate-400 group-hover:text-slate-300" />
                </a>
                <a
                  href="mailto:saikrishnabalaka@gmail.com"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-cyan-900/50 hover:bg-cyan-800/50 rounded-xl flex items-center justify-center transition-colors group border border-cyan-700/50"
                >
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 group-hover:text-cyan-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#081b1f] py-8 sm:py-10 border-t border-green-900/30 text-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Saikrishna Balaka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
