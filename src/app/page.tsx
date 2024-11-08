"use client";
import Header from "@/app/components/ui/header";
import ABOUT from "@/app/pages/aboutme";
import CONTACT from "@/app/pages/contact";
import HOME from "@/app/pages/home";
import OCCUPATION from "@/app/pages/occupation";
import { useEffect, useState } from "react";
import Footer from "./components/ui/footer";

const Home = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
    
        <div className="min-h-screen">
            <Header/>
            {/* Home Section */}
           <HOME />

            {/* Occupation Section */}
          <OCCUPATION />

            {/* About Me Section */}
            <ABOUT />

            {/* Contact Section */}
          <CONTACT/>

            {/* Footer */}
            <footer className="text-black text-center p-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
