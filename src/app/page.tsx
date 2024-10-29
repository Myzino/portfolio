// src/app/page.tsx or src/app/components/home.tsx
"use client";

import { AlertDialogDemo } from "@/app/components/ui/alert-dialog";
import Footer from "@/app/components/ui/footer";
import Header from "@/app/components/ui/header"; // Import Header component
import { FloatingDockDemo } from "@/app/pages/animateddocs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiLaravel, SiNextdotjs, SiPaypal, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import jepjeppic from "./img/jepjep.jpg";
import { AnimatedModalDemo } from "./pages/animatedmodal";

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleConfirm = () => {
        window.open("https://paypal.me/jeffrey519412?country.x=PH&locale.x=en_US", "_blank");
    };

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* Header */}
            <Header />


            <div className="flex flex-1 overflow-hidden">
                <div className="w-64 p-6 flex flex-col bg-gray-900 overflow-hidden">
                    <div className="flex-grow overflow-auto">
                        <div className="w-40 h-40 rounded-full mb-4 overflow-hidden">
                            <Image
                                src={jepjeppic}
                                alt="Profile"
                                className="w-full h-full object-cover"
                                width={160}
                                height={160}
                            />
                        </div>
                        <h1 className="text-xl font-bold mb-2 text-center">Jeffrey Sedoro</h1>
                        <p className="text-center">An IT student</p>
                        <p className="text-center mb-4">Residing in Bukidnon, Mindanao, Philippines</p>
                        <p className="text-sm italic text-center mb-6">
                            &quot;No one can write the code for you; you must debug your own journey.&quot;
                        </p>
                        {isClient && <FloatingDockDemo />}
                    </div>
                    

                    <Footer />
                </div>
                <div className="flex-1 p-6 overflow-auto">
                    <h2 className="text-2xl font-bold mb-4">Programming Languages I Used</h2>
                    <div className="space-y-4">
                        <p>
                            <SiReact size={32} className="inline-block mr-2 text-blue-400" title="React" />
                            React is a JavaScript library for building user interfaces.
                        </p>
                        <p>
                            <SiNextdotjs size={32} className="inline-block mr-2 text-gray-300" title="NextJs" />
                            This is a framework that I&apos;m still learning.
                        </p>
                        <p>
                            <SiLaravel size={32} className="inline-block mr-2 text-red-500" title="Laravel" />
                            This is a PHP framework which I commonly use for my school projects.
                        </p>
                        <p>
                            <SiPython size={32} className="inline-block mr-2 text-yellow-500" title="Python" />
                            I used Python for machine learning and data mining to analyze large datasets, extract valuable insights, and build predictive models.
                        </p>
                        <p>
                            <SiTypescript size={32} className="inline-block mr-2 text-blue-600" title="TypeScript" />
                            TypeScript is a superset of JavaScript that adds static types.
                        </p>
                    </div>

                    <div className="flex items-center mt-6">
                        <SiPaypal size={32} className="mr-2 text-blue-600" title="PayPal" />
                        <AlertDialogDemo onConfirm={handleConfirm} />
                        <div className="ml-10">
                            {isClient && <AnimatedModalDemo />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
