
"use client";

import { motion } from 'framer-motion';

export default function Occupation() {
  return (
    <section id="education-experience" className="min-h-screen flex items-center bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <div
            id="education"
            className="bg-white p-6 rounded shadow-md flex-1"
          >
            <h2 className="text-2xl font-bold">Education</h2>
            <p className="mt-4 text-gray-700">
              Bachelor of Science in Information Technology
              <br />
              Bukidnon State University, since 2021
            </p>
          </div>
          <div
            id="experience"
            className="bg-white p-6 rounded shadow-md flex-1"
          >
            <h2 className="text-2xl font-bold">Experience</h2>
            <p className="mt-4 text-gray-700">
              A Full Stack Web Developer and Maximizing my Scripting skills in Python
              <br />
              2024 - Present
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
