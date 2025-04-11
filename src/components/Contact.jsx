import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="border-t border-stone-900 bg-stone-50 dark:bg-stone-900">
            <div className="container mx-auto px-4 py-12">
                <motion.h2 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}         
                    className="my-10 text-center text-3xl sm:text-4xl font-medium"
                >
                    Get in Touch
                </motion.h2>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Contact Info */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left space-y-4"
                    >
                        <p className="text-lg">
                            {CONTACT.address}
                        </p>
                        <p className="text-lg">
                            {CONTACT.phoneNo}
                        </p>
                        <a 
                            href={`mailto:${CONTACT.email}`} 
                            className="text-lg border-b border-transparent hover:border-current transition-all"
                        >
                            {CONTACT.email}
                        </a>
                    </motion.div>
                    
                    {/* Social Links */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="flex gap-6 text-3xl"
                    >
                        <a
                            href="https://www.linkedin.com/in/elias-al-alam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-blue-600 transition-all hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/michmazbout"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-gray-800 transition-all hover:scale-110"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://t.me/Elijahmks"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                            className="hover:text-blue-400 transition-all hover:scale-110"
                        >
                            <FaTelegram />
                        </a>
                        <a
                            href="https://discord.com/users/hikigaya_hachiman_"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                            className="hover:text-indigo-500 transition-all hover:scale-110"
                        >
                            <SiDiscord />
                        </a>
                    </motion.div>
                </div>
                
                {/* Copyright */}
                <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center text-sm text-stone-500"
                >
                    © {new Date().getFullYear()} Elias Al Alam. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;