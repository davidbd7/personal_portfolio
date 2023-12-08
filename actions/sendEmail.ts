"use server";
import { Resend } from "resend";


const resend = new Resend("re_Zu93ijr6_GE8RueiimQKA2fKQUuFsb8an");



export const sendEmail = async (formData: FormData) => {
    "use server";
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'davidbd7@gmail.com',
        subject: "Message from Contact Form",
        text: "Hello World!"
    });

};