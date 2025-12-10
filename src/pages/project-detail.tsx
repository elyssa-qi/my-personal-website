import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import casrImage from "../images/casrimg.png";
import uwImage from "../images/uraimg.png";
import compImage from "../images/sumimg.png";
import pwrImage from "../images/pwerpimg.png";
import pinkImage from "../images/pinkyimg.png";
import sickImage from "../images/sickyimg.png";
import novaImage from "../images/technovaimg.png";
import rocketImage from "../images/rocketryimg.png";

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
    description: "",
    imageUrl: casrImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://github.com/elyssa-qi/casr",
    timeline: "5 Months, August - December 2024",
    overview: "Founded in 2024 by high school athletes, CASR began as a peer-led initiative based on their experiences with sports injuries, burnout, and mental health challenges. Now a national nonprofit, it helps young athletes recover, prevent injuries, and build mental resilience.",
    tools: ["React.js", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "2",
    title: "University of Waterloo",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: uwImage,
    techStack: ["Next.js", "TypeScript"],
    timeline: "January 2025 - Present",
    overview: "Our mission is to leverage behavioural and crime report data to create an intelligent, pattern-recognition tool that supports faster, more informed decision-making by law enforcement. By learning from the past, we aim to bring structure and insights to future investigations.",
    tools: ["Python", "PyTorch"]
  }, // ... other projects
  {
    id: "3",
    title: "ComparaSum",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: compImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://devpost.com/software/comparasum",
    timeline: "3 Weeks, January - February 2025",
    overview: "ComparaSum is an AI-powered review summarizer designed to streamline online shopping. It generates concise summaries of Amazon product reviews for any given ASIN, highlighting key pros and cons to aid decision-making. The tool also enables side-by-side comparisons of multiple products and provides sentiment analysis based on thousands of customer reviews. ",
    tools: ["Python", "Flask", "React.js", "TypeScript"]
  }, 
  {
    id: "4",
    title: "Power Prompt",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: pwrImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://devpost.com/software/powerprompt",
    timeline: "2 Days, February 2025",
    overview: "PowerPrompt is a Chrome extension that raises awareness about AI's environmental impact by providing real-time feedback on energy use, token count, and carbon footprint during ChatGPT interactions. ",
    tools: ["React.js", "JavaScript"]
  }, 
  {
    id: "5",
    title: "The Pink Stairs",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: pinkImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://thepinkstairs.wixsite.com/mysite",
    timeline: "March 2025 - Present",
    overview: "The Pink Stairs is one of the world's largest youth-led non-profit organization dedicated to empowering young women through community, opportunity, and leadership development.",
    tools: ["React.js", "TypeScript"]
  }, 
  {
    id: "6",
    title: "Koziarski Lab",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: sickImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://github.com/yanxue06/ML-Age",
    timeline: "November 2024 - Present",
    overview: "This project explores the lifespan extension potential of chemical compounds using machine learning. Under the mentorship of Dr. Michał Koziarski, we are developing predictive models to assess compounds' effects on longevity and cluster compounds with most positive health benefits.",
    tools: ["Next.js", "TypeScript"]
  }, 
  {
    id: "7",
    title: "TechNova",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: novaImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://itstechnova.org/",
    timeline: "March 2025 - Present",
    overview: "TechNova's mission is to create safe, inclusive and empowering spaces for women and non-binary individuals to start, grow and thrive in the technology industry. We value fostering an inclusive community, connecting students with career opportunities, and empowering hackers to create.",
    tools: ["Figma"]
  }, 
  {
    id: "8",
    title: "Waterloo Rocketry",
    description: "AI-powered, collaborative code editing environment.",
    imageUrl: rocketImage,
    techStack: ["Next.js", "TypeScript"],
    github: "https://www.waterloorocketry.com/",
    timeline: "February 2025 - Present",
    overview: "As a Software Developer at Waterloo Rocketry, I built tools to make rocket testing faster and more accurate. I automated data analysis, saving hours of manual work each week, and created a real-time tracking system to monitor rocket performance more efficiently. My work helped the team make better decisions and improve launch success.",
    tools: ["Java", "Python", "Folium"]
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
            {["5", "7", "8"].includes(project.id)
              ? "Website"
              : ["3", "4"].includes(project.id)
              ? "Devpost"
              : "GitHub"}
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </a>
        )}
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-5xl font-seasons mb-1">{project.title}</h1>
          <p className="text-gray-400">{project.id === "1" ? "Work, 2024" : project.id === "2" ? "Research, 2025" : project.id === "5" ? "Work, 2025" : project.id === "7" ? "Work, 2025" : project.id === "8" ? "Work, 2025" : `Project, ${new Date().getFullYear()}`}</p>
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
            <h2 className="text-xl mb-1 text-white">Timeline</h2>
            <p className="text-white/80 mb-4">{project.timeline}</p>
            
            <h2 className="text-xl mb-1 text-white">Tools</h2>
            <div className="space-y-0.5">
              {project.tools?.map((tool, index) => (
                <p key={index} className="text-white/80 text-base">{tool}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-1 text-white">Overview</h2>
            <p className="text-white/80">{project.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 