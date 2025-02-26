import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Trophy } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { TaskHiveLogo } from '../components/TaskHiveLogo';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 group">
            <TaskHiveLogo className="w-10 h-10 transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold transition-colors hover:text-green-600 dark:hover:text-green-400">TaskHive</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/signin"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Welcome to TaskHive</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up">
            Your personal goal-oriented ecosystem where students grow together in a hive-like structure,
            learning from each other and achieving their dreams.
          </p>
          <Link
            to="/signin"
            className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg transition-all hover:scale-105 hover:shadow-lg animate-bounce-subtle"
          >
            Get Started
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all hover:shadow-xl">
            <Target className="w-12 h-12 text-green-600 mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">Personalized Goals</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Set and track your daily, weekly, monthly, and yearly goals with AI-powered guidance.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all hover:shadow-xl">
            <Users className="w-12 h-12 text-green-600 mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">Community Tasks</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Engage with the community through task assignments and earn points for your achievements.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all hover:shadow-xl">
            <Trophy className="w-12 h-12 text-green-600 mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold mb-2">Competitions</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Participate in badge-level competitions and earn rewards for your expertise.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};