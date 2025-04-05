import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  onClick?: () => void;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and what technologies were used.",
  image = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  techStack = ["React", "TypeScript", "Tailwind"],
  onClick = () => console.log("Project card clicked"),
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden cursor-pointer bg-white hover:shadow-lg transition-shadow duration-300"
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold">{title}</h3>
        </CardHeader>

        <CardContent className="pb-2">
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2 pt-0">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
