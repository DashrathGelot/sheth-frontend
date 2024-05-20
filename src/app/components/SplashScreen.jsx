'use client';

import { useEffect, useState } from 'react';

const SplashScreen = ({ logo, siteName }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img src={logo} alt="Loading..." className="h-16 w-16 animate-bounce mb-4" />
      <span className="text-primary font-bold text-xl">{siteName}</span>
    </div>
  );
};

export default SplashScreen;
