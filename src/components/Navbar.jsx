import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import logo from "../assets/Elias_logo_2.png";

const Navbar = () => {
    return (
        <nav className="flex flex-col sm:flex-row items-center justify-between py-6 px-4 sm:px-8">
            <div className="flex-shrink-0 mb-4 sm:mb-0">
                <a href="/" aria-label="Home">
                    <img
                        src={logo}
                        className="w-[200px] sm:w-[300px] hover:scale-105 transition-transform duration-300"
                        alt="Elias Logo"
                    />
                </a>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-5 text-2xl sm:text-3xl">
                <a
                    href="https://www.linkedin.com/in/elias-al-alam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-600 transition-all duration-300 hover:scale-110"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/michmazbout"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-gray-800 transition-all duration-300 hover:scale-110"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://wp.unil.ch/glace/team/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Glacier Team Website"
                    className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
                >
                    <span className="text-2xl sm:text-3xl">⛰️</span>
                </a>

                <a
                    href="https://t.me/Elijahmks"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                    <FaTelegram />
                </a>

                <a
                    href="https://discord.com/users/hikigaya_hachiman_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="hover:text-indigo-500 transition-all duration-300 hover:scale-110"
                >
                    <SiDiscord />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;