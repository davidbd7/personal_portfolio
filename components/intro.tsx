"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
    return (
        <section className = "mb-28 max-w-[50rem] text-center sm:mb-0"> 
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
        
        <motion.p className = "mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                  initial = {{opacity: 0, y: 100}}
                  animate = {{opacity: 1, y: 0}}
                  transition = {{
                      type: 'spring',
                      stiffness: 125,
                      duration: 0.4
                  }}> 
            <span className = "font-bold"> Hello, My Name is David. 

            </span> I'm a {" "} <span className = "font-bold "> full-stack developer</span> with {" "} <span className = "font-bold"> 1 year</span> of experience.
            I am a recent graduate with <span className = "font-bold">industry experience</span> looking for <span className = "italic"> new oppurtunities</span> in both 
            <span className = "underline"> Back-End and Full-Stack Roles! </span>
        </motion.p>

        <motion.div className = "flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
                    initial = {{opacity: 0, y: 100}}
                    animate = {{opacity: 1, y: 0}}
                    transition = {{
                        delay: 0.1

                    }}>
                 
            <Link href = "#contact"
                  className = "group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"> 
                
                Contact me here <BsArrowRight  className = "opacity-70 group-hover:translate-x-1"  /> 

            </Link>

            <a className = "bg-white px-7 py-3 flex items-center gap-2 rounded-full"> Download CV <HiDownload /></a>
            <a className = "bg-white py-4 text-gray-900 flex items-center gap-2 rounded-full"> <BsLinkedin /> </a>
            <a className = "bg-white py-4 text-gray-900 flex items-center gap-2  text-[1.35rem] rounded-full"> <FaGithubSquare/> </a>



        </motion.div>
        </section>
    )
}
