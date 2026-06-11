"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { clientWork } from "../data/ClientWork";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function ClientWork() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <>
            <motion.section
                id="client-work"
                className="py-32 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            > <div className="max-w-7xl mx-auto">

                ```
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
        <span className="text-sm text-zinc-500 uppercase tracking-widest">
          Commercial Work
        </span>

                    <h2 className="text-5xl font-bold mt-4">
                        AI-Powered Client Projects
                    </h2>

                    <p className="text-zinc-400 mt-4 max-w-2xl">
                        Commercial advertisements and promotional content produced using
                        modern AI-powered creative workflows.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {clientWork.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -8 }}
                            className="border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-xl hover:border-white/20 transition"
                        >
                            <div className="h-72 bg-zinc-900 overflow-hidden">

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={item.thumbnail}
                                        alt={item.title}
                                        width={800}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-zinc-400 mt-4">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {item.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-3 py-1 border border-white/10 rounded-full text-xs"
                                        >
                    {tool}
                  </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedVideo(item)}
                                    className="mt-8 w-full py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition"
                                >
                                    Watch Project
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
            </motion.section>

            <Dialog
                open={!!selectedVideo}
                onOpenChange={(open) => {
                    if (!open) setSelectedVideo(null);
                }}
            >
                <DialogContent className="max-w-5xl bg-black border border-white/10 text-white">

                    {selectedVideo && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-2xl">
                                    {selectedVideo.title}
                                </DialogTitle>

                                <DialogDescription>
                                    {selectedVideo.description}
                                </DialogDescription>
                            </DialogHeader>

                            <video
                                controls
                                autoPlay
                                className="w-full rounded-xl"
                            >
                                <source
                                    src={selectedVideo.video}
                                    type="video/mp4"
                                />
                            </video>

                            <div className="flex flex-wrap gap-2">
                                {selectedVideo.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-3 py-1 border border-white/10 rounded-full text-xs"
                                    >
                {tool}
              </span>
                                ))}
                            </div>
                        </>
                    )}

                </DialogContent>
            </Dialog>
        </>


);
}
