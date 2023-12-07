"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const{ref} = useSectionInView('About');

    return <motion.section ref = {ref} className ="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
                            initial = {{opacity: 0, y: 100}}
                            animate = {{opacity: 1, y: 0}}
                            transition = {{
                                delay: 0.175
                            }}
                            id = "about"
                            >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">

            I am a recent <span className = "font-bold"> Computer Science graduate </span> from <span className = "italic"> San Jose State University </span> located in the heart of the Silicon Valley. 
            Through my <span className = "underline">education, internship experience, and personal projects</span>,  I have gained a strong foundation in <span className = "font-bold"> Full-Stack Development </span>. The Languages I am <span className = "italic"> most proficient </span>
            in are {" "} <span className="font-medium">Python, Java, React, and Typescript. </span> I love learning new technologies, and am currently in search of a <span className="font-medium">full-time position </span> as a Software Engineer.
        </p>
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy working out, fashion, and playing basketball. I also enjoy{" "}
        <span className="font-medium">picking up new hobbies</span>. I am currently
        learning about{" "}
        <span className="font-medium">the art of espresso, and have thouroughly enjoyed learning all of the intricate details that go into making a cup of coffee</span>. 
      </p>
    </motion.section>
}
