import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <div className="pb-4">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial= {{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects
            </motion.h2>
            <div className="flex flex-col items-center">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-col items-center lg:flex-row lg:justify-center lg:max-w-5xl lg:w-full">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial= {{ opacity: 0, y: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full flex justify-center lg:w-1/4">
                            <img src={project.image}
                                width={250}
                                height={250}
                                alt={project.title}
                                className="mb-6 rounded" />
                        </motion.div>
                        <motion.div 
                            whileInView={{ opacity: 1, y: 0 }}
                            initial= {{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full flex flex-col items-center text-center lg:text-left lg:items-start lg:w-3/4 lg:max-w-2xl">
                            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3> 
                            <p className="mb-4 text-stone-400">{project.description}</p>
                            <div className="flex flex-wrap justify-center lg:justify-start">
                                {project.technologies.map((tech, index) =>(
                                    <span className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects