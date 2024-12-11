import React, { useState } from 'react';
import { Github, Linkedin, Mail, BookOpen, Code, Briefcase, ChevronDown, ExternalLink, Star } from 'lucide-react';

const InteractivePortfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const workExperience = [
    {
      company: 'Shikhara Investment Management',
      role: 'Hedge Fund Intern',
      period: 'May 2024 - Present',
      location: 'New York City',
      description: 'Working at a long-short equity hedge fund focusing on Asia (ex-Japan). Complete buy-side equity research reports on technology and financial sectors, working closely with CIO and senior analysts to cover companies.',
      achievements: ['Comprehensive sector analysis', 'Equity research reports', 'Team collaboration']
    },
    {
      company: 'Juhu Capital Research',
      role: 'Founder and CIO',
      period: 'August 2023 - April 2024',
      location: 'New York City',
      description: 'Led systematic value strategy implementation, wrote quantitative research newsletter, and leveraged Python for securities selection in Emerging Markets.',
      achievements: ['Systematic strategy implementation', 'Research newsletter publication', 'Python-based analysis']
    }
  ];

  const skills = {
    technical: ['Python', 'JavaScript', 'React', 'Ruby', 'Go', 'Java', 'C++', 'AWS', 'MongoDB', 'OCaml', 'SQL', 'R', 'MATLAB'],
    blockchain: ['Market Making', 'HFT Systems', 'Smart Contracts', 'DeFi Protocols', 'Onchain Development'],
    certifications: [
      'Bloomberg Market Concepts',
      'Technology Entrepreneurship (Harvard)',
      'Big Data (Microsoft)',
      'CS50 (Harvard)',
      'Securities Industry Essentials',
      'Bloomberg Terminal Proficiency',
      'Preqin Pro Certification',
      'FactSet Certification',
      'AlphaSense Professional',
      'S&P Capital IQ Platform',
      'PitchBook Platform',
      'Dakota Search'
    ]
  };

  const projects = [
    {
      title: 'Automated Due Diligence Platform',
      description: 'Built an AI-powered platform to automate and streamline the due diligence process for PE/VC investments. Implemented NLP to analyze financial statements, contracts, and market reports.',
      technologies: ['AI', 'NLP', 'Python'],
      category: 'Finance'
    },
    {
      title: 'ESG Investment Strategy',
      description: 'Created a quantitative model incorporating ESG factors into investment decisions. Utilized NLP to analyze sustainability reports and news for ESG scoring.',
      technologies: ['NLP', 'Python', 'Quantitative Analysis'],
      category: 'Finance'
    },
    {
      title: 'PE Fund Prediction Model',
      description: 'Designed a machine learning model to predict PE fund performance using historical data and C++. Analyzed team composition, investment strategy, and market conditions.',
      technologies: ['Machine Learning', 'C++', 'Financial Analysis'],
      category: 'Finance'
    },
    {
      title: 'Earnings Call Analysis',
      description: 'Developed NLP model analyzing earnings call transcripts with high accuracy in sentiment classification. Extracted key financial metrics and improved stock price movement predictions.',
      technologies: ['NLP', 'Python', 'Machine Learning'],
      category: 'Finance'
    },
    {
      title: 'Market Sentiment Analysis',
      description: 'Developed a sentiment analysis system for financial news and social media, correlating sentiment scores with stock prices and designing trading strategies.',
      technologies: ['Sentiment Analysis', 'Python', 'Trading'],
      category: 'Finance'
    },
    {
      title: 'Crypto Trading Platform',
      description: 'Developed an advanced trading platform integrating multiple quant models, implementing ML-driven predictive models and automated trading systems.',
      technologies: ['Crypto', 'Machine Learning', 'Python'],
      category: 'Trading'
    },
    {
      title: 'Portfolio Management System',
      description: 'Developed an integrated platform for portfolio management with ML-driven asset allocation and automated rebalancing capabilities.',
      technologies: ['Python', 'ML', 'Finance'],
      category: 'Finance'
    },
    {
      title: 'Research Platform',
      description: 'Created a quantitative research platform with modular framework for testing strategies and evaluating models.',
      technologies: ['Python', 'MATLAB', 'Research'],
      category: 'Research'
    },
    {
      title: 'ML Financial Pipeline',
      description: 'Developed machine learning pipeline improving stock return predictions and volatility forecasts with advanced optimization techniques.',
      technologies: ['Python', 'ML', 'Finance'],
      category: 'Finance'
    },
    {
      title: 'HFT Framework',
      description: 'Built high-frequency trading system with low-latency processing and real-time risk management capabilities.',
      technologies: ['HFT', 'Python', 'Risk Management'],
      category: 'Trading'
    },
    {
      title: 'Financial Data Infrastructure',
      description: 'Developed scalable architecture for financial data processing and analytics, handling large volumes of data with high availability.',
      technologies: ['Python', 'Big Data', 'Infrastructure'],
      category: 'Infrastructure'
    },
    {
      title: 'Real Estate Platform',
      description: 'Created investment platform with ML-driven property valuation models and automated analysis systems.',
      technologies: ['ML', 'Python', 'Real Estate'],
      category: 'Real Estate'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Navy Background */}
      <header style={{ backgroundColor: '#000080' }} className="text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Aryan Chadha</h1>
            <p className="text-2xl mb-8 opacity-90">Finance Professional & Software Engineer</p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:achadha5@fordham.edu"
                className="px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 flex items-center space-x-2"
                style={{ backgroundColor: '#1893f8' }}
              >
                <Mail className="h-5 w-5" />
                <span>Contact</span>
              </a>
              <a
                href="https://github.com/achadha5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 flex items-center space-x-2"
                style={{ backgroundColor: '#1893f8' }}
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/aryanrchadha"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full hover:opacity-90 transition-all duration-300 flex items-center space-x-2"
                style={{ backgroundColor: '#1893f8' }}
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZmZmIi8+PC9zdmc+')] animate-pulse" />
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8">
            {['about', 'experience', 'skills', 'projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 border-b-2 transition-all duration-300 ${
                  activeTab === tab 
                    ? 'border-[#1893f8] text-[#000080] font-bold'
                    : 'border-transparent text-gray-600 hover:text-[#1893f8]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* About Section */}
        <div className={`transition-opacity duration-300 ${activeTab === 'about' ? 'opacity-100' : 'hidden opacity-0'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#000080]">About Me</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Finance and Computer Science student at Fordham University's Gabelli School of Business, 
              combining quantitative expertise with software engineering skills. Experienced in cryptocurrency 
              trading, blockchain technology, and full-stack development.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className={`transition-opacity duration-300 ${activeTab === 'projects' ? 'opacity-100' : 'hidden opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setIsProjectExpanded(project.title)}
                onMouseLeave={() => setIsProjectExpanded(null)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#000080]">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1893f8] text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`transition-opacity duration-300 ${activeTab === 'skills' ? 'opacity-100' : 'hidden opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-[#000080] capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`px-3 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                        hoveredSkill === skill
                          ? 'bg-[#000080] text-white'
                          : 'bg-[#1893f8] text-white'
                      } ${category === 'certifications' ? 'text-sm' : ''}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {category === 'certifications' && (
                  <p className="mt-4 text-sm text-gray-600">
                    Hover over each certification to learn more
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className={`transition-opacity duration-300 ${activeTab === 'experience' ? 'opacity-100' : 'hidden opacity-0'}`}>
          <div className="max-w-3xl mx-auto space-y-8">
            {projects.map((experience) => (
              <div 
                key={experience.title}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#000080]">{experience.title}</h3>
                  <span className="text-[#1893f8] font-medium">{experience.role}</span>
                </div>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#000080' }} className="text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">Based in New York | Available for Opportunities</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:achadha5@fordham.edu" className="hover:text-[#1893f8] transition-colors duration-300">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/achadha5" target="_blank" rel="noopener noreferrer" className="hover:text-[#1893f8] transition-colors duration-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/aryanrchadha" target="_blank" rel="noopener noreferrer" className="hover:text-[#1893f8] transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractivePortfolio;
