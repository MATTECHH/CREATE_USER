import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className="w-50 min-h-10 bg-neutral-600 rounded-2xl mx-auto mt-3 p-2 relative">

            <button 
                onClick={() => setMenu(!menu)} 
                className={`text-white ml-3 mb-2 text-[30px] hover:scale-110 transition-all duration-150 ${menu ? "rotate-90" : ""}`}>
                ═
            </button>

            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{opacity: 0, y: -20,scale: 0.95}}
                        animate={{opacity: 1,y: 10,scale: 1}}
                        exit={{opacity: 0,y: -20,scale: 0.95}}
                        transition={{duration: 0.3}}
                        className="bg-neutral-700 mt-4 flex flex-col gap-4 w-30 rounded-2xl items-center p-4 absolute">

                        <Link to="/" className="text-white font-bold hover:scale-110 transition">Home</Link>
                        <Link to="/about" className="text-white font-bold hover:scale-110 transition">About</Link>

                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
};

export default NavBar;