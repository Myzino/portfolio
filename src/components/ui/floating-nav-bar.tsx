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

  // Function to hide navbar after 5 seconds of idle
  const startIdleTimer = () => {
    idleTimeout = setTimeout(() => {
      if (!isHovered) {
        setVisible(false);
      }
    }, 3000); // 5 seconds
  };

  // Reset idle timer on mouse move
  const resetIdleTimer = () => {
    if (idleTimeout) clearTimeout(idleTimeout);
    setVisible(true);
    startIdleTimer();
  };

  useEffect(() => {
    // Track mouse movements to reset idle timer
    window.addEventListener("mousemove", resetIdleTimer);

    // Clean up event listeners when component unmounts
    return () => {
      window.removeEventListener("mousemove", resetIdleTimer);
      if (idleTimeout) clearTimeout(idleTimeout);
    };
  }, [isHovered]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        onMouseEnter={() => {
          setIsHovered(true);
          setVisible(true); // Show on hover
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          startIdleTimer(); // Restart idle timer when not hovering
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
