import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code2, Brain, Database, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '3s' }}>
            MP
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
                <Sparkles size={16} className="text-blue-400 animate-pulse" />
                <span className="text-sm font-semibold text-blue-300">Welcome to my portfolio</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-[pulse_3s_ease-in-out_infinite]">
                    Munna
                  </span>
                  <br />
                  <span className="text-white">Pajiyar</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                  Full-Stack Developer & AI Engineer
                </p>
              </div>

              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Building intelligent, scalable solutions that solve real-world problems. Passionate about turning ideas into impactful technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-blue-400/50 text-blue-300 font-bold rounded-lg hover:bg-blue-500/10 hover:border-blue-300 transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-8">
                <a href="mailto:kumaarmunna656@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300">
                  <Mail size={18} /> Email
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="relative w-full aspect-square bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl shadow-2xl flex items-center justify-center text-white text-7xl font-black overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27none%27%20fill-rule=%27evenodd%27%3E%3Cg%20fill=%27%23ffffff%27%20fill-opacity=%270.05%27%3E%3Cpath%20d=%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                <span className="relative z-10">MP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-300">About Me</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Who Am I?</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm an enthusiastic IT Engineering student at Nepal College of Information Technology with hands-on experience in full-stack development and AI/ML solutions. Passionate about building innovative technology that solves real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey spans from developing complex web applications to implementing machine learning models. I thrive in collaborative environments where I can contribute technical expertise and creative problem-solving.
              </p>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">Quick Facts</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Location', value: 'Kathmandu, Nepal' },
                    { label: 'Email', value: 'kumaarmunna656@gmail.com' },
                    { label: 'Phone', value: '+977-9828553098' },
                    { label: 'Focus', value: 'Full-Stack & AI' }
                  ].map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <span className="text-blue-400 font-bold text-lg group-hover/item:text-pink-400 transition-colors">→</span>
                      <div>
                        <span className="text-gray-400 text-sm">{fact.label}</span>
                        <p className="text-white font-semibold">{fact.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-300">Technical Skills</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">What I Do</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: 'Programming',
                items: ['Python, Java, C++', 'TypeScript/JavaScript', 'HTML, CSS'],
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: ExternalLink,
                title: 'Frontend',
                items: ['React & Routing', 'TailwindCSS', 'Responsive Design'],
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Database,
                title: 'Backend & Data',
                items: ['FastAPI, Node.js, PHP', 'MongoDB, MySQL', 'RESTful APIs'],
                gradient: 'from-emerald-500 to-cyan-500'
              },
              {
                icon: Brain,
                title: 'AI & ML',
                items: ['Machine Learning', 'Pandas, NumPy, Scikit-learn', 'Data Visualization'],
                gradient: 'from-pink-500 to-orange-500'
              },
              {
                icon: Code2,
                title: 'Tools',
                items: ['Git & GitHub', 'Agile Development', 'System Design'],
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Sparkles,
                title: 'Soft Skills',
                items: ['Leadership', 'Communication', 'Problem Solving'],
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300 p-8 h-full">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.gradient} mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-300">Featured Projects</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Showcase</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                name: 'Virtual Doctor',
                subtitle: 'AI-Powered Healthcare Assistant',
                description: 'An intelligent platform providing instant medical insights using advanced AI integration.',
                tags: ['AI/ML', 'Gemini API', 'React'],
                gradient: 'from-blue-600 to-blue-800',
                details: [
                  'Designed AI-based platform for medical insights',
                  'Integrated Gemini API for symptom analysis',
                  'Text/voice interaction capabilities',
                  'Specialist referral system'
                ]
              },
              {
                name: 'PM2.5 Forecasting System',
                subtitle: 'Air Quality Prediction',
                description: 'Predictive system using machine learning to forecast air pollution levels.',
                tags: ['ML', 'FastAPI', 'React', 'Python'],
                gradient: 'from-emerald-600 to-emerald-800',
                details: [
                  'Temporal and meteorological feature engineering',
                  'Regression models for PM2.5 forecasts',
                  'Historical data collection and preprocessing',
                  'RESTful API using FastAPI'
                ]
              },
              {
                name: 'Library Management System',
                subtitle: 'Full-Stack Web Application',
                description: 'Complete library automation with role-based access and real-time inventory.',
                tags: ['Full-Stack', 'PHP', 'MySQL'],
                gradient: 'from-purple-600 to-purple-800',
                details: [
                  'Book cataloging with search and filtering',
                  'User authentication and role-based access',
                  'Automated borrowing/return tracking',
                  'Responsive UI design'
                ]
              }
            ].map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
                <div className="relative grid grid-cols-1 md:grid-cols-2">
                  <div className={`bg-gradient-to-br ${project.gradient} p-8 md:p-12 flex flex-col justify-center min-h-80`}>
                    <h3 className="text-4xl font-black mb-2">{project.name}</h3>
                    <p className="text-white/80 mb-4 text-lg">{project.subtitle}</p>
                    <p className="text-white/70 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center">
                    <h4 className="text-lg font-bold mb-6 text-blue-300">Key Features</h4>
                    <ul className="space-y-4">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="text-blue-400 font-bold text-lg group-hover/item:text-pink-400 transition-colors">✓</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-300">Education</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Learning Journey</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: 'Bachelor of Engineering', sub: 'Information Technology', org: 'Nepal College of Information Technology', detail: '2022 – Present' },
              { title: 'Frontend Training', sub: 'Certification', org: 'Next skills Academy', detail: 'Completed' },
              { title: 'High School', sub: 'Science Stream', org: 'Shikshadeep B. S. School', detail: '2018 – 2020 | GPA: 3.10' },
              { title: 'Secondary School', sub: 'Intermediate', org: 'Aadarsha Shiksha Sadan', detail: 'Completed 2018 | GPA: 3.45' }
            ].map((edu, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300 p-8 hover:scale-105 transform">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                    <p className="text-blue-400 font-semibold text-sm mt-1">{edu.sub}</p>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{edu.org}</p>
                  <p className="text-gray-400 text-xs">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-300">Achievements</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-black mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Milestones</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Hult Prize Participant', date: '2024', desc: 'Selected for World\'s largest entrepreneurship competition. Collaborated to develop impactful solutions.' },
              { title: 'NOSK Hackathon Participant', date: '2024', desc: 'Collaborated under time constraints to develop innovative tech solutions.' }
            ].map((achievement, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-xl p-8 border-l-4 border-blue-500 hover:border-pink-500 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-blue-400 text-sm mb-3">{achievement.date}</p>
                  <p className="text-gray-300">{achievement.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-blue-500/30 text-center">
              <h2 className="text-5xl sm:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Work Together</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                I'm interested in exploring new opportunities and collaborating on exciting projects. Feel free to reach out!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Mail, label: 'Email', value: 'kumaarmunna656@gmail.com', href: 'mailto:kumaarmunna656@gmail.com' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com' },
                  { icon: Github, label: 'GitHub', value: 'View my code', href: 'https://github.com' }
                ].map((contact, idx) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={idx}
                      href={contact.href}
                      target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="group"
                    >
                      <div className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 border border-blue-500/20 group-hover:border-blue-400/50">
                        <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mb-3">
                          <Icon className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{contact.label}</h3>
                        <p className="text-gray-300 text-sm break-all">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="bg-slate-700/30 rounded-lg p-6 border border-blue-500/20">
                <p className="text-gray-300 mb-2">
                  <strong className="text-blue-300">Location:</strong> Narephate-32, Kathmandu, Nepal
                </p>
                <p className="text-gray-300">
                  <strong className="text-blue-300">Phone:</strong> +977-9828553098
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300 mb-2">© 2025 Munna Pajiyar. All rights reserved.</p>
          <p className="text-sm text-gray-400">Aspiring Full-Stack Developer & AI Engineer</p>
        </div>
      </footer>
    </div>
  );
}
