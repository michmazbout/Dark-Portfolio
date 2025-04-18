import { FaPython, FaRProject, FaJs, FaHtml5 } from "react-icons/fa";
import {
    SiArcgis,
    SiQgis,
    SiAnsys,
    SiJupyter,
    SiTypescript,
    SiRust,
    SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";
import matlabIcon from "../assets/matlab.svg"; // Correct import path for Vite

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technical Toolkit
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {/* GIS */}
                <motion.div variants={iconVariants(3)} className="p-4">
                    <SiArcgis className="text-7xl text-red-600" />
                </motion.div>
                <motion.div variants={iconVariants(3.5)} className="p-4">
                    <SiQgis className="text-7xl text-green-600" />
                </motion.div>

                {/* Programming */}
                <motion.div variants={iconVariants(2.5)} className="p-4">
                    <FaPython className="text-7xl text-blue-400" />
                </motion.div>
                <motion.div variants={iconVariants(3.2)} className="p-4">
                    <FaRProject className="text-7xl text-blue-600" />
                </motion.div>
                <motion.div variants={iconVariants(2.8)} className="p-4">
                    <SiJupyter className="text-7xl text-orange-400" />
                </motion.div>
                <motion.div variants={iconVariants(2.6)} className="p-4">
                    <SiRust className="text-7xl text-orange-700" />
                </motion.div>
                <motion.div variants={iconVariants(2.9)} className="p-4">
                    <FaHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div variants={iconVariants(3.3)} className="p-4">
                    <FaJs className="text-7xl text-yellow-400" />
                </motion.div>
                <motion.div variants={iconVariants(3.6)} className="p-4">
                    <SiTypescript className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div variants={iconVariants(3.1)} className="p-4">
                    <SiPostgresql className="text-7xl text-indigo-600" />
                </motion.div>

                {/* MATLAB (Custom SVG) */}
                <motion.div variants={iconVariants(4)} className="p-4">
                    <img
                        src={matlabIcon}
                        alt="MATLAB"
                        className="w-14 h-14 object-contain"
                    />
                </motion.div>

                {/* Engineering */}
                <motion.div variants={iconVariants(5)} className="p-4">
                    <SiAnsys className="text-7xl text-purple-600" />
                </motion.div>
            </motion.div>

            <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-12 text-center text-lg text-gray-400 max-w-2xl mx-auto"
            >
                Specialized in geospatial analysis (ArcGIS/QGIS), environmental data science (Python/R),
                full-stack development (HTML/JavaScript/TypeScript/SQL), and advanced engineering simulations
                for climate and sediment impact studies.
            </motion.p>
        </div>
    );
};

export default Technologies;
