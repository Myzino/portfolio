import ws from "@/app/img/ws.png";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from "next/image";
import { MouseEventHandler, useState } from 'react';

// Define types for products and callsToAction
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

// Product and action lists with types
const products: Product[] = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction: CallToAction[] = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

// Define MenuButton with props type
type MenuButtonProps = {
  name: string;
  onClick: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

const MenuButton = ({ name, onClick }: MenuButtonProps) => (
  <button onClick={onClick} className="text-sm font-semibold text-black hover:bg-gray-50">
    {name}
  </button>
);

const ProductMenu = () => (
  <Popover>
    <PopoverPanel
      transition
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
    </PopoverPanel>
  </Popover>
);

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (event) => {
    event.preventDefault();
    setMobileMenuOpen(false);
  };

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
          <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
              Product
              <ChevronDownIcon className="h-5 w-5 text-white" />
            </PopoverButton>
            <ProductMenu />
          </Popover>
          {['Home', 'About', 'Contact'].map((name) => (
            <MenuButton key={name} name={name} onClick={handleMenuClick} />
          ))}
        </PopoverGroup>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <Image alt="Company Logo" src={ws} className="h-8 w-auto" />
            </a>
            <button onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-500">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            <Disclosure as="div">
              <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-black hover:bg-gray-50">
                Product
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-1">
                {[...products, ...callsToAction].map((item) => (
                  <DisclosureButton key={item.name} as="a" href={item.href} onClick={handleMenuClick} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-black hover:bg-gray-50">
                    {item.name}
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>
            {['Features', 'Marketplace', 'Company'].map((name) => (
              <MenuButton key={name} name={name} onClick={handleMenuClick} />
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
