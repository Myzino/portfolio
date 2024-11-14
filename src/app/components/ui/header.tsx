"use client";

import ws from "@/app/img/ws.png";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import Image from "next/image";
import { useState } from 'react';

const products = [
  { name: 'Analytics', description: 'Hourly Activity, when im coding', href: '/aboutme', icon: ChartPieIcon },
  { name: 'Projects', description: 'Highlighting My Personal Projects', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
  { name: 'Home', href: '/', icon: ChevronDownIcon },
  { name: 'Github', href: 'https://github.com/Myzino', icon: ChevronDownIcon },
];

const ProductMenu = () => (
  <div className="absolute left-1/2 transform -translate-x-1/2 top-full z-10 mt-3 w-max max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
    <div className="p-4">
      {products.map((item) => (
        <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
          </div>
          <div className="flex-auto">
            <a href={item.href} className="block font-semibold text-black">
              {item.name}
            </a>
            <p className="mt-1 text-black">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
      {callsToAction.map((item) => (
        <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-black hover:bg-gray-100">
          <item.icon className="h-5 w-5 text-gray-600" />
          {item.name}
        </a>
      ))}
    </div>
  </div>
);

export default function Example() {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProductMenu = () => setIsProductMenuOpen(!isProductMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="Company Logo" src={ws} className="h-10 w-auto" />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12 relative">
          <button
            onClick={toggleProductMenu}
            className="flex items-center gap-x-1 text-sm font-semibold text-white"
          >
           More 
            <ChevronDownIcon className="h-5 w-5 text-white" />
          </button>
          {isProductMenuOpen && <ProductMenu />}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <button
              onClick={toggleProductMenu}
              className="flex w-full items-center justify-between rounded-lg py-2 text-white"
            >
              More
              <ChevronDownIcon className="h-5 w-5 text-white" />
            </button>
            {isProductMenuOpen && (
              <div className="mt-2 space-y-2">
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg py-2 pl-6 text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
