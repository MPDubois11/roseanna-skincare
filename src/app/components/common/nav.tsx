"use client";

import Image from "next/image";
import logo from "../../images/Logo.png";
import Link from 'next/link'
import { useState, useRef, useEffect } from "react";
import { HeartIcon, ShoppingBagIcon, UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navigation = () => {
    /* Pour afficher le menu de "Produits" */
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const [searchOpen, setSearchOpen] = useState(false);
    const toggleSearchDown = () => setSearchOpen((prev) => !prev);

    // Référence pour détecter les clics en dehors
    const searchRef = useRef<HTMLDivElement | null>(null);

    // Fermer la barre de recherche si on clique à l'extérieur
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setSearchOpen(false);
          }
        }
    
        if (searchOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, [searchOpen]);

    return (
        <div className="relative">
            <nav className="bg-redPink px-8 py-6">
                <div className="flex justify-between items-end">
                    <div className="flex items-end space-x-8">
                        <Image src={logo} alt="Logo for Roseanna Skincare" height={35} />
                        <ul className="flex space-x-6 text-lightBeige">
                            <li><Link href="#">À propos</Link></li>
                            <li><Link href="#">Meilleurs vendeurs</Link></li>
                            <li><Link href="#">Routine</Link></li>
                            <li><Link href="#">Nouveautés</Link></li>
                            <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                                <Link href="#" className="cursor-pointer">Produits</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-6">
                        <ul className="flex space-x-6 text-lightBeige">
                            <li onClick={toggleSearchDown}><Link href="#"><MagnifyingGlassIcon className="size-6 text-lightBeige" /></Link></li>
                            <li><Link href="#"><ShoppingBagIcon className="size-6 text-lightBeige" /></Link></li>
                            <li><Link href="#"><UserCircleIcon className="size-6 text-lightBeige" /></Link></li>
                            <li><Link href="#"><HeartIcon className="size-6 text-lightBeige" /></Link></li>
                        </ul>
                    </div>
                </div>

            </nav>

            {dropdownOpen && (
                <div 
                    className={`absolute left-0 right-0 top-full bg-lightBeige text-darkGreen shadow-lg 
                    transition-all duration-300 ease-out transform ${
                        dropdownOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
                    }`}
                >
                    <div className="max-w-7xl mx-auto py-4 px-6">
                        <ul className="grid grid-cols-3 gap-6">
                            <li><Link href="#" className="block px-4 py-2">Soins du visage</Link></li>
                            <li><Link href="#" className="block px-4 py-2">Soins du corps</Link></li>
                            <li><Link href="#" className="block px-4 py-2">Crèmes et sérums</Link></li>
                        </ul>
                    </div>
                </div>
            )}

        {searchOpen && (
            <div
                ref={searchRef}
                className={`absolute left-0 right-0 top-full bg-lightBeige text-darkGreen shadow-lg 
                transition-all duration-300 ease-out transform ${
                    searchOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
                }`}
            >
                <div className="max-w-7xl mx-auto py-4 px-6 flex items-center">
                    <input
                    type="text"
                    placeholder="Rechercher..."
                    className="w-full p-2 border-b-2 border-darkGreen bg-transparent text-darkGreen"
                    autoFocus
                    />
                    <button onClick={toggleSearchDown} className="ml-4">
                        <XCircleIcon className="size-6 text-redPink" />
                    </button>
                </div>
            </div>
        )}
        </div>
    )
  };

export default Navigation;