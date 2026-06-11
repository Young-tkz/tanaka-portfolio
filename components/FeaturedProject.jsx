"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedProject() {
    return (
        <motion.section
            className="py-32 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        > <div className="max-w-7xl mx-auto">

            ```
            <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
      <span className="text-sm text-blue-400 uppercase tracking-widest">
        Featured Project
      </span>

                <h2 className="text-5xl font-bold mt-4">
                    IGCSE Revision Assistant
                </h2>
            </motion.div>

            <div className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-xl">

                <div className="grid lg:grid-cols-2">

                    {/* Left Side */}

                    <motion.div
                        className="p-10"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Transforming Exam Papers Into Study Notes
                        </h3>

                        <p className="text-zinc-400 leading-relaxed">
                            An AI-powered educational platform that converts
                            IGCSE examination papers into structured revision
                            notes based on the selected subject.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-8">

                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                            >
                                AI
                            </motion.span>

                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                            >
                                Education
                            </motion.span>

                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                            >
                                JavaScript
                            </motion.span>

                        </div>

                        <motion.div
                            className="flex gap-4 mt-10"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.a
                                href="https://notesforge-seven.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white text-black px-6 py-3 rounded-xl font-medium"
                            >
                                Live Demo
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side */}

                    <motion.div
                        className="relative bg-zinc-900 flex items-center justify-center min-h-[400px] overflow-hidden"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                        >
                            <Image
                                src="/projects/igcse.png"
                                alt="IGCSE Revision Assistant"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>

        </div>
        </motion.section>


);
}
