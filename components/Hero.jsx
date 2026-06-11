"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return ( <section className="relative min-h-screen flex items-center overflow-hidden">

        ```
        {/* Background Glow */}
        <div className="hero-glow" />

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        >

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 mt-32 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
            >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

                <span className="text-sm text-zinc-300">
        Available for freelance and collaborations
      </span>
            </motion.div>

            <div className="max-w-6xl">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-7xl md:text-[8rem] font-bold leading-[0.9] tracking-tight"
                >
                    Building AI-powered
                    <br />

                    products,

                    <span className="gradient-text">
          {" "}websites,
        </span>

                    <br />

                    and business solutions.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-zinc-400 text-lg md:text-xl mt-10 max-w-3xl leading-relaxed"
                >
                    I'm{" "}
                    <span className="text-white font-medium">
          Tanaka Mariet Chidamba
        </span>{" "}
                    — a builder creating software, websites, AI-powered
                    products, and commercial content that solve real-world problems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-4 mt-10"
                >
                    <a
                        href="#projects"
                        className="bg-white text-black px-7 py-4 rounded-2xl font-medium hover:scale-105 transition"
                    >
                        View Projects →
                    </a>

                    <a
                        href="#client-work"
                        className="border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-4 rounded-2xl hover:bg-white/10 transition"
                    >
                        View Client Work
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/[0.02]"
                >

                    <div className="p-8 border-r border-white/10">
                        <h3 className="text-4xl font-bold">6+</h3>
                        <p className="text-zinc-500 text-sm mt-2">
                            Projects Built
                        </p>
                    </div>

                    <div className="p-8 border-r border-white/10">
                        <h3 className="text-4xl font-bold">5+</h3>
                        <p className="text-zinc-500 text-sm mt-2">
                            Client Projects
                        </p>
                    </div>

                    <div className="p-8 border-r border-white/10">
                        <h3 className="text-4xl font-bold">10+</h3>
                        <p className="text-zinc-500 text-sm mt-2">
                            AI Tools Used
                        </p>
                    </div>

                    <div className="p-8">
                        <h3 className="text-4xl font-bold">∞</h3>
                        <p className="text-zinc-500 text-sm mt-2">
                            Curiosity
                        </p>
                    </div>

                </motion.div>

            </div>
        </motion.div>
    </section>

);
}
