import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        {/* Left Side (Year) */}
                        <motion.div 
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 0.8 }}  // Slightly faster than right
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-2 text-sm text-stone-300"> 
                                {experience.year}
                            </p>
                        </motion.div>
                        {/* Right Side (Role, Description, Tech) */}
                        <motion.div 
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-3/4"  // Removed max-w-xl
                        >
                            <h3 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-stone-400">
                                    {experience.company}
                                </span>
                            </h3>
                            <p className="mb-4 text-stone-400">
                                {experience.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4"> 
                                {experience.technologies.map((tech, index) => (
                                    <span 
                                        className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 hover:bg-stone-800 transition-colors" 
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;