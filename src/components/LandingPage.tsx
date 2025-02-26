import React, { useState, useEffect } from 'react';
import { Hexagon, ChevronRight, Moon, Sun, ArrowRight } from 'lucide-react';
import { LoginPage } from './LoginPage';

interface LandingPageProps {
  onLogin: (email: string, password: string) => Promise<void>;
  onSignUpClick: () => void;
}

export function LandingPage({ onLogin, onSignUpClick }: LandingPageProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine which section is currently visible
      const sections = ['hero', 'personalGoals', 'communityTasks', 'competitions', 'templates'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 300 && rect.bottom >= 300;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showLoginModal) {
    return <LoginPage onLogin={onLogin} />;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-green-50 to-emerald-100 text-gray-800'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900/90 backdrop-blur-lg' : 'bg-white/80 backdrop-blur-lg'} shadow-sm`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Hexagon className={`w-10 h-10 ${darkMode ? 'text-emerald-500' : 'text-green-600'}`} />
                <Hexagon className={`w-7 h-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${darkMode ? 'text-emerald-400' : 'text-green-500'}`} />
                <Hexagon className={`w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${darkMode ? 'text-emerald-300' : 'text-green-400'}`} />
              </div>
              <h1 className="text-2xl font-bold">TaskHive</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo('hero')} className={`transition-colors ${activeSection === 'hero' ? (darkMode ? 'text-emerald-400' : 'text-green-600') : ''}`}>Home</button>
              <button onClick={() => scrollTo('personalGoals')} className={`transition-colors ${activeSection === 'personalGoals' ? (darkMode ? 'text-emerald-400' : 'text-green-600') : ''}`}>Personal Goals</button>
              <button onClick={() => scrollTo('communityTasks')} className={`transition-colors ${activeSection === 'communityTasks' ? (darkMode ? 'text-emerald-400' : 'text-green-600') : ''}`}>Community Tasks</button>
              <button onClick={() => scrollTo('competitions')} className={`transition-colors ${activeSection === 'competitions' ? (darkMode ? 'text-emerald-400' : 'text-green-600') : ''}`}>Competitions</button>
              <button onClick={() => scrollTo('templates')} className={`transition-colors ${activeSection === 'templates' ? (darkMode ? 'text-emerald-400' : 'text-green-600') : ''}`}>Templates</button>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode} 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button 
                onClick={() => setShowLoginModal(true)}
                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-green-600 hover:bg-green-700'} text-white transition-colors`}
              >
                Sign In
              </button>
              
              <button 
                onClick={onSignUpClick}
                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} transition-colors`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated airplane path */}
      <div className="fixed w-full h-full pointer-events-none z-10">
        <svg className="w-full h-full" viewBox="0 0 1000 3000">
          <path 
            d="M100,300 C200,400 300,350 400,500 C500,650 600,600 700,750 C800,900 900,850 900,1000 C900,1150 800,1100 700,1250 C600,1400 500,1350 400,1500 C300,1650 200,1600 100,1750" 
            stroke={darkMode ? "#4ade80" : "#16a34a"} 
            strokeDasharray="5,5" 
            strokeWidth="2" 
            fill="none" 
          />
          
          {/* Airplane icon - position based on scroll */}
          <g 
            transform={`translate(${Math.min(100 + scrollY / 5, 900)}, ${Math.min(300 + scrollY / 3, 1750)})`} 
            className={`${darkMode ? 'text-emerald-500' : 'text-green-600'}`}
          >
            <path 
              d="M16 8.5c0-4.5 3.5-8 8-8s8 3.5 8 8-3.5 8-8 8-8-3.5-8-8zm14.7 9.1c1.8-2 3.3-4.5 3.3-7.6 0-6.1-4.9-11-11-11S12 3.9 12 10c0 3.1 1.5 5.6 3.3 7.6H6v2h28v-2h-9.3z" 
              fill="currentColor" 
            />
          </g>
          
          {/* Section indicators */}
          <circle 
            cx="100" cy="300" r="10" 
            fill={activeSection === 'personalGoals' ? (darkMode ? '#4ade80' : '#16a34a') : (darkMode ? '#1e293b' : '#e0f2fe')} 
          />
          <circle 
            cx="400" cy="500" r="10" 
            fill={activeSection === 'communityTasks' ? (darkMode ? '#4ade80' : '#16a34a') : (darkMode ? '#1e293b' : '#e0f2fe')} 
          />
          <circle 
            cx="700" cy="750" r="10" 
            fill={activeSection === 'competitions' ? (darkMode ? '#4ade80' : '#16a34a') : (darkMode ? '#1e293b' : '#e0f2fe')} 
          />
          <circle 
            cx="900" cy="1000" r="10" 
            fill={activeSection === 'templates' ? (darkMode ? '#4ade80' : '#16a34a') : (darkMode ? '#1e293b' : '#e0f2fe')} 
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Achieve Your Goals in a <span className={darkMode ? "text-emerald-400" : "text-green-600"}>Collaborative Hive</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                TaskHive helps you set meaningful goals, complete tasks, and grow alongside a community of like-minded individuals.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={onSignUpClick}
                  className={`px-6 py-3 rounded-lg text-white flex items-center gap-2 ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-green-600 hover:bg-green-700'} transition-colors`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollTo('personalGoals')}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-100 text-gray-800'} transition-colors`}
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="TaskHive Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating hexagons */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute ${darkMode ? 'text-emerald-600/30' : 'text-green-600/20'}`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${5 + i}s ease-in-out infinite`,
                    transform: `scale(${0.5 + Math.random() * 0.5})`,
                  }}
                >
                  <Hexagon className="w-16 h-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Goals Section */}
      <section id="personalGoals" className="py-20 relative">
        <div className={`container mx-auto px-6 ${activeSection === 'personalGoals' ? 'animate-pulse' : ''}`}>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-green-100 text-green-800'}`}>
                Personal Growth
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Set Personalized Goals Based on Your Path</h2>
              <p className="opacity-90">
                TaskHive uses AI to create custom goals based on your selected template. Track progress with beautiful analytics and stay motivated with daily, weekly, monthly, and yearly milestones.
              </p>
              <button 
                className={`inline-flex items-center gap-2 ${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-green-600 hover:text-green-700'}`}
                onClick={() => scrollTo('communityTasks')}
              >
                <span>Discover More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Personal Goals Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Tasks Section */}
      <section id="communityTasks" className="py-20 relative">
        <div className={`container mx-auto px-6 ${activeSection === 'communityTasks' ? 'animate-pulse' : ''}`}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-green-100 text-green-800'}`}>
                Community Collaboration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Complete Tasks from Mentors and Peers</h2>
              <p className="opacity-90">
                Receive curriculum-aligned tasks from assigned teachers, earn task points, and get personalized feedback. Engage with the global board to find tasks from anyone in the community.
              </p>
              <button 
                className={`inline-flex items-center gap-2 ${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-green-600 hover:text-green-700'}`}
                onClick={() => scrollTo('competitions')}
              >
                <span>Explore Tasks</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Community Tasks Board" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="py-20 relative">
        <div className={`container mx-auto px-6 ${activeSection === 'competitions' ? 'animate-pulse' : ''}`}>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-green-100 text-green-800'}`}>
                Friendly Competition
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Join Challenges and Earn Rewards</h2>
              <p className="opacity-90">
                Participate in badge-level competitions, earn merit points, and unlock special perks. Exchange points for coins or use them to upgrade your badges and access specialized mentoring.
              </p>
              <button 
                className={`inline-flex items-center gap-2 ${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-green-600 hover:text-green-700'}`}
                onClick={() => scrollTo('templates')}
              >
                <span>Learn About Badges</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2">
              <div className={`rounded-2xl overflow-hidden shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Competition Leaderboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 relative">
        <div className={`container mx-auto px-6 ${activeSection === 'templates' ? 'animate-pulse' : ''}`}>
          <div className="text-center mb-12">
            <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${darkMode ? 'bg-emerald-900/50 text-emerald-400' : 'bg-green-100 text-green-800'}`}>
              Career Paths
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Growth Template</h2>
            <p className="mt-4 max-w-2xl mx-auto opacity-90">
              TaskHive offers specialized templates for various career paths. Select your field and focus area to receive tailored goals and tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Template Cards - just showing a few examples */}
            {[
              { title: "Technology & Software", icon: "💻", description: "Web, mobile, cloud, AI, and more" },
              { title: "Business & Management", icon: "📊", description: "Entrepreneurship, marketing, finance" },
              { title: "Creative Arts & Design", icon: "🎨", description: "UI/UX, photography, animation" },
              { title: "Health & Medicine", icon: "🩺", description: "Healthcare, psychology, fitness" },
              { title: "Law & Governance", icon: "⚖️", description: "Legal, civil services, diplomacy" },
              { title: "Education & Research", icon: "🔍", description: "Teaching, academic research, languages" }
            ].map((template, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl shadow-sm transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:shadow-md'}`}
              >
                <div className="text-4xl mb-4">{template.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{template.description}</p>
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className={`text-sm inline-flex items-center ${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-green-600 hover:text-green-700'}`}
                >
                  <span>Explore Path</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={onSignUpClick}
              className={`px-6 py-3 rounded-lg text-white flex items-center gap-2 mx-auto ${darkMode ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-green-600 hover:bg-green-700'} transition-colors`}
            >
              <span>Get Started with TaskHive</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="relative mr-3">
                <Hexagon className={`w-8 h-8 ${darkMode ? 'text-emerald-500' : 'text-green-600'}`} />
                <Hexagon className={`w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${darkMode ? 'text-emerald-400' : 'text-green-500'}`} />
              </div>
              <span className="font-bold text-xl">TaskHive</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
              <a href="#" className={`hover:${darkMode ? 'text-emerald-400' : 'text-green-600'}`}>About</a>
              <a href="#" className={`hover:${darkMode ? 'text-emerald-400' : 'text-green-600'}`}>Privacy</a>
              <a href="#" className={`hover:${darkMode ? 'text-emerald-400' : 'text-green-600'}`}>Terms</a>
              <a href="#" className={`hover:${darkMode ? 'text-emerald-400' : 'text-green-600'}`}>Contact</a>
              <a href="#" className={`hover:${darkMode ? 'text-emerald-400' : 'text-green-600'}`}>Help Center</a>
            </div>
            
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} TaskHive. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}