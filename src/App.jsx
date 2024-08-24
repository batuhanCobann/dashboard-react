import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import FooterCard from './components/footerCard'
import Sidebar from './components/sidebar'

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Header isDarkMode={isDarkMode} />
      // <FooterCard isDarkMode={isDarkMode} /> 

    // <div className='app-container d-flex'  >
    //    {/* <Sidebar isDarkMode={isDarkMode} /> */}
    // </div>
    
  )
}

export default App
