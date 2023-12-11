"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from 'react'

const resend = new Resend("re_Zu93ijr6_GE8RueiimQKA2fKQUuFsb8an");

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message');

    if(!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender Email"
        }
    }

    if(!validateString(message, 5000)) {
        return {
            error: "Invalid Message"
        }
    }

    try{
        await resend.emails.send({
            from: 'Contact From <onboarding@resend.dev>',
            to: 'davidbd7@gmail.com',
            subject: "Message from Contact Form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
              }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        };
    }
};