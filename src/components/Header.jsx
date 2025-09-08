/**
* @copyright 2025 Saveen Maduranga
*/

/**
 * Icons
 */
import { MdAddCall } from "react-icons/md";

/**
 * Node modules
 */
import { useState } from "react"

/**
 * Components & images
 */
import Navbar from "./Navbar"
import logo from '../assets/images/logo.png'

/**
 * md:grid md:grid-cols-[1fr,3fr,1fr]
 */
const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full max-auto px-4 
        flex justify-between items-center md:px-6 ">
            <h1>
                <a 
                    href="/" 
                    className="logo"
                >
                    <img 
                        src={logo} 
                        width={40}
                        height={40}
                        alt="Saveen Maduranga" 
                    />
                </a>
            </h1>

            <div className="relative md:justify-self-center">
                <button 
                className="menu-btn" 
                onClick={() => setNavOpen((prev) => !prev)}
                >
                    <span className="material-symbols-rounded">
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>

                <Navbar navOpen={navOpen}/>
            </div>

            <a 
            href="#contact" 
            className="header-btn btn-secondary max-md:hidden md:justify-self-end"
            >
                Contact Me <span> <MdAddCall /> </span>
            </a>

        </div>
    </header>
  )
}

export default Header