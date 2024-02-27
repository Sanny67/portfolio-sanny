import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();
    const defaultValue = { name:"", email:"", message:"" };
    const [formData, setFormData] = useState(defaultValue);
    const config = {
        serviceId: "service_ga0g8bc",
        templateId: "template_t3xjm4n",
        publicKey: "cmVPGooGUBh8F-BC3"
    };
    
    const copyEmailToClipboard = () => {
        const email = "sayantanichatterjee67@gmail.com";
        navigator.clipboard.writeText(email);
        toast.success("Copied!");
    };

    const handleInputChange = (key, value) => {
        setFormData((data) => ({ ...data, [key]: value }));
    };

    const validateForm = () => {
        const { name, email, message } = formData;
    
        // Regular expression to check for SQL injection characters
        const sqlRegex = /(\b(?:SELECT|INSERT|UPDATE|DELETE|ALTER|DROP|CREATE)\b)|(?:\b(?:\bAND\b|\bOR\b|'OR\b|'AND\b|")\b)/i;
    
        // Regular expression to check for script tags
        const scriptRegex = /<\s*script\s*>|<\/\s*script\s*>/i;
    
        // Check if any form field contains SQL injection characters or script tags
        if (sqlRegex.test(name) || sqlRegex.test(email) || sqlRegex.test(message) ||
            scriptRegex.test(name) || scriptRegex.test(email) || scriptRegex.test(message)) {
            // Found suspicious characters, return false
            return false;
        }
    
        // No suspicious characters found, return true
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const formValidated = validateForm();
        if(formValidated){
            emailjs
            .sendForm(config.serviceId, config.templateId, form.current, {
                publicKey: config.publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message Sent Succesfully!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Unable to send message!')
                },
            );
        } else {
            toast.error('Please input proper data.')
        }
    };

    return (
        <section className='min-h-[100vh] my-10 lg:my-20' id='contact'>
        <div className='container mx-auto'>

            <div className='flex flex-col lg:flex-row'>

                {/* text */}
                <div
                    variants={fadeIn('left', '0.3')}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: '0.3' }}
                    className='flex-1 flex justify-start items-center'
                >
                    <div>
                    <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                    <h2 className='text-[45px] lg:text-[70px] leading-none mb-12'>Let's work <br/> together!</h2>
                    </div>
                </div>

                {/* form */}
                <form 
                    ref={form} onSubmit={sendEmail}
                    variants={fadeIn('right', '0.3')}
                    initial='hidden' whileInView={'show'}
                    viewport={{ once: false, amount: '0.3' }}
                    className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 lg:pb-24 p-6 items-start'
                >
                    <input type='text' hidden value="Sanny" name="to_name" />
                    <input type='text' hidden value={formData.name} name="from_name" />
                    <input
                        type='text'
                        name="user_name"
                        placeholder='Your name'
                        value={formData.name}
                        onChange={e => handleInputChange("name", e.target.value)}
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                    />
                    <input
                        type='email'
                        name="user_email"
                        placeholder='Your email'
                        value={formData.email}
                        onChange={e => handleInputChange("email", e.target.value)}
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                    />
                    <textarea
                        name="message"  
                        placeholder='Your message'
                        value={formData.message}
                        onChange={e => handleInputChange("message", e.target.value)}
                        className='bg-transparent border-b py-3 lg:py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none lg:mb-12'
                    ></textarea>
                    
                    <div className='flex gap-x-8 items-center'>
                        <button type='submit' className='btn btn-sm mt-2 lg:mt-0'>
                            <span>Send Message</span>
                        </button>
                        <a href='javascript:void(0)' onClick={copyEmailToClipboard} className='text-gradient btn-link'>Copy Email</a>
                    </div>
                </form>

            </div>

        </div>
        </section>
    );
};

export default Contact;
