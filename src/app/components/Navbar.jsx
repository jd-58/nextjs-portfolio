// Navbar component

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-inherit">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-white font-bold text-xl">
                    MyLogo
                </a>
                <div className="space-x-8">
                    <a href="#about-me" className="text-white hover:text-gray-300 transition">
                        About Me
                    </a>
                    <a href="#work-experience" className="text-white hover:text-gray-300 transition">
                        Work Experience
                    </a>
                    <a href="#education" className="text-white hover:text-gray-300 transition">
                        Education
                    </a>
                    <a href="#projects" className="text-white hover:text-gray-300 transition">
                        Projects
                    </a>
                    <a href="#contact-me" className="text-white hover:text-gray-300 transition">
                        Contact Me
                    </a>
                </div>
            </div>
        </nav>
    )
}
