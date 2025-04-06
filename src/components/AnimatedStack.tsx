import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TimerContext } from "./home";

const words = ["Elyssa Qi", "a Developer", "a Designer", "a Researcher"];

const AnimatedStack = () => {
  const timerCount = useContext(TimerContext);
  const index = timerCount % words.length;

  return (
    <div className="relative h-[40px] inline-block ml-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute whitespace-nowrap text-white text-3xl md:text-4xl font-roboto font-[550]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedStack; 