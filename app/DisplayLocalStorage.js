'use client';
import { useEffect, useState } from 'react';

export default function DisplayLocalStorage() {
  const [darkMode, setDarkMode] = useState('');

  // Window APIs are undefined during the build time in the server
  // const darkMode = window.localStorage.getItem('darkMode');

  useEffect(() => {
    setDarkMode(window.localStorage.getItem('darkMode'));
  }, []);
  return <div>{darkMode ? darkMode : 'false'}</div>;
}
