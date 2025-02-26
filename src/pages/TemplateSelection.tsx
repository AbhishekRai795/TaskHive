import React, { useState } from 'react';
import { Code, Palette, Database, Cloud, ChevronRight } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { TaskHiveLogo } from '../components/TaskHiveLogo';

const templates = [
  {
    id: 'software',
    title: 'Software Engineering',
    icon: Code,
    subTemplates: ['Web Developer', 'Mobile Developer', 'Cloud Engineer', 'DevOps Engineer'],
    color: 'blue',
  },
  {
    id: 'arts',
    title: 'Arts & Design',
    icon: Palette,
    subTemplates: ['Graphic Designer', 'UI/UX Designer', 'Digital Artist', 'Illustrator'],
    color: 'purple',
  },
  {
    id: 'data',
    title: 'Data Science',
    icon: Database,
    subTemplates: ['Data Analyst', 'Machine Learning Engineer', 'Data Engineer', 'Business Analyst'],
    color: 'yellow',
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: Cloud,
    subTemplates: ['AWS Specialist', 'Azure Engineer', 'GCP Expert', 'Cloud Architect'],
    color: 'indigo',
  },
];

export const TemplateSelection: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedSubTemplate, setSelectedSubTemplate] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (selectedTemplate && selectedSubTemplate) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/user/path', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            template: selectedTemplate,
            subTemplate: selectedSubTemplate,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to save path selection');
        }

        // Navigate to dashboard or next step
        console.log('Path selected:', { template: selectedTemplate, subTemplate: selectedSubTemplate });
      } catch (error) {
        console.error('Error saving path:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <nav className="bg-white dark:bg-gray-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <TaskHiveLogo className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Choose Your Path</h1>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => {
            const Icon = template.icon;
            const isSelected = selectedTemplate === template.id;
            
            return (
              <div
                key={template.id}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 animate-fade-in cursor-pointer ${
                  isSelected ? 'ring-2 ring-green-500 dark:ring-green-400' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setSelectedSubTemplate(null);
                }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Icon className="w-8 h-8 text-green-600 animate-bounce-subtle" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {template.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {template.subTemplates.map((subTemplate, subIndex) => {
                    const isSubSelected = selectedSubTemplate === subTemplate && isSelected;
                    
                    return (
                      <div
                        key={subTemplate}
                        className={`p-2 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-green-50 dark:hover:bg-green-900 transition-all hover:scale-102 animate-slide-up cursor-pointer ${
                          isSubSelected ? 'bg-green-100 dark:bg-green-800' : ''
                        }`}
                        style={{ animationDelay: `${(index * 150) + (subIndex * 100)}ms` }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTemplate(template.id);
                          setSelectedSubTemplate(subTemplate);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-gray-700 dark:text-gray-300">{subTemplate}</p>
                          {isSubSelected && (
                            <ChevronRight className="w-5 h-5 text-green-600 dark:text-green-400" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {isSelected && selectedSubTemplate && (
                  <div className="mt-4 flex justify-center animate-fade-in">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubmit();
                      }}
                      className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all transform hover:scale-105 hover:shadow-lg animate-bounce-subtle"
                    >
                      Start Your Journey
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};