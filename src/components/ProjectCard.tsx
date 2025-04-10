import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link?: string;
  id: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  id,
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`}>
      <motion.div
        className="relative group"
      >
        <div className="aspect-[16/9] overflow-hidden bg-zinc-900">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-xl text-white group-hover:underline">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
