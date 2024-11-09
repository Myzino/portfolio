"use client";

import Profile from "@/app/img/jepjep.jpg";
import Image from "next/image";


export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center "
      style={{
        backgroundImage: `url("")`,
      }}
    >
      <div className="flex space-x-4">
        <h1 className="text-6xl font-bold text-white">Jeffrey Sedoro</h1>
        <Image 
          src={Profile}  
          alt="Profile Picture" 
          className="w-32 h-32" 
        />
      </div>
    </section>
  );
}
