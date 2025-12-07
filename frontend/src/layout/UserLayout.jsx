import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/user/Header";
import SplashScreen from "../components/user/SplashScreen";

const UserLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Animation variants for the main content
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <SplashScreen onLoadingComplete={handleLoadingComplete} />

      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            key="main-content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div variants={childVariants}>
              <Header />
            </motion.div>
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserLayout;
