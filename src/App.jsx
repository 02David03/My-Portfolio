import { useEffect, useState } from 'react';
import AboutMe from './pages/about-me/AboutMe';
import Header from './shared-components/header/Header';
import SideBar from './shared-components/header/SideBar';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth));
    };
  },[]);

  return (
    <>
      {screenWidth > 768 ? <Header /> : <SideBar /> }
      <AboutMe />
    </>
  );
}

export default App;
