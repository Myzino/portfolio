import { motion } from 'framer-motion'

export default function occupation() {
  return (
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
                    <br />University of Bukdinon State University, 2021
                </p>
            </div>
            <div id="experience" className="bg-white p-6 rounded shadow-md md:w-1/2 ml-2">
                <h2 className="text-2xl font-bold">Experience</h2>
                <p className="mt-4 text-gray-700">
                    A Full Stack Developer and Maximizing my Scripting skills in python
                    <br />2021 - Present
                </p>
            </div>
        </motion.div>
    </div>
</section>
  )
}
