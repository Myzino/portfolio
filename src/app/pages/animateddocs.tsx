"use client";
import {
    IconBrandGithub,
    IconBrandX,
    IconMail
} from "@tabler/icons-react";
import { FloatingDock } from "../components/ui/floating-dock";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:jeffreysedoro5@gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Jepriii08",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Myzino",
    },
  ];
  return (
    <div className="flex items-center ">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
