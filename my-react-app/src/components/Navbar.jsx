import { useState } from "react";

export function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);

  return (
    /*  sticky      -> keeps it attached to the top after you scroll.
        top-0       -> places it at the top edge.
        z-50        -> ensures it stays above other content. */

    <nav className="sticky top-0 z-50 bg-slate-900 text-white">

        {/* max-w-7xl        -> Limits the content width so it doesn't stretch across the whole screen.
            mx-auto          -> Centers the content horizontally.
            px-6             -> Adds horizontal padding.
            py-4             -> Adds vertical padding.
            flex             -> Turns the container into a Flexbox layout.  
            justify-between  -> Pushes the logo to the left and the menu to the right.
            items-center     -> Vertically centers the logo and menu. */ }
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            { /*<h1 className="text-2xl font-bold">JS</h1> */}
            <img id="icon" type="image/svg+xml" src="/icon.svg" className="w-10" />

            {/*Starting at the medium breakpoint (768px), display it as a flex container.*/}
            <ul className="flex max-md:hidden gap-8">
                {/*
                    hover:text-blue-400     -> changes the color on hover.
                    transition-colors       -> animates the color change.
                    duration-300            -> sets the animation duration to 300 ms.
                */}
                <li>
                    <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
                </li>

                <li>
                    <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
                </li>

                <li>
                    <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
                </li>
            </ul>

            {/* 'Hamburger' button to show the menu on the mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-3xl transition-colors duration-300 hover:text-blue-400"> 
            ☰</button>

        </div>

        {   //Menu for mobile
        isOpen && (
        <ul className="md:hidden flex flex-col px-6 pb-4 gap-4">
            <li>
                <a href="#about" onClick={() => setIsOpen(false)} className="transition-colors duration-300 hover:text-blue-400">
                    About</a>
            </li>
            <li>
                <a href="#skills" onClick={() => setIsOpen(false)} className="transition-colors duration-300 hover:text-blue-400">
                    Skills</a>
            </li>
            <li>
                <a href="#projects" onClick={() => setIsOpen(false)} className="transition-colors duration-300 hover:text-blue-400">
                    Projects</a>
            </li>
            <li>
                <a href="#contact" onClick={() => setIsOpen(false)} className="transition-colors duration-300 hover:text-blue-400">
                    Contact</a>
            </li>
        </ul>
        )}
    </nav>
  );
}