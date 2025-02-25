"use client";

import Image from "next/image";
import logo from "../../images/Logo.png";
import Link from 'next/link'
import { useState } from "react";
import { motion } from "framer-motion";

const Message = () => {

    return (
        <div className="overflow-hidden bg-lightBeige text-darkGreen py-2">
            <motion.div 
                className="flex gap-x-4 whitespace-nowrap"
                animate={{ x: ["100%", "-100%"] }} // Défilement de droite à gauche
                transition={{ 
                    repeat: Infinity, 
                    duration: 40, // Temps du défilement complet
                    ease: "linear" 
                }}
            >
                <p>
                    New! Try <Link href="#">our newest serum</Link> to fight rosacea and get the skin you deserve!
                </p>
                <p>||</p>
                <p>
                    Get 15% off your first purchase when you subscribe to our newsletter <Link href="#">here</Link>.
                </p>
            </motion.div>
        </div>
    )
  };

export default Message;