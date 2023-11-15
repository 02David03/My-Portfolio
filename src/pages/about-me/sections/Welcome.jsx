import { motion, useAnimate} from 'framer-motion';
import { useEffect } from 'react';
import AnimatedTextWord from '../../../shared-components/AnimatedTextWord';
import MyPhoto from '../../../assets/images/me.jpg';
import Circle from '../../../assets/icons/circle.svg';
import FilledCircle from '../../../assets/icons/filled_circle.svg'

function Welcome() {
  const [welcome, animateWelcome] = useAnimate();


  useEffect(() => {
    const startAnimations = async () => {
      await animateWelcome('#myPhoto', {x:['-50vw', '0vw']}, {duration:1, type:'spring'})
      await animateWelcome('#welcomeMsg', {x:['50vw', '0vw'], opacity: [0, 1]}, {duration: 1, type:'spring'})
      await animateWelcome('#line',  {x:['-50%', '0%'], scaleX: [0, 1], opacity: 1 }, { origin: 0, duration: 0.75, type: 'spring'});
      await animateWelcome('#top-decoration img[alt=circle-1]', {scale: [0, 1.1, 1], opacity: 1 }, {duration: 0.3});
      await animateWelcome('#top-decoration img[alt=circle-2]', {scale: [0, 1.1, 1], opacity: 1 }, {duration: 0.3});
      await animateWelcome('#top-decoration img[alt=circle-3]', {scale: [0, 1.1, 1], opacity: 1 }, {duration: 0.3});
    }

    startAnimations().catch(console.error);
  },[]);

  return (
    <div ref={welcome} className='flex items-center justify-center h-full'>
      <motion.div
        id='myPhoto'
        className='rounded-md absolute top-56 left-96 w-1/5 p-2 z-0'
        animate={{
          rotateZ: [1, -1],
          x:[-3, 3],
          y:[-3, 3],
          backgroundColor: ["#DA7B36", "#1E1E1E"] 
        }}
        transition={{ease: 'easeInOut', type:'tween', duration: 2.5, repeatType:'reverse', repeat: Infinity}}
      >
        <img src={MyPhoto} alt="Me" />
      </motion.div>

      <div id='welcomeMsg' className='flex flex-col bg-white border-4 opacity-0 border-black shadow-[16px_16px_1px_#1E1E1E] rounded-lg w-5/12 text-right ml-80 py-6 px-8 z-10'> 
        <div id='top-decoration' className='flex items-center justify-around'>
          <div id='line' className='flex bg-black w-9/12 rounded h-1 opacity-0'></div>
          <img className='w-10 opacity-0 ms-4' src={Circle} alt="circle-1" />
          <img className='w-10 opacity-0' src={Circle} alt="circle-2" />
          <img className='w-10 opacity-0' src={FilledCircle} alt="circle-3" />  
        </div>
        <div className='ml-2'>
          <AnimatedTextWord text={'Greetings Traveller :D'} delay={3.8} className='text-5xl font-semibold black justify-end mt-1 mb-4' />
          
          <AnimatedTextWord text={"So... I've heard that you are searching for a developer isn't? A web developer? Maybe a mobile developer? If it's your case my friend, you'll be happy to know that your searching is getting an end."}
            delay={4.5} className='text-2xl justify-end mb-2' />
          <AnimatedTextWord text={"You may be a little tired of browsing for their in this imense oceon. I Know, i know, that is a lot of this kind around here nowdays."}
            delay={10} className='text-2xl justify-end mb-2' />
          <AnimatedTextWord text={"But, Take a sit my friend, Don’t be shy, feel at home, let me tell you a bit about me, i know that your time is precios and i dont want to bother you, but i swear it will not take too long."}
            delay={14} className='text-2xl justify-end mb-2' />
          <AnimatedTextWord text={"I’m sorry, where are my manners, my name is David de Almeida, I’m 23 years old, at the moment I’m a Front-End develloper and a waking dreamer on the free hours. Feel free to explore my humble place, mi casa es su casa!"}
            delay={20} className='text-2xl justify-end' />
        </div>
      </div>
    </div>
  );
}

export default Welcome;