import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface Template {
  id: number;
  title: string;
  subfields: string[];
  description: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: "Technology & Software Development",
    description: "Explore various domains of software development and technology",
    subfields: [
      "Web Development (Frontend, Backend, Full Stack)",
      "Mobile App Development (iOS, Android, Flutter, React Native)",
      "Cloud Computing (AWS, Azure, Google Cloud)",
      "Cybersecurity (Ethical Hacking, Network Security)",
      "Artificial Intelligence & Machine Learning (NLP, Computer Vision, Data Science)",
      "Blockchain Development (Smart Contracts, Web3, Cryptography)",
      "Game Development (Unity, Unreal Engine, AR/VR)",
      "DevOps & Site Reliability Engineering (SRE)"
    ]
  },
  {
    id: 2,
    title: "Business & Management",
    description: "Master the art of business and management",
    subfields: [
      "Entrepreneurship & Startups",
      "Product Management",
      "Marketing & Digital Marketing (SEO, Content Marketing, Social Media Marketing)",
      "Finance & Investment (Stock Market, Crypto Trading, Personal Finance)",
      "Human Resource Management (HRM)"
    ]
  },
  {
    id: 3,
    title: "Engineering & Core Sciences",
    description: "Dive deep into engineering disciplines and core sciences",
    subfields: [
      "Mechanical Engineering (CAD, Robotics, Manufacturing)",
      "Civil Engineering (Structural Design, Surveying, Smart Cities)",
      "Electrical & Electronics Engineering (Embedded Systems, IoT, Renewable Energy)",
      "Chemical Engineering (Pharmaceuticals, Process Engineering)"
    ]
  },
  {
    id: 4,
    title: "Creative Arts & Design",
    description: "Express yourself through various creative mediums",
    subfields: [
      "Graphic Design & UI/UX (Adobe Suite, Figma, Design Thinking)",
      "Photography & Video Editing (Cinematography, Post-Production)",
      "Fashion Designing (Trends, Branding, Fabric Selection)",
      "Animation & 3D Modeling (Blender, Maya, VFX)",
      "Music Production & Sound Engineering"
    ]
  },
  {
    id: 5,
    title: "Writing & Communication",
    description: "Master the art of effective communication",
    subfields: [
      "Content Writing & Blogging",
      "Journalism & Mass Communication",
      "Screenwriting & Scriptwriting",
      "Technical Writing (API Documentation, Research Writing)",
      "Public Speaking & Debate"
    ]
  },
  {
    id: 6,
    title: "Health & Medicine",
    description: "Contribute to healthcare and well-being",
    subfields: [
      "Medical & Healthcare (MBBS, Nursing, Physiotherapy)",
      "Psychology & Mental Health",
      "Fitness & Nutrition (Personal Training, Sports Science)"
    ]
  },
  {
    id: 7,
    title: "Law & Governance",
    description: "Shape the future through law and policy",
    subfields: [
      "Corporate Law & Legal Advisory",
      "Civil Services & UPSC Preparation",
      "International Relations & Diplomacy",
      "Human Rights & Social Justice"
    ]
  },
  {
    id: 8,
    title: "Education & Research",
    description: "Advance knowledge and empower others",
    subfields: [
      "Teaching & EdTech (K-12, Higher Education, Online Tutoring)",
      "Academic Research & PhD Preparation",
      "Linguistics & Foreign Languages (French, German, Spanish, Mandarin)"
    ]
  },
  {
    id: 9,
    title: "Social Impact & Sustainability",
    description: "Create positive change for a better world",
    subfields: [
      "NGO & Social Work",
      "Climate Change & Environmental Science",
      "Renewable Energy & Sustainable Development"
    ]
  },
  {
    id: 10,
    title: "Miscellaneous & Other Fields",
    description: "Explore specialized and emerging fields",
    subfields: [
      "Aviation & Aerospace (Piloting, Rocket Science, Drone Tech)",
      "Automobile Engineering (EV Technology, Motorsport Engineering)",
      "Culinary Arts & Food Science (Baking, Food Safety)",
      "Hospitality & Travel Management (Hotel Management, Travel Blogging)"
    ]
  }
];

export function TemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [selectedSubfield, setSelectedSubfield] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Path</h1>
              <p className="text-gray-600">Select a field that aligns with your goals and aspirations</p>
            </div>

            {!selectedTemplate ? (
              <div className="grid gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600">
                          {template.title}
                        </h3>
                        <p className="text-gray-600">{template.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div>
                <button
                  onClick={() => {
                    setSelectedTemplate(null);
                    setSelectedSubfield(null);
                  }}
                  className="flex items-center text-green-600 hover:text-green-700 mb-6 group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-all" />
                  Back to Fields
                </button>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedTemplate.title}</h2>
                
                <div className="grid gap-3">
                  {selectedTemplate.subfields.map((subfield, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSubfield(subfield)}
                      className={`p-4 rounded-lg text-left transition-all ${
                        selectedSubfield === subfield
                          ? 'bg-green-50 border-2 border-green-500'
                          : 'bg-white border border-gray-100 hover:border-green-300'
                      }`}
                    >
                      <span className="text-gray-800 font-medium">{subfield}</span>
                    </button>
                  ))}
                </div>

                {selectedSubfield && (
                  <div className="mt-6">
                    <button
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all flex items-center justify-center space-x-2"
                      onClick={() => {
                        // Handle template and subfield selection
                        console.log('Selected:', selectedTemplate.title, selectedSubfield);
                      }}
                    >
                      <span>Continue with {selectedSubfield}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}