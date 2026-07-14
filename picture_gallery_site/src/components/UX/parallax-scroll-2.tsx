"use client";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "../../lib/util";

export const ParallaxScrollSecond = ({ images, className, }: {
    images: string[];
    className?: string;
}) => {

    const gridRef = useRef<any>(null);

    // State for fullscreen overlay
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Divide images into 4 columns
    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-10 py-40 px-10"
            >
                {/* === First Column === */}
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            key={"grid-1" + idx}
                            onClick={() => setSelectedImage(el)}
                            className="cursor-pointer"
                        >
                            <img
                                src={el}
                                className="h-full w-full object-cover rounded-lg"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* === Second Column === */}
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div key={"grid-2" + idx} onClick={() => setSelectedImage(el)} className="cursor-pointer">
                            <img
                                src={el}
                                className="h-full w-full object-cover rounded-lg"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* === Third Column === */}
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div key={"grid-3" + idx} onClick={() => setSelectedImage(el)} className="cursor-pointer">
                            <img
                                src={el}
                                className="h-full w-full object-cover rounded-lg"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* === Fullscreen Overlay === */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="Full view"
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg transition-transform duration-300"
                    />
                </div>
            )}
        </div>
    );
};
