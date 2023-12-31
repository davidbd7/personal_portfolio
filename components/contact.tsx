"use client";
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import {sendEmail} from "@/actions/sendEmail"
import {  useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';


export default function Contact() {

    const{ref} = useSectionInView('Contact');
    const {pending} = useFormStatus();


    return (
        <motion.section id = "contact" 
                 ref = {ref}
                 className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
                 initial = {{
                     opacity: 0,
                 }}
                 whileInView={{
                     opacity: 1,
                 }}
                 transition={{
                     duration: 1
                 }}> 
                 
            <SectionHeading>Contact Me</SectionHeading>
            <p className = "text-gray-700 -mt-6">You can reach me at <a className = 'underline' href= 'mailto:davidbd7@gmail.com'>davidbd7@gmail.com</a>{" "} or through this form. </p>

            <form className = "mt-10 flex flex-col"
            action = {async (formData) => {
                await sendEmail(formData)
            }}>
                <input className = "h-14 px-4 rounded-lg borderBlack" 
                       name = "senderEmail"
                       type = "email" 
                       required
                       maxLength = {500}
                       placeholder = "Your Email"
                />
                <textarea className = 'h-52 my-3 rounded-lg borderBlack p-4'
                          name = "message"
                          placeholder = "Your Message" 
                          required
                          maxLength = {5000}/>
                <SubmitBtn />
            </form>
            
        
        
        </motion.section>
    )
}
