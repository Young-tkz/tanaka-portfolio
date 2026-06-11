"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <motion.section
                id="projects"
                className="py-32 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            > <div className="max-w-7xl mx-auto">

                
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
        <span className="text-sm text-zinc-500 uppercase tracking-widest">
          Projects
        </span>

                    <h2 className="text-5xl font-bold mt-4">
                        Selected Work
                    </h2>

                    <p className="text-zinc-400 mt-4 max-w-2xl">
                        Products, software, and digital experiences built to solve
                        practical problems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -8 }}
                            className="group border border-white/10 rounded-3xl p-6 bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition"
                        >

                            <div className="h-48 rounded-2xl bg-zinc-900 overflow-hidden mb-6">

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg">
                                    {project.title}
                                </h3>

                                <span className="text-xs text-zinc-500">
                {project.status}
              </span>
                            </div>

                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full border border-white/10 text-xs"
                                    >
                  {tag}
                </span>
                                ))}
                            </div>

                            <div className="mt-6">
                                {project.video ? (
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition"
                                    >
                                        View Demo
                                    </button>
                                ) : (
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex justify-center py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition"
                                    >
                                        View Website
                                    </a>
                                )}
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
            </motion.section>

            <Dialog
                open={!!selectedProject}
                onOpenChange={(open) => {
                    if (!open) setSelectedProject(null);
                }}
            >
                <DialogContent className="max-w-5xl bg-black border border-white/10 text-white">

                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-2xl">
                                    {selectedProject.title}
                                </DialogTitle>

                                <DialogDescription>
                                    {selectedProject.description}
                                </DialogDescription>
                            </DialogHeader>

                            <video
                                controls
                                autoPlay
                                className="w-full rounded-xl"
                            >
                                <source
                                    src={selectedProject.video}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </>
                    )}

                </DialogContent>
            </Dialog>
        </>


);
}
