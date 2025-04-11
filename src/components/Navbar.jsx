import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import logo from "../assets/Elias_logo_2.png";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img 
                        src={logo} 
                        className="mx-2"
                        width={300}
                        height={130}
                        alt="Elias Logo"
                    />
                </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/elias-al-alam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-blue-600 transition-colors"
                >
                    <FaLinkedin />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/michmazbout"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-gray-800 transition-colors"
                >
                    <FaGithub />
                </a>
                {/* Glacier Team (Mountain Emoji) */}
                <a
                    href="https://wp.unil.ch/glace/team/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Glacier Team Website"
                    className="hover:text-blue-500 transition-colors text-2xl"
                    >
                    ⛰️
                </a>
                {/* Telegram */}
                <a
                    href="https://t.me/Elijahmks"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="hover:text-blue-400 transition-colors"
                >
                    <FaTelegram />
                </a>

                {/* Discord */}
                <a
                    href="https://discord.com/users/hikigaya_hachiman_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="hover:text-indigo-500 transition-colors"
                >
                    <SiDiscord />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;