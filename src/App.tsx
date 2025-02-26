import React, { useState } from 'react';
import { Hexagon, Mail, Lock, ArrowRight, ChevronRight } from 'lucide-react';
import { LoginPage } from './components/LoginPage';
import { TemplateSelection } from './components/TemplateSelection';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    // Simulate login
    setIsLoggedIn(true);
  };

  return isLoggedIn ? <TemplateSelection /> : <LoginPage onLogin={handleLogin} />;
}

export default App;