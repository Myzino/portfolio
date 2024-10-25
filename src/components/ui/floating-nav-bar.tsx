"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  let idleTimeout: NodeJS.Timeout | null = null;

 
  const startIdleTimer = () => {
    idleTimeout = setTimeout(() => {
      if (!isHovered) {
        setVisible(false);
      }
    }, 1000); // 3 seconds timeout
  };

  // Reset the idle timer upon any user activity
  const resetIdleTimer = () => {
    if (idleTimeout) clearTimeout(idleTimeout);
    setVisible(true);
    startIdleTimer();
  };

  useEffect(() => {
    // Add event listeners for activity detection (keyboard, scroll, touch, etc.)
    const events = ["mousemove", "touchstart", "scroll", "keydown"];
    events.forEach(event => window.addEventListener(event, resetIdleTimer));

    // Cleanup on component unmount
    return () => {
      events.forEach(event => window.removeEventListener(event, resetIdleTimer));
      if (idleTimeout) clearTimeout(idleTimeout);
    };
  }, [idleTimeout, isHovered]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        onMouseEnter={() => {
          setIsHovered(true);
          setVisible(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          startIdleTimer(); 
        }}
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 p-5",
          className
        )}
      >
        {navItems.map((navItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-red-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}

        <button className="border-transparent text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-neutral-600 dark:text-white px-4 py-2 rounded-full hover:text-red-500">
          <span>About Me</span>
        </button>

        <button className="border-transparent text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-neutral-600 dark:text-white px-4 py-2 rounded-full hover:text-red-500">
          <span>Contact</span>
        </button>

        <button className="border-transparent text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-neutral-600 dark:text-white px-4 py-2 rounded-full hover:text-red-500">
          <span>Hobbies</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
