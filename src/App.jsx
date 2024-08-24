import { useEffect, useState } from 'react';
import './App.css'
import Dasbord from './components/Dasbord';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* <Sidebar isDarkMode={isDarkMode} className="mt-5" /> */}
      <Dasbord isDarkMode={isDarkMode} toggleMode={toggleMode}/>
    </>
  
  )
}

export default App
