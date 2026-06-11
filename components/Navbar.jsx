"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            initial={{y: -80, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6}}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-6 pt-6">
                <div
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 ${
                        scrolled ? "bg-black/80" : "bg-black/40"
                    }`}
                >
                    <div>
                        <h1 className="text-lg font-semibold tracking-tight">
                            Tanaka.dev
                        </h1>

                        <p className="text-xs text-zinc-500">
                            Builder • Developer • Creator
                        </p>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm">
                        <a
                            href="#projects"
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            Projects
                        </a>

                        <a
                            href="#client-work"
                            className="text-zinc-400 hover:text-white transition-colors"
                        >
                            Client Work
                        </a>
                    </nav>

                    <a
                        href="#client-work"
                        className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition"
                    >
                        View Work
                    </a>
                </div>
            </div>
        </motion.header>
    );
}