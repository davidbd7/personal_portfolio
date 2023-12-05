"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Intro() {
    return (
        <section> 
            <div className = 'flex items-center justify-center'> 
                <div className = "relative">
                    <motion.div 
                        initial = {{opacity:0, scale:0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{
                            type:"tween",
                            duration: 0.2
                        }}>
                        <Image src = "https://images.unsplash.com/photo-1701757451197-8bf83100c855?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="David's Portrait"
                            width = "192"
                            height = "192"
                            quality = "95"
                            priority = {true}
                            className = "h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
                        
                        />
                    </motion.div>
                        
                        <motion.span className = "absolute bottom-0 text-4xl right-0"
                                    initial = {{opacity: 0, scale: 0}}
                                    animate = {{opacity: 1, scale: 1}}
                                    transition = {{
                                        type: 'spring',
                                        stiffness: 125,
                                        delay: 0.1,
                                        duration: 0.7
                                    }}>
                        👋🏽
                        </motion.span>


                </div>
            </div>
        </section>
    )
}
