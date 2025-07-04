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
  Brain,
  User,
  Send,
  MessageSquare,
  Layers,
  Zap,
  Terminal,
  Cpu,
  FileCode,
  GitBranch,
  BookOpen,
  Award,
  Target
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [visibleSections, setVisibleSections] = useState(new Set(['hero']));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'coursework', 'education', 'projects', 'experience', 'contact'];
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const skillCategories = [
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: {
        "Frontend": ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
        "Backend": ["Node.js", "Express.js", "Golang", "RESTful APIs", "GraphQL", "Microservices"],
        "Databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
      }
    },
    {
      title: "Data Science & AI",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      skills: {
        "Machine Learning": ["Scikit-Learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        "Data Analysis": ["Python", "Jupyter", "Data Visualization", "Statistical Analysis", "Feature Engineering"],
        "AI Tools": ["Google Generative AI", "OpenAI API", "Natural Language Processing", "Computer Vision"]
      }
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: {
        "Primary": ["JavaScript", "Python", "Golang", "TypeScript"],
        "Familiar": ["Java", "C++", "SQL", "Bash"],
        "Tools & Others": ["Git", "Docker", "Linux", "VS Code", "Postman", "AWS"]
      }
    }
  ];

  const courseworkData = [
    {
      category: "Core Computer Science",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
        "Software Engineering",
        "Computer Architecture"
      ]
    },
    {
      category: "Programming & Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      courses: [
        "Object-Oriented Programming",
        "Web Development",
        "Mobile App Development",
        "System Programming",
        "Compiler Design",
        "Software Testing"
      ]
    },
    {
      category: "Mathematics & Analytics",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      courses: [
        "Discrete Mathematics",
        "Statistics and Probability",
        "Linear Algebra",
        "Machine Learning",
        "Data Mining",
        "Artificial Intelligence"
      ]
    },
   
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

  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "IIIT Kottayam",
      duration: "2022 – 2026",
      score: "CGPA: 7.665/10",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      bgGradient: "from-cyan-500 to-blue-500"
    },
    {
      degree: "Intermediate",
      institution: "Srichaitanya Junior College",
      duration: "2020 – 2022",
      score: "95.6%",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      bgGradient: "from-cyan-500 to-blue-500"
    },
    {
      degree: "Secondary Education",
      institution: "Srichaitanya School",
      duration: "2017 – 2020",
      score: "96.1%",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      bgGradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-slate-100 scroll-smooth relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-40 border-b border-slate-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              BALAKA SAIKRISHNA
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'skills', label: 'Skills' },
                { id: 'coursework', label: 'Coursework' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-blue-400 hover:scale-110 ${
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
                className="text-slate-300 hover:text-slate-100 transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 shadow-lg animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About Me' },
                { id: 'skills', label: 'Skills' },
                { id: 'coursework', label: 'Coursework' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700/50 rounded-md transition-all duration-300 hover:scale-105"
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
        className="pt-16 sm:pt-20 min-h-screen flex items-center text-white bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative animate-fade-in">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 p-1 hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="saikrishna.jpg"
                      alt="Balaka Saikrishna"
                      className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left order-1 lg:order-2 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-slide-in-right">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  BALAKA
                </span>
                <br />
                <span className="text-slate-100">SAIKRISHNA</span>
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-400 mb-3 sm:mb-4 animate-fade-in delay-300">
                Full Stack Web Developer & Data Scientist
              </h2>

              <p className="text-lg sm:text-xl text-cyan-400 font-medium mb-4 sm:mb-6 animate-fade-in delay-500">
                MERN STACK – Golang – JavaScript – Python – Machine Learning
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-700">
                Dedicated Computer Science student passionate about building scalable web applications
                and contributing to open-source, with a keen interest in data science and machine learning.
                Experienced in backend and full-stack development, and data analysis.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in delay-1000">
                <a
                  href="http://www.linkedin.com/in/saikrishna-balaka-84994a2b4"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm sm:text-base hover:scale-105 hover:-translate-y-1"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/saikrishna-79"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm sm:text-base hover:scale-105 hover:-translate-y-1"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  GitHub
                </a>
                <a
                  href="mailto:saikrishnabalaka@gmail.com"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm sm:text-base hover:scale-105 hover:-translate-y-1"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Email
                </a>
                <a
                  href="/SaikrishnaBalaka_Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg text-sm sm:text-base hover:scale-105 hover:-translate-y-1"
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
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-800 text-white transition-all duration-1000 transform relative ${
          visibleSections.has('about') 
            ? 'opacity-100 translate-y-0 animate-fade-in' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text animate-pulse">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              I specialize in crafting seamless user experiences, building scalable backend systems, and exploring AI/ML possibilities to solve real-world problems.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {/* Frontend */}
            <div className={`relative group hover:scale-[1.02] transition-all duration-500 transform ${
              visibleSections.has('about') ? 'animate-slide-in-left' : ''
            }`} style={{ animationDelay: '200ms' }}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 border border-blue-600/50 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">Frontend Development</h3>
                <p className="text-slate-300 text-base sm:text-lg group-hover:text-slate-200 transition-colors duration-300">
                  Crafting modern interfaces using React.js, Tailwind CSS, and responsive design for all screen sizes.
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className={`relative group hover:scale-[1.02] transition-all duration-500 transform ${
              visibleSections.has('about') ? 'animate-slide-in-right' : ''
            }`} style={{ animationDelay: '400ms' }}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-cyan-500/20 border border-cyan-600/50 rounded-full flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                <Server className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">Backend Engineering</h3>
                <p className="text-slate-300 text-base sm:text-lg group-hover:text-slate-200 transition-colors duration-300">
                  Developing scalable APIs and services using Node.js, Golang, Express.js and RESTful architecture.
                </p>
              </div>
            </div>

            {/* Databases */}
            <div className={`relative group hover:scale-[1.02] transition-all duration-500 transform ${
              visibleSections.has('about') ? 'animate-slide-in-left' : ''
            }`} style={{ animationDelay: '600ms' }}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-indigo-500/20 border border-indigo-600/50 rounded-full flex items-center justify-center group-hover:bg-indigo-500/30 transition-all duration-300">
                <Database className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300">Database Systems</h3>
                <p className="text-slate-300 text-base sm:text-lg group-hover:text-slate-200 transition-colors duration-300">
                  Proficient in schema design, indexing, and query optimization for MongoDB, PostgreSQL, and Redis.
                </p>
              </div>
            </div>

            {/* Data Science */}
            <div className={`relative group hover:scale-[1.02] transition-all duration-500 transform ${
              visibleSections.has('about') ? 'animate-slide-in-right' : ''
            }`} style={{ animationDelay: '800ms' }}>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 border border-purple-600/50 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                <BarChart className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="pl-16 sm:pl-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">Data Science & AI</h3>
                <p className="text-slate-300 text-base sm:text-lg group-hover:text-slate-200 transition-colors duration-300">
                  From data wrangling with Pandas to predictive modeling using Scikit-Learn, I turn raw data into insight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Technologies Section */}
      <section 
        id="skills" 
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 text-white transition-all duration-1000 transform relative ${
          visibleSections.has('skills') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across different domains of software development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] transform hover:border-purple-500/50 ${
                  visibleSections.has('skills') 
                    ? 'opacity-100 translate-y-0 animate-fade-in' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${categoryIndex * 200}ms`,
                  transition: 'all 0.8s ease-out'
                }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                </div>

                {/* Skills by Subcategory */}
                <div className="space-y-6">
                  {Object.entries(category.skills).map(([subcategory, skills], subIndex) => (
                    <div key={subIndex}>
                      <h4 className="text-lg font-semibold text-slate-300 mb-3 flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} animate-pulse`}></div>
                        {subcategory}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1 bg-slate-700/50 text-slate-200 rounded-full text-sm border border-slate-600/50 hover:bg-gradient-to-r hover:${category.color} hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1`}
                            style={{ 
                              animationDelay: `${(categoryIndex * 200) + (skillIndex * 50)}ms`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Coursework Section */}
      <section 
        id="coursework" 
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white transition-all duration-1000 transform relative ${
          visibleSections.has('coursework') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Relevant Coursework
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Key academic courses that have shaped my technical foundation and expertise in computer science.
            </p>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">

            {courseworkData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] transform hover:border-pink-500/50 ${
                  visibleSections.has('coursework') 
                    ? 'opacity-100 translate-y-0 animate-fade-in' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${categoryIndex * 150}ms`,
                  transition: 'all 0.6s ease-out'
                }}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{category.category}</h3>
                </div>

                {/* Courses List */}
                <div className="space-y-2">
                  {category.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="p-2 bg-slate-700/30 rounded-lg text-slate-300 text-sm hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer"
                      style={{ 
                        animationDelay: `${(categoryIndex * 150) + (courseIndex * 50)}ms`,
                      }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        id="education" 
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white transition-all duration-1000 transform relative ${
          visibleSections.has('education') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Education
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in">
              My academic journey and achievements in computer science and engineering.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((education, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] transform hover:border-cyan-500/50 ${
                  visibleSections.has('education') 
                    ? `opacity-100 translate-y-0 animate-fade-in` 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  transform: visibleSections.has('education') ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '-50px' : '50px'})`,
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${education.bgGradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg hover:scale-110 transition-transform duration-300`}>
                    {education.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 mb-2 hover:text-cyan-300 transition-colors duration-300">
                      {education.degree}
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {education.institution}
                    </p>
                    <p className="text-sm sm:text-base text-slate-300 mb-2">
                      {education.duration}
                    </p>
                  </div>

                  {/* Score */}
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
                      {education.score}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white transition-all duration-1000 transform relative ${
          visibleSections.has('projects') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Projects
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto animate-fade-in">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/30 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 hover:border-purple-500/50 ${
                  visibleSections.has('projects') 
                    ? 'opacity-100 translate-y-0 animate-fade-in' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: visibleSections.has('projects') ? 'rotateY(0deg)' : 'rotateY(10deg)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                {/* Project Header with Hover Effect */}
                <div className="relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-4 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-purple-400 transition-all duration-300 text-slate-100 relative z-10">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs sm:text-sm border border-purple-700/30 hover:bg-purple-800/50 hover:border-purple-500/50 hover:scale-110 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white transition-all duration-1000 transform relative ${
          visibleSections.has('experience') 
            ? 'opacity-100 translate-y-0 animate-fade-in' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Experience
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              My professional journey and key contributions in software development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-600/30 shadow-lg hover:scale-[1.02] hover:border-cyan-500/50 transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 hover:text-cyan-400 transition-colors duration-300">Full Stack Developer</h3>
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
                  <li className="hover:text-slate-200 transition-colors duration-300">• Developed multiple full-stack applications using React, Node.js, and modern databases</li>
                  <li className="hover:text-slate-200 transition-colors duration-300">• Created AI-powered tools using Google Generative AI and machine learning techniques</li>
                  <li className="hover:text-slate-200 transition-colors duration-300">• Built scalable backend systems with efficient database design and API optimization</li>
                  <li className="hover:text-slate-200 transition-colors duration-300">• Contributed to open-source projects and maintained active GitHub profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section 
        id="contact" 
        className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 text-white transition-all duration-1000 transform relative ${
          visibleSections.has('contact') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Get In <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mb-6 animate-pulse"></div>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className={`space-y-8 transform ${
                visibleSections.has('contact') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`} style={{ transition: 'all 0.8s ease-out' }}>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-cyan-400 animate-pulse">Let's Connect</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700/30 hover:scale-105 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-white">Email</p>
                        <p className="text-slate-300">saikrishnabalaka@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700/30 hover:scale-105 hover:border-blue-500/50 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-white">Phone</p>
                        <p className="text-slate-300">+91 9959877881</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700/30 hover:scale-105 hover:border-purple-500/50 transition-all duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg text-white">Location</p>
                        <p className="text-slate-300">Kerala, India</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8">
                    <p className="text-lg font-semibold mb-4 text-slate-300">Follow Me</p>
                    <div className="flex gap-4">
                      <a
                        href="http://www.linkedin.com/in/saikrishna-balaka-84994a2b4"
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      >
                        <Linkedin className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="https://github.com/saikrishna-79"
                        className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href="mailto:saikrishnabalaka@gmail.com"
                        className="w-12 h-12 bg-cyan-600 hover:bg-cyan-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      >
                        <Mail className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className={`transform ${
                visibleSections.has('contact') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`} style={{ transition: 'all 0.8s ease-out', transitionDelay: '0.2s' }}>
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/30 shadow-xl hover:border-purple-500/50 transition-all duration-500">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-cyan-400 hover:scale-110 transition-transform duration-300" />
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium">
                        <User className="w-5 h-5 text-cyan-400" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:bg-slate-700/50 focus:scale-105"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:bg-slate-700/50 focus:scale-105"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-white font-medium">
                        <MessageSquare className="w-5 h-5 text-cyan-400" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:bg-slate-700/50 resize-none focus:scale-105"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>

                  {/* Resume Download */}
                  <div className="mt-8 pt-6 border-t border-slate-600/30">
                    <a
                      href="SaikrishnaBalaka_Resume.pdf"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-600 via-purple-600 to-pink-600 hover:from-slate-500 hover:via-purple-500 hover:to-pink-500 rounded-xl transition-all duration-300 font-medium text-white shadow-lg hover:shadow-xl hover:scale-105 transform hover:-translate-y-1"
                    >
                      <Download className="w-5 h-5" />
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-10 border-t border-purple-900/30 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-slate-400 text-sm sm:text-base hover:text-slate-300 transition-colors duration-300">
            &copy; {new Date().getFullYear()} Saikrishna Balaka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
