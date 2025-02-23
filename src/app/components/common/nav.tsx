"use client";

import Image from "next/image";
import logo from "../../images/Logo.png";
import Link from 'next/link'
import { useState } from "react";

const Navigation = () => {
    /* Pour afficher le menu de "Produits" */
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    return (
        <nav className="bg-redPink px-8 py-6">
            <div className="flex justify-between items-end">
                <div className="flex items-end space-x-8">
                    <Image src={logo} alt="Logo for Roseanna Skincare" height={35} />
                    <ul className="flex space-x-6 text-lightBeige">
                        <li><Link href="#">Meilleurs vendeurs</Link></li>
                        <li><Link href="#">Routine</Link></li>
                        <li><Link href="#">Nouveautés</Link></li>
                        <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link href="#" className="cursor-pointer">Produits</Link>
                            {dropdownOpen && (
                                <div className="w-96 absolute left-0 bg-lightBeige text-darkGreen shadow-lg rounded-lg">
                                <ul>
                                    <li><Link href="#" className="block px-4 py-2">Soins du visage</Link></li>
                                    <li><Link href="#" className="block px-4 py-2">Soins du corps</Link></li>
                                    <li><Link href="#" className="block px-4 py-2">Crèmes et sérums</Link></li>
                                </ul>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-6">
                    <ul className="flex space-x-6 text-lightBeige">
                        <li><Link href="#">À propos</Link></li>
                        <li><Link href="#">Deviens membre</Link></li>
                        <li><Link href="#">Se connecter</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  };

export default Navigation;