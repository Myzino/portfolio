import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { SiLaravel, SiNextdotjs, SiReact, SiTypescript } from 'react-icons/si';
import jepjeppic from "./img/jepjep.jpg";
import { AnimatedModalDemo } from "./pages/animatedmodal";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="md:w-1/3 p-6 flex flex-col items-center justify-center">
          <div className="w-60 h-60 rounded-full mb-4 overflow-hidden">
            <Image
              src={jepjeppic} 
              alt="Profile"
              className="w-full h-full object-cover"
              width={240} 
              height={240} 
            />
          </div>
          <h1 className="text-xl font-bold mb-2">Jeffrey Sedoro</h1>
          <p className="text-center">An IT student</p>
          <p className="text-center">Residing in Bukidnon, Mindanao, Philippines</p>
          <p className="mb-4">
                <i>&quot;No one can write the code for you, you must debug your own journey.&quot;</i>
              </p>
        </div>

        <div className="w-full md:w-2/3 p-6 flex items-center">
          <div className="max-h-96 overflow-hidden flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Programming Languages I Used</h2>
              <p className="mb-4">
                <SiReact size={32} className="inline-block mr-2 text-blue-400" title="React" />
                React is a JavaScript library for building user interfaces.
                <br />
                <br />
                <SiNextdotjs size={32} className="inline-block mr-2 text-black-500" title="NextJs" />
                This is a framework that I'm still learning.
                <br />
                <br />
                <SiLaravel size={32} className="inline-block mr-2 text-red-500" title="Laravel" />
                This is a PHP framework which I commonly use for my school projects.
                <br />
                <br />
                <SiTypescript size={32} className="inline-block mr-2 text-blue-600" title="TypeScript" />
                TypeScript is a superset of JavaScript that adds static types.
              </p>
            </div>

            <div className="flex justify-between items-center">
              <Link href="/About me">
                <Button className="bg-black">See More -&gt</Button>
              </Link>
              <AnimatedModalDemo />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white p-4 text-center">
        <Footer />
      </footer>
    </div>  
  );
}
