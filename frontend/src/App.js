import React, { useEffect, useState } from 'react';
import SideNav from './components/SideNav/SideNav';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
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
      <Header toggleMenu={toggleMenu}></Header>
      <SideNav isOpen={isMenuOpen} toggleMenu={toggleMenu} user={user} />
      <MainContent>
        <h1>Bem-vindo ao Workmap!</h1>
      </MainContent>
    </>
  );
};

export default App;
