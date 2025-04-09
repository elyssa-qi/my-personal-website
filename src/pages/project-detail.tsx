import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import casrImage from "../images/casrimg.png";
import uwImage from "../images/uraimg.png";
import compImage from "../images/sumimg.png";
import pwrImage from "../images/pwerpimg.png";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  github?: string;
  timeline?: string;
  overview?: string;
  tools?: string[];
}

// This would typically come from an API or database
const projects: Project[] = [
  {
    id: "1",
    title: "CASR",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: casrImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/sandbox",
    timeline: "5 Weeks, April - May 2024",
    overview: "Sandbox is an open source, AI-powered, collaborative code editing environment.",
    tools: ["Next.js", "TypeScript"]
  },
  {
    id: "2",
    title: "University of Waterloo",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: uwImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/sandbox",
    timeline: "5 Weeks, April - May 2024",
    overview: "Sandbox is an open source, AI-powered, collaborative code editing environment.",
    tools: ["Next.js", "TypeScript"]
  }, // ... other projects
  {
    id: "3",
    title: "ComparaSum",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: compImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/sandbox",
    timeline: "5 Weeks, April - May 2024",
    overview: "Sandbox is an open source, AI-powered, collaborative code editing environment.",
    tools: ["Next.js", "TypeScript"]
  }, 
  {
    id: "4",
    title: "Power Prompt",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: pwrImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://github.com/yourusername/sandbox",
    timeline: "5 Weeks, April - May 2024",
    overview: "Sandbox is an open source, AI-powered, collaborative code editing environment.",
    tools: ["Next.js", "TypeScript"]
  }, 
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white px-4 py-4">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
          >
            GitHub
            <ArrowLeft className="h-4 w-4 ml-2 rotate-[45deg]" />
          </a>
        )}
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-5xl font-seasons mb-1">{project.title}</h1>
          <p className="text-gray-400">Project, {new Date().getFullYear()}</p>
        </div>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl mb-1">Timeline</h2>
            <p className="text-gray-400 mb-4">{project.timeline}</p>
            
            <h2 className="text-xl mb-1">Tools</h2>
            <div className="space-y-0.5">
              {project.tools?.map((tool, index) => (
                <p key={index} className="text-gray-400">{tool}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-1">Overview</h2>
            <p className="text-gray-400">{project.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 