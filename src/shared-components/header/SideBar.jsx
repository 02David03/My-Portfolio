import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";

const sidebar = {
  open: () => ({
    clipPath: `circle(2000px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(24px at 45px 45px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

function SideBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  useEffect(() => {
  },[]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="fixed w-72 top-0 left-0 bottom-0 bg-primary z-40" variants={sidebar} />
      <motion.ul variants={variants}>

      </motion.ul>
      <a className="hover:font-bold" href="#Welcome"> About me </a>
      <a className="hover:font-bold" href="#"> Portfolio </a>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

const MenuToggle = ({ toggle }) => (
  <button className="bg-primary absolute cursor-pointer rounded-full z-50 mt-4 ms-4 p-4" onClick={toggle}>
    <svg viewBox="0 0 20 20" className="w-6 h-6 text-primary">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);

const Path = props => (
  <motion.path
    className='stroke-black fill-none'
    strokeWidth="2.5"
    strokeLinecap="round"
    {...props}
  />
);

export default SideBar;