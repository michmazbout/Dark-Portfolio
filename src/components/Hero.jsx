import profilePic from "../assets/EliasProfile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
};

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Elias Al Alam"
                            className="border border-stone-900 rounded-3xl"
                            width={650}
                            height={650}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.5 }} // Your original timing
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10"
                    >
                        {/* Rest of your content with all text enhancements */}
                        <motion.h2
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                        >
                            Elias Al Alam
                        </motion.h2>

                        <motion.span
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-100 via-stone-300 to-stone-100 
                                    bg-[length:200%_auto] bg-clip-text text-2xl sm:text-3xl 
                                    tracking-tight text-transparent px-2 sm:px-0
                                    animate-[gradientShift_8s_ease_infinite]
                                    dark:from-stone-300 dark:via-stone-200 dark:to-stone-300
                                    dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        >
                            Environmental Engineer | Data-Driven Sustainability Solutions |
                            AI/ML for Climate Impact | Bridging Precision + Purpose
                        </motion.span>
                        <motion.p
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed
                            tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.a
                            variants={childVariants}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full p-4 text-sm
                            text-stone-800 mb-10">
                            Download Resume
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Hero