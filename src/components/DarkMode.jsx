import { useEffect, useState } from 'react';
import { darkButton, lightButton } from '../assets';

export const DarkMode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative">
      <button type="button" onClick={handleClick}>
        <img
          src={darkButton}
          alt="toggle-light-theme"
          className={`w-12 cursor-pointer 
            ${theme === 'dark' ? `opacity-0` : `opacity-100`} transition-all duration-300`}
        />
      </button>

      <button type="button" onClick={handleClick}>
        <img
          src={lightButton}
          alt="toggle-dark-theme"
          className={`w-12 cursor-pointer absolute top-0 left-0
          ${theme === 'light' ? `opacity-0` : `opacity-100`}
          transition-all duration-500`}
        />
      </button>
    </div>
  );
};
