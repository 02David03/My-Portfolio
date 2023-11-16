import { motion   } from "framer-motion";

const AnimatedTextWord = ({ text, delay, className }) => {
  const words = text.split(" ");

  const container = {
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: (delay + 0.04)  * i  },
    }),
  };

  const child = {
    visible: {
      x:[20, 0],
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={`${className} flex flex-wrap opacity-0`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          className="opacity-0 me-2"
          variants={child}
          delay={delay}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;