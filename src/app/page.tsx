"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/ui/footer";

const Home = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="min-h-screen">
            {/* Home Section */}
            <section
                id="home"
                className="flex items-center justify-center min-h-screen"
                style={{
                    backgroundImage: `url('/path-to-your-background-image.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-black">Jeffrey Sedoro</h1>
                    <img 
                        src="/path-to-your-image.jpg" 
                        alt="Profile Picture" 
                        className="mt-4 w-32 h-32 rounded-full object-cover mx-auto" 
                    />
                </div>
            </section>

            {/* Education and Experience Section */}
            <section id="education-experience" className="min-h-screen flex items-center bg-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div id="education" className="bg-white p-6 rounded shadow-md md:w-1/2 mr-2">
                            <h2 className="text-2xl font-bold">Education</h2>
                            <p className="mt-4 text-gray-700">
                                Bachelor of Science in Information Technology
                                <br />University of XYZ, 2021
                            </p>
                        </div>
                        <div id="experience" className="bg-white p-6 rounded shadow-md md:w-1/2 ml-2">
                            <h2 className="text-2xl font-bold">Experience</h2>
                            <p className="mt-4 text-gray-700">
                                Frontend Developer at ABC Company
                                <br />2021 - Present
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="min-h-screen flex items-center bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-gray-100 p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold">About Me</h2>
                        <p className="mt-4 text-gray-700">
                            I am a passionate web developer with experience in creating dynamic and responsive web applications. 
                            I love coding and always strive to improve my skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex items-center bg-gray-100">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-2xl font-bold">Contact Me</h2>
                        <form className="mt-4">
                            <div className="mb-4">
                                <label className="block text-gray-700">Name:</label>
                                <input type="text" className="mt-1 p-2 w-full border rounded" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email:</label>
                                <input type="email" className="mt-1 p-2 w-full border rounded" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Message:</label>
                                <textarea className="mt-1 p-2 w-full border rounded" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-black text-center p-4">
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
