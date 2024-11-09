"use client";

import ws from "@/app/img/ws.png";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import Image from "next/image";
import { useState } from 'react';

type Product = {
  name: string;
  description: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

type CallToAction = {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

const products: Product[] = [
  { name: 'Analytics', description: 'Hourly Activity, when im coding', href: '/aboutme', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction: CallToAction[] = [
  { name: 'Watch demo', href: '#', icon: ChevronDownIcon },
  { name: 'Contact sales', href: '#', icon: ChevronDownIcon },
];

const ProductMenu = () => (
  <div
    className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition"
  >
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

  const toggleProductMenu = () => setIsProductMenuOpen(!isProductMenuOpen);

  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="Company Logo" src={ws} className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <ChevronDownIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 relative">
          <button
            onClick={toggleProductMenu}
            className="flex items-center gap-x-1 text-sm font-semibold text-white"
          >
            Product
            <ChevronDownIcon className="h-5 w-5 text-white" />
          </button>
          {isProductMenuOpen && <ProductMenu />}
          {['Home', 'About', 'Contact'].map((name) => (
            <button
              key={name}
              onClick={() => {}}
              className="text-sm font-semibold text-white"
           
            >
              {name}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
