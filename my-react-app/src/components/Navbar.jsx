import { useState } from "react";

export function Navbar() { 
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

  return (
    /*  sticky      -> keeps it attached to the top after you scroll.
        top-0       -> places it at the top edge.
        z-50        -> ensures it stays above other content. */

    <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-slate-900 text-white" >

        {/* max-w-7xl        -> Limits the content width so it doesn't stretch across the whole screen.
            mx-auto          -> Centers the content horizontally.
            px-6             -> Adds horizontal padding.
            py-4             -> Adds vertical padding.
            flex             -> Turns the container into a Flexbox layout.  
            justify-between  -> Pushes the logo to the left and the menu to the right.
            items-center     -> Vertically centers the logo and menu. */ }
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            { /*<h1 className="text-2xl font-bold">JS</h1> */}
            <img id="icon" alt="JS-logo" src="/icon.svg" className="w-10" />

            {/* DESKTOP */}

            {/*Starting at the medium breakpoint (768px), display it as a flex container.*/}
            <ul className="flex max-md:hidden gap-8">
                {/*
                    hover:text-blue-400     -> changes the color on hover.
                    transition-colors       -> animates the color change.
                    duration-300            -> sets the animation duration to 300 ms.
                */
               links.map((link) => (
                    <li key={link.href}>
                    <a href={link.href} className="hover:text-blue-400 transition-colors duration-300">
                        {link.label}
                    </a>
                    </li>
                ))}
                
            </ul>

            {/* 'Hamburger' button to show the menu on the mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-3xl transition-colors duration-300 hover:text-blue-400">
                {isOpen ? "✕" : "☰"}
            </button>

        </div>

        
    {/* MOBILE */}
    {isOpen && (
    <ul id="mobile-menu" className="md:hidden flex flex-col px-6 pb-4 gap-4">
        {links.map((link) => (
        <li key={link.href}>
            
            <a href={link.href}
            onClick={() => setIsOpen(false)}
            className="transition-colors duration-300 hover:text-blue-400"
            >
            {link.label}
            </a>
        </li>
        ))}
    </ul>
    )}

    </nav>
  );
}