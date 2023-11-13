import MyPhoto from '../../../assets/images/me.jpg';
import { motion } from 'framer-motion';
import './welcome.scss';

function Welcome() {
  return (
    <div className='flex items-center justify-center h-full'>
      <motion.linearGradient
          animate={{
            gradientTransform: `rotate( )`
          }}
        >
          <div className='animated-border rounded-md bg-gradient-to-tr from-black to-primary absolute top-56 left-96 w-1/5 p-2 z-0'>
            <img className='h-full w-full' src={MyPhoto} alt="Me" />
          </div>
          <stop offset="5%" stop-color="#A6EA99" />
          <stop offset="95%" stop-color="#E1F8DD" />
        </motion.linearGradient>
      <div className='flex flex-col bg-white rounded-lg w-5/12 shadow-lg text-right ml-80 p-6 z-10'> 
        <h1> greetings traveller:D </h1>
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
  );
}

export default Welcome;