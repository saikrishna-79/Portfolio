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
  ChevronRight,
  Code,
  Database,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
  Phone
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', icon: <Code className="w-4 h-4" /> },
    { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
    { name: 'Python', icon: <Code className="w-4 h-4" /> },
    { name: 'Golang', icon: <Database className="w-4 h-4" /> },
    { name: 'JavaScript', icon: <Globe className="w-4 h-4" /> }
  ];

  const projects = [
   
 {
    title: "AI Code Reviewer",
    description: "An intelligent code review assistant that uses Google Generative AI (Gemini API)...",
    tech: ["Node.js", "React.js", "Google Generative AI API"],
    github: "https://github.com/saikrishna-79/ai-code-reviewer",
    live: "https://ai-code-reviewer-mauve.vercel.app/"  // ✅ LIVE LINK
  },
  {
    title: "Pradhva | Sports Registration Platform",
    description: "A React app built for Pradhva 2.0, the intra-sports meet at IIIT Kottayam. Streamlined registration for various sports categories with real-time tracking and error-free participant management.",
    tech: ["React.js", "JavaScript", "Firebase"],
    github: "https://github.com/saikrishna-79/sports_app_iiitkottyam",
    live: "https://sports-app-iiitkottyam.vercel.app/" // Replace with live URL if deployed
  },
 {
    title: "EduBond",
    description: "A full-stack learning platform enabling users to connect with mentors and peers to learn specific skills. Features real-time communication, resource sharing (PDFs/videos), and interactive learning experiences.",
    tech: ["React.js", "Node.js", "JavaScript", "CSS"],
    github: "https://github.com/saikrishna-79/edu-bond",
    
  },
  ];

  const experience = [
    {
      title: "Backend Intern",
      company: "Tech Corp",
      period: "June 2024 - Aug 2024",
      location: "Remote",
      description: [
        "Developed REST APIs using Node.js and Express.",
        "Improved performance of MongoDB queries by 30%.",
        "Collaborated with frontend team to integrate APIs."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-700/50 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
     <section id="hero" className="pt-16 min-h-screen flex items-center">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                 {/* Profile Image */}
                 <div className="flex justify-center lg:justify-start">
                   <div className="relative">
                     <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-slate-500 p-1">
                       <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                         <img
                           src="saikrishna.jpg"
                           alt="Balaka Saikrishna"
                           className="w-full h-full object-cover rounded-full"
                         />
                       </div>
                     </div>
                     <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
                     <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-slate-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
                   </div>
                 </div>
     
                 {/* Content */}
                 <div className="text-center lg:text-left">
                   <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                     <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-300 bg-clip-text text-transparent">
                       BALAKA
                     </span>
                     <br />
                     <span className="text-slate-100">SAIKRISHNA</span>
                   </h1>
                   
                   <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-4">
                     Full Stack Web Developer
                   </h2>
                   
                   <p className="text-xl text-cyan-400 font-medium mb-6">
                     MERN STACK – Golang – JavaScript
                   </p>
                   
                   <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                     Dedicated Computer Science student passionate about building scalable web applications 
                     and contributing to open-source. Experienced in backend and full-stack development.
                   </p>
     
                   {/* Skills */}
                   <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                     {skills.map((skill, index) => (
                       <span
                         key={index}
                         className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-sm font-medium border border-slate-600 hover:bg-blue-800/50 hover:border-blue-500 transition-all duration-300 cursor-pointer text-slate-200 shadow-sm"
                       >
                         {skill.icon}
                         {skill.name}
                       </span>
                     ))}
                   </div>
     
                   {/* Social Links */}
     <div className="flex gap-4 justify-center lg:justify-start">
       <a
         href="http://www.linkedin.com/in/saikrishna-balaka-84994a2b4"
         className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
       >
         <Linkedin className="w-5 h-5" />
         LinkedIn
       </a>
       <a
         href="https://github.com/saikrishna-79"
         className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
       >
         <Github className="w-5 h-5" />
         GitHub
       </a>
       <a
         href="mailto:saikrishnabalaka@gmail.com"
         className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
       >
         <Mail className="w-5 h-5" />
         Email
       </a>
       <a
         href="/SaikrishnaBalaka_Resume.pdf"
         target="_blank"
         className="flex items-center gap-2 px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
       >
         <Download className="w-5 h-5" />
         Resume
       </a>
     </div>
     
                 </div>
               </div>
             </div>
           </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      About Me
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    I'm a passionate full-stack developer with a strong foundation in modern web technologies. 
                    My journey in software development started with curiosity and has evolved into a commitment 
                    to creating impactful digital solutions. I enjoy tackling complex problems and learning new 
                    technologies to stay at the forefront of web development.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Code className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-slate-100">Frontend Development</h3>
                    <p className="text-slate-300">
                      Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Server className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-slate-100">Backend Development</h3>
                    <p className="text-slate-300">
                      Building scalable APIs and server-side applications using Node.js, Golang, and various databases.
                    </p>
                  </div>
      
                  <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Database className="w-12 h-12 text-slate-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-slate-100">Database Design</h3>
                    <p className="text-slate-300">
                      Designing efficient database schemas and optimizing queries for MongoDB, PostgreSQL, and Redis.
                    </p>
                  </div>
                </div>
              </div>
            </section>

      {/* Education Section */}
     <section id="education" className="py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
             <span className="bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
               Education
             </span>
           </h2>
         </div>
     
         <div className="max-w-4xl mx-auto">
           <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg">
             <div className="flex items-start gap-4 mb-6">
               <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                 <GraduationCap className="w-6 h-6 text-white" />
               </div>
               <div className="flex-1">
                 <h3 className="text-2xl font-bold text-slate-100 mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
                 <p className="text-xl text-cyan-400 font-semibold mb-2">
                   Indian Institute of Information Technology, Kottayam
                 </p>
                 <div className="flex flex-wrap gap-4 text-slate-300 mb-4">
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
               <h4 className="text-lg font-semibold mb-3 text-slate-400">Relevant Coursework</h4>
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
                     className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50"
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
       <section id="projects" className="py-20 bg-slate-800/50 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-slate-400 to-blue-400 bg-clip-text text-transparent">
                      Featured Projects
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and passion for development.
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 group"
                    >
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors text-slate-100">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
      
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
           

      {/* Experience Section */}
      <section id="experience" className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-slate-400 to-cyan-400 bg-clip-text text-transparent">
                      Work Experience
                    </span>
                  </h2>
                </div>
      
                <div className="max-w-4xl mx-auto space-y-8">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                          <p className="text-xl text-slate-400 font-semibold mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-slate-300 mb-4">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                            <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      

      {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-800/50 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-slate-400 bg-clip-text text-transparent">
                      Resume & Contact
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Let's connect and discuss opportunities to work together.
                  </p>
                </div>
      
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg">
                      <h3 className="text-2xl font-bold mb-6 text-cyan-400">Get In Touch</h3>
                      <div className="space-y-4">
                        <a
                          href="mailto:balaka@example.com"
                          className="flex items-center gap-4 text-slate-300 hover:text-slate-100 transition-colors group"
                        >
                          <div className="w-12 h-12 bg-cyan-900/50 rounded-xl flex items-center justify-center group-hover:bg-cyan-800/50 transition-colors">
                            <Mail className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-slate-400">saikrishnabalaka@example.com</p>
                          </div>
                        </a>
                        
                        <a
                          href="tel:+1234567890"
                          className="flex items-center gap-4 text-slate-300 hover:text-slate-100 transition-colors group"
                        >
                          <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center group-hover:bg-blue-800/50 transition-colors">
                            <Phone className="w-6 h-6 text-blue-400" />
                          </div>
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm text-slate-400">+91 9959877881</p>
                          </div>
                        </a>
                      </div>
                    </div>
      
                    <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 shadow-lg">
                      <h3 className="text-2xl font-bold mb-6 text-slate-400">Download Resume</h3>
                      <p className="text-slate-300 mb-6">
                        Get a detailed overview of my experience, skills, and projects.
                      </p>
                      <a
                        href="SaikrishnaBalaka_Resume.pdf"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-600 to-cyan-600 hover:from-slate-500 hover:to-cyan-500 rounded-lg transition-all duration-300 font-medium text-white shadow-lg hover:shadow-xl"
                      >
                        <Download className="w-5 h-5" />
                        Download Resume
                      </a>
                    </div>
                  </div>
      
                  <div className="mt-12 text-center">
                    <div className="flex justify-center gap-6">
                      <a
                        href="http://www.linkedin.com/in/saikrishna-balaka-84994a2b4"
                        className="w-14 h-14 bg-blue-900/50 hover:bg-blue-800/50 rounded-xl flex items-center justify-center transition-colors group border border-blue-700/50"
                      >
                        <Linkedin className="w-7 h-7 text-blue-400 group-hover:text-blue-300" />
                      </a>
                      <a
                        href="https://github.com/saikrishna-79"
                        className="w-14 h-14 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center transition-colors group border border-slate-600/50"
                      >
                        <Github className="w-7 h-7 text-slate-400 group-hover:text-slate-300" />
                      </a>
                      <a
                        href="mailto:saikrishnabalaka@example.com"
                        className="w-14 h-14 bg-cyan-900/50 hover:bg-cyan-800/50 rounded-xl flex items-center justify-center transition-colors group border border-cyan-700/50"
                      >
                        <Mail className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Saikrishna Balaka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;