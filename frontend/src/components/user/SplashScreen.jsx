import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Compass, MapPin, Globe } from "lucide-react";
import logo from "../../assets/NaviGo_Logo.png";

const SplashScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const steps = [
      { duration: 800, action: () => setCurrentStep(1) },
      { duration: 800, action: () => setCurrentStep(2) },
      { duration: 800, action: () => setCurrentStep(3) },
      { duration: 1200, action: () => {} }, // Final display time
      { duration: 800, action: () => setIsVisible(false) },
      { duration: 300, action: onLoadingComplete },
    ];

    let cumulativeDelay = 0;
    steps.forEach((step) => {
      cumulativeDelay += step.duration;
      setTimeout(step.action, cumulativeDelay);
    });
  }, [onLoadingComplete]);

  const logoVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: 0.3,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
    },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: custom * 0.2,
      },
    }),
    exit: {
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const loadingBarVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 3.5,
        ease: "easeInOut",
      },
    },
  };

  const backgroundVariants = {
    initial: {
      background:
        "linear-gradient(135deg, #0ea5e9 0%, #0369a1 50%, #0c4a6e 100%)",
    },
    animate: {
      background: [
        "linear-gradient(135deg, #0ea5e9 0%, #0369a1 50%, #0c4a6e 100%)",
        "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 50%, #0369a1 100%)",
        "linear-gradient(135deg, #0369a1 0%, #0c4a6e 50%, #0ea5e9 100%)",
        "linear-gradient(135deg, #0ea5e9 0%, #0369a1 50%, #0c4a6e 100%)",
      ],
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-600 via-blue-600 to-slate-800"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="text-center text-white">
            {/* Main Logo Container */}
            <motion.div
              className="relative mb-8"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Animated Icons Orbit */}
              <div className="relative">
                {/* Central Logo */}
                <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30">
                  <motion.div
                    className="text-4xl font-black bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <img src={logo} alt="" />
                  </motion.div>
                </div>

                {/* Orbiting Icons */}
                {currentStep >= 1 && (
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg border border-white/30"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    exit="exit"
                    animate={{
                      rotate: 360,
                      transition: {
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      },
                    }}
                  >
                    <Plane className="w-6 h-6 text-white" />
                  </motion.div>
                )}

                {currentStep >= 2 && (
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border border-white/30"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    exit="exit"
                    animate={{
                      rotate: -360,
                      transition: {
                        rotate: {
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      },
                    }}
                  >
                    <Compass className="w-6 h-6 text-white" />
                  </motion.div>
                )}

                {currentStep >= 3 && (
                  <motion.div
                    className="absolute -top-4 -left-4 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg border border-white/30"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    exit="exit"
                    animate={{
                      rotate: 360,
                      transition: {
                        rotate: {
                          duration: 12,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      },
                    }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </motion.div>
                )}

                {currentStep >= 3 && (
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shadow-lg border border-white/30"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                    exit="exit"
                    animate={{
                      rotate: -360,
                      transition: {
                        rotate: {
                          duration: 14,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      },
                    }}
                  >
                    <Globe className="w-5 h-5 text-white" />
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              NaviGo
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-xl md:text-2xl font-light text-cyan-100 mb-8 opacity-90"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Your Journey Begins Here
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              className="w-64 mx-auto bg-white/20 rounded-full h-2 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-200 to-white rounded-full"
                variants={loadingBarVariants}
                initial="initial"
                animate="animate"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="mt-4 text-cyan-100 font-medium text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {currentStep === 0 && "Initializing adventure engine..."}
              {currentStep === 1 && "Charting your course..."}
              {currentStep === 2 && "Loading travel wonders..."}
              {currentStep === 3 && "Preparing your journey..."}
              {currentStep >= 4 && "Ready to explore!"}
            </motion.p>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0,
                  }}
                  animate={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
