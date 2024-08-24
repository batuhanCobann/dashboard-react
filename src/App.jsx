import { useEffect, useState } from 'react';
import './App.css'
import Sidebar from './components/sidebar'
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
      <Dasbord isDarkMode={isDarkMode} toggleMode={toggleMode}/>
      <Sidebar isDarkMode={isDarkMode} />
    </>

    // <div className='app-container d-flex'  >
    // </div>
    
  )
}

export default App
