import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TimerContext } from "./home";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
// import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";

const images = [img1, img2, img3, img4, img5, img7, img8, img9];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
    scale: 1.2,
    zIndex: 2,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 2,
    transition: {
      duration: 0.5,
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0.3,
    scale: 0.9,
    zIndex: 1,
  }),
};

const ImageCarousel = () => {
  const timerCount = useContext(TimerContext);
  const currentIndex = timerCount % images.length;
  const direction = 1;

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel; 