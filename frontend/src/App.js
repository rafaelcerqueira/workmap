import React, { useEffect, useState } from 'react';
import SideNav from './components/SideNav/SideNav';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMenuOpen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const user = {
    name: 'Gir',
    profilePic: 'https://i.ytimg.com/vi/SCh0BXdVtmE/hqdefault.jpg'
    
  };

  return (
    <>
      <GlobalStyles />
      <Header toggleMenu={toggleMenu} user={user} isMobile={isMobile} />
      <SideNav isOpen={isMenuOpen} isMobile={isMobile} user={user} />
      <MainContent>
        <h1>Bem-vindo ao Workmap!</h1>
      </MainContent>
    </>
  );
};

export default App;
