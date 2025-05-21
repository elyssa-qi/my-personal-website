import React from "react";
import { motion } from "framer-motion";

interface TimelineCardProps {
  title: string;
  role: string;
  period: string;
  description: string;
  isLeft: boolean;
  index: number;
}

const TimelineCard = ({ title, role, period, description, isLeft, index }: TimelineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex ${isLeft ? 'justify-end md:pr-8' : 'justify-start md:pl-8'} md:w-1/2 ${isLeft ? 'md:ml-auto' : ''}`}
    >
      {/* Card */}
      <div className={`relative w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/20 
        rounded-xl p-6 ${isLeft ? 'md:mr-4' : 'md:ml-4'} my-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]`}>
        <div className={`${isLeft ? 'text-right' : 'text-left'}`}>
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-lg text-white/90 font-medium mb-1">{role}</p>
          <p className="text-sm text-white/70 mb-4">{period}</p>
        </div>
        <div className="text-white/80 text-base whitespace-pre-line">{description}</div>
      </div>
    </motion.div>
  );
};

export default TimelineCard; 