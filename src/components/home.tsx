import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import Typewriter from "./typewriter";
import AnimatedStack from "./AnimatedStack";
import ImageCarousel from "./ImageCarousel";
import TimelineCard from "./TimelineCard";

// Create a context for the shared timer
export const TimerContext = React.createContext<number>(0);

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [percent, setPercent] = React.useState(0);
  const [slideOut, setSlideOut] = React.useState(false);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => {
    // Wait 500ms before starting the count
    const delay = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(delay);
  }, []);
  React.useEffect(() => {
    if (!started) return;
    if (percent < 100) {
      const interval = setInterval(() => {
        setPercent((prev) => (prev < 100 ? prev + 1 : 100));
      }, 24); // slower count up
      return () => clearInterval(interval);
    } else {
      // Trigger slide out after a short pause at 100
      const timeout = setTimeout(() => setSlideOut(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [percent, started]);
  // Call onFinish after slide out animation
  React.useEffect(() => {
    if (slideOut) {
      const timeout = setTimeout(() => {
        onFinish();
      }, 800); // match slide out duration
      return () => clearTimeout(timeout);
    }
  }, [slideOut, onFinish]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={slideOut ? { x: '-100vw', opacity: 0 } : { opacity: 1, x: 0 }}
        transition={{ duration: slideOut ? 0.8 : 0.5, ease: 'easeInOut' }}
        className="text-[12vw] font-roboto absolute bottom-[-2vw] right-[2vw] bg-gradient-to-r from-[#da3f49] via-[#e590ae] to-[#e9a548] bg-clip-text text-transparent"
      >
        {percent}%
      </motion.div>
    </motion.div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [isGradientMounted, setIsGradientMounted] = useState(false);
  const [timerCount, setTimerCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // First, wait a bit before starting to load the gradient
    const gradientTimer = setTimeout(() => {
      setIsGradientMounted(true);
    }, 500);

    const timer = setInterval(() => {
      setTimerCount(prev => prev + 1);
    }, 5000);

    // Add scroll event listener
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
        
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        // Set a new timeout
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150); // Adjust this value to control how long the scroll "pauses"
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(gradientTimer);
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  return (
    <TimerContext.Provider value={timerCount}>
      <div className="min-h-screen bg-background relative">
        <AnimatePresence mode="wait">
          {showLoadingScreen && (
            <LoadingScreen onFinish={() => {
              setShowLoadingScreen(false);
              setIsLoading(false);
            }} />
          )}
        </AnimatePresence>

        <div className="fixed inset-0 z-0">
          <AnimatePresence>
            {isGradientMounted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
              >
                <ShaderGradientCanvas className="w-full h-full">
                  <ShaderGradient
                    type="waterPlane"
                    animate="on"
                    color1="#f0b0c9"
                    color2="#eb7143"
                    color3="#f3a851"
                    brightness={1.2}
                    grain="off"
                    lightType="3d"
                    uSpeed={0.2}
                    uStrength={4}
                    uDensity={1.3}
                    uFrequency={5.5}
                    uAmplitude={0}
                    positionX={-1.4}
                    positionY={0}
                    positionZ={0}
                    rotationX={0}
                    rotationY={10}
                    rotationZ={50}
                    reflection={0.1}
                    wireframe={false}
                    shader="defaults"
                    cAzimuthAngle={180}
                    cPolarAngle={90}
                    cDistance={3.6}
                    envPreset="city"
                  />
                </ShaderGradientCanvas>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative z-10">
          <Navbar />

          <div className="snap-y snap-mandatory">
            {/* Hero Section */}
            <section
              id="home"
              className="min-h-screen flex items-center justify-center px-4 snap-start"
            >
              <div className="container max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-0"
                >
                  <div className="space-y-0 text-white">
                    <div className="flex items-center justify-center gap-1 mb-[-2px]">
                      <Typewriter />
                      <h2 className="text-xl md:text-[30px] font-roboto font-[550]">
                       my name is
                      </h2>
                    </div>
                    <h1 className="text-[90px] md:text-[120px] font-['The_Seasons'] -mt-6 leading-[1.2]">
                      Elyssa Qi
                    </h1>
                    <div className="-mt-20 space-y-1">
                      <h2 className="text-xl md:text-[25px] font-roboto font-[570]">
                        Systems Design Engineering Student
                      </h2>
                      <h2 className="text-xl md:text-[25px] font-roboto font-[570] -mt-2">
                        at the University of Waterloo
                      </h2>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="min-h-screen py-20 px-4 snap-start">
              <div className="container max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                  <h1 className="text-7xl md:text-6xl font-[600] text-white text-center mb-16">
                    About Me
                  </h1>
                  
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="w-full aspect-[4/3]">
                      <ImageCarousel />
                    </div>
                    
                    <div className="space-y-8">
                      <div className="flex items-center gap-2">
                        <h2 className="text-3xl md:text-4xl text-white font-roboto font-[550] flex items-center gap-1 items-center">
                          👋 Hello, I'm <AnimatedStack />
                        </h2>
                      </div>
                      <p className="text-2xl text-white/80 font-roboto font-[350] leading-relaxed">
                        Currently a first year engineering student at the University of Waterloo.
                        I am passionate about building at the intersection of Software and Design.
                        My hobbies include playing volleyball, trying new food, and spending time
                        with family & friends.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen py-20 px-4 snap-start">
              <div className="container max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                  <h1 className="text-7xl md:text-6xl font-[600] text-white text-center mb-16">
                    Experience
                  </h1>

                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-white/30" />
                    
                    {/* Timeline content */}
                    <div className="relative">
                      <TimelineCard
                        title="Waterloo Rocketry"
                        role="Software Developer"
                        period="February 2025 - Present"
                        description={`• Improved rocket simulation accuracy by 65% with a Java plugin analyzing 10,000+ launch permutations.
• Automated CSV data export in Java, saving 5+ hours of manual work weekly.
• Cut monitoring latency by 40% by leading development of a Python/Folium live sensor map for 50+ rocket feeds.`}
                        isLeft={false}
                        index={0}
                      />
                      <TimelineCard
                        title="University of Waterloo"
                        role="Undergraduate Research Assistant"
                        period="January 2025 - Present"
                        description={`• Enabled data-driven policing decisions by analyzing Chicago crime data under Dr. Ken McKay's supervision.
• Uncovered crime patterns via geospatial visualizations (Python) and ARIMA time series forecasting.
• Achieved 85% burglary prediction accuracy by building PyTorch forecasting models.`}
                        isLeft={true}
                        index={1}
                      />
                      <TimelineCard
                        title="Dima Technology Inc."
                        role="Software Engineer Intern"
                        period="January 2025 - April 2025"
                        description={`• Realigned website with post-merger strategy by rebuilding it in TypeScript and React.
• Saved 10+ hours weekly by automating repetitive tasks with Python scripts.
• Streamlined sales reporting via a Java system automating analytics and CSV generation.`}
                        isLeft={false}
                        index={2}
                      />
                      <TimelineCard
                        title="CYASR"
                        role="Full-Stack Web Developer"
                        period="August 2024 - December 2024"
                        description={`• Built a responsive full-stack app (React, TypeScript, Tailwind) with 88% Lighthouse score
• Developed a SendGrid contact form with validation and 100% delivery success
• Deployed with CI/CD for 99.9% uptime and performance monitoring`}
                        isLeft={true}
                        index={3}
                      />
                      <TimelineCard
                        title="Markham Mayor's Youth Council"
                        role="Project Manager & Marketing Coordinator"
                        period="September 2020 - May 2024"
                        description={`• Built Markham youth council website (JavaScript) in partnership with City of Markham
• Enabled multilingual access via Google Translate API for 1,500+ monthly visitors
• Boosted event attendance 300% (3,200+ attendees) by leading 10+ member marketing team
• Created promotional graphics (Photoshop/Figma) featured on city billboards and social media`}
                        isLeft={false}
                        index={4}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 px-4">
          <div className="container max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white">
                {new Date().getFullYear()} © Elyssa Qi
              </p>
              <div className="flex gap-1 mt-4 md:mt-0 relative ml-auto">
                {/* State to track which icon is hovered, and add margin to the next icon only when hovered */}
                {(() => {
                  const [hovered, setHovered] = React.useState<number | null>(null);
                  const icons = [
                    {
                      key: 'github',
                      href: 'https://github.com/elyssa-qi',
                      label: 'GitHub',
                      icon: <Github className="h-5 w-5 text-white/80 hover:text-white transition-colors" />,
                    },
                    {
                      key: 'linkedin',
                      href: 'https://linkedin.com/in/elyssa-qi',
                      label: 'LinkedIn',
                      icon: <Linkedin className="h-5 w-5 text-white/80 hover:text-white transition-colors" />,
                    },
                    {
                      key: 'email',
                      href: 'mailto:elyssaqi314@gmail.com',
                      label: 'Email',
                      icon: <Mail className="h-5 w-5 text-white/80 hover:text-white transition-colors" />,
                    },
                    {
                      key: 'resume',
                      href: 'https://drive.google.com/file/d/1SFLogNH90TOeEn9-h5lnbZPbF69euYEM/view?usp=sharing',
                      label: 'Resume',
                      icon: <Download className="h-5 w-5 text-white/80 hover:text-white transition-colors" />,
                    },
                  ];
                  return (
                    <>
                      {icons.map(({ key, href, label, icon }, idx) => (
                        <React.Fragment key={key}>
                          <a
                            href={href}
                            target={key === 'email' ? undefined : '_blank'}
                            rel={key === 'email' ? undefined : 'noopener noreferrer'}
                            aria-label={label}
                            className="flex items-center group relative"
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                          >
                            {icon}
                            <span
                              className={`overflow-hidden whitespace-nowrap ml-2 text-white text-sm transition-all duration-200 ${hovered === idx ? 'w-auto opacity-100 max-w-xs' : 'w-0 opacity-0 max-w-0'}`}
                            >
                              {label}
                            </span>
                          </a>
                          {/* Add margin to the next icon only when hovered */}
                          {hovered === idx && idx < icons.length - 1 && (
                            <span className="transition-all duration-200" style={{ width: '0.75rem', display: 'inline-block' }} />
                          )}
                        </React.Fragment>
                      ))}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TimerContext.Provider>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Home;
