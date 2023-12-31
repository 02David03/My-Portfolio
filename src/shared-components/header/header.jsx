import { motion, useAnimate } from "framer-motion";
import { useState, useEffect } from "react";

function Header() {
  const [x, setX] = useState(0);
  const [scaleX, setScaleX] = useState(1);
  const [nav, animateNav] = useAnimate('spring');

  useEffect(() => {
    const navAnimation = async () => {
      await animateNav('#line', {x: [600, -350, 150, 0], scaleX: [0.4, 0.3, 0.4, 1 ]}, {duration: 1.5});
      await animateNav('#links', {opacity: [0, 1]}, {duration: 0.5});
    }

    navAnimation().catch(console.error);
  },[]);

  return(
    <header className="bg-black flex justify-center fixed w-full top-0 z-50">
      <div className="container flex justify-between items-center py-2">
        <a href="#Welcome" className="rounded-full bg-white px-2 cursor-pointer">
          <h2 className="text-black"> D.A </h2>
        </a>
        <nav ref={nav} className="flex flex-col items-end scroll-smooth gap-1">
          <div id="links" className="text-primary text-4xl flex gap-6 opacity-0">
            <a className="hover:font-bold" 
              onMouseEnter={() => {setScaleX(0.5); setX(-70) }}
              onMouseLeave={() => {setScaleX(1); setX(0)}}
              href="#Welcome"> About me </a>
            <a className="hover:font-bold" 
              onMouseEnter={() => {setScaleX(0.5); setX(100) }}
              onMouseLeave={() => {setScaleX(1); setX(0)}}
              href="#"> Portfolio </a>
          </div>
          <motion.div id='line'
            className="flex w-80 h-1 bg-primary rounded"
            animate={{x, scaleX}}
            transition={{ type: 'spring' }}
          />
        </nav>
      </div>
    </header>
  )
}

export default Header;