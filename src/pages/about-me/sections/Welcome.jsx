import { motion, useAnimate} from 'framer-motion';
import { useEffect } from 'react';
import MyPhoto from '../../../assets/images/me.jpg';
import Circle from '../../../assets/icons/circle.svg';
import FilledCircle from '../../../assets/icons/filled_circle.svg'

function Welcome() {
  const [welcome, animateWelcome] = useAnimate();


  useEffect(() => {
    const animations = async () => {
      await animateWelcome('#top-decoration img[alt=circle-3]', {scale: [0, 1.1, 1], opacity: 1 }, {duration: 0.5});
      await animateWelcome('#top-decoration img[alt=circle-2]', {scale: [0, 1.1, 1], opacity: 1 }, {duration: 0.5});
      await animateWelcome('#top-decoration img[alt=circle-1]', {scale: [0, 1.1, 1], opacity: 1 }, {duration: 0.5});
      await animateWelcome('#line',  {x:['50%', '0%'], scaleX: [0, 1], opacity: 1 }, { origin: 0, duration: 1, type: 'spring'});
    }
    animations()
  },[]);

  return (
    <div ref={welcome} className='flex items-center justify-center h-full'>
      <motion.div
        id='myPhoto'
        className='rounded-md absolute top-56 left-96 w-1/5 p-2 z-0'
        animate={{
          rotateZ: [2, -2],
          x:[3,-3],
          y:[3,-3],
          backgroundColor: ["#DA7B36", "#1E1E1E", "#DA7B36"] 
        }}
        transition={{ease: 'easeInOut', type:'tween', duration: 3, repeatType:'reverse', repeat: Infinity}}
      >
        <img src={MyPhoto} alt="Me" />
      </motion.div>

      <div id='welcomeMsg' className='flex flex-col bg-white border-4 border-black shadow-[16px_16px_1px_#1E1E1E] rounded-lg w-5/12 text-right ml-80 p-6 z-10'> 
        <div id='top-decoration' className='flex items-center justify-around'>
          <div id='line' className='flex bg-black w-9/12 rounded h-1 opacity-0'></div>
          <img className='w-10 opacity-0 ms-4' src={Circle} alt="circle-1" />
          <img className='w-10 opacity-0' src={Circle} alt="circle-2" />
          <img className='w-10 opacity-0' src={FilledCircle} alt="circle-3" />  
        </div>
        <div className='ml-2'>
          <h1 className='mb-4'> greetings traveller:D </h1>
          <p>
            So... I've heard that you are searching for a developer isn't? A web developer? Maybe a mobile developer? If it's your case my friend, you'll be happy to know that your searching is getting an end.
            <br />
            You may be a little tired of browsing for their in this imense oceon. I Know, i know, that is a lot of this kind around here nowdays.
            <br />
            But, Take a sit my friend, Don’t be shy, feel at home, let me tell you a bit about me, i know that your time is precios and i dont want to bother you, but i swear it will not take too long.
            <br />
            I’m sorry, where are my manners, my name is David de Almeida, I’m 23 years old, at the moment I’m a Front-End develloper and a waking dreamer on the free hours. Feel free to explore my humble place, mi casa es su casa!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;