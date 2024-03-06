import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();
    const defaultValue = { name:"", email:"", message:"" };
    const [formData, setFormData] = useState(defaultValue);
    const [errors, setErrors] = useState(defaultValue);
    const config = {
        serviceId: "service_ga0g8bc",
        templateId: "template_t3xjm4n",
        publicKey: "cmVPGooGUBh8F-BC3"
    };
    
    const copyEmailToClipboard = (e) => {
        e.preventDefault();
        const email = "sayantanichatterjee67@gmail.com";
        navigator.clipboard.writeText(email);
        toast.success("Copied!");
    };

    const handleInputChange = (key, value) => {
        setFormData((data) => ({ ...data, [key]: value }));
    };

    const validateForm = () => {
        const { name, email, message } = formData;
        let errs = {};
        let errCount = 0;
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        // --------------------------------------- SUSPICIOUS INPUT ------------------------------------------
        // Regular expression to check for SQL injection characters
        const sqlRegex = /(\b(?:SELECT|INSERT|UPDATE|DELETE|ALTER|DROP|CREATE)\b)|(?:\b(?:\bAND\b|\bOR\b|'OR\b|'AND\b|")\b)/i;
        // Regular expression to check for script tags
        const scriptRegex = /<\s*script\s*>|<\/\s*script\s*>/i;
        // Check if any form field contains SQL injection characters or script tags
        if (sqlRegex.test(name) || sqlRegex.test(email) || sqlRegex.test(message) ||
            scriptRegex.test(name) || scriptRegex.test(email) || scriptRegex.test(message)) {
            // Found suspicious characters, return false
            toast.error('Please input proper data.')
            return false;
        }
        // --------------------------------------- SUSPICIOUS INPUT ------------------------------------------

        if(name === ""){
            errCount++;
            errs.name = "Please enter your name";
        }
        if(email === ""){
            errCount++;
            errs.email = "Please enter your email";
        } else if(!email.match(emailRegex)){
            errCount++;
            errs.email = "Please enter a valid email";
        }
        if(message === ""){
            errCount++;
            errs.message = "Please enter your message";
        }

        if(errCount > 0){
            setErrors({...errors, ...errs});
            return false;
        }
    
        // Validation passed
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
        }
    };

    return (
        <section className='min-h-[100vh] pt-8 my-10 lg:my-20' id='contact'>
        <div className='container mx-auto'>

            <div className='flex flex-col lg:flex-row'>

                {/* text */}
                <motion.div
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
                </motion.div>

                {/* form */}
                <motion.form 
                    ref={form} onSubmit={sendEmail}
                    variants={fadeIn('right', '0.3')}
                    initial='hidden' whileInView={'show'}
                    viewport={{ once: false, amount: '0.3' }}
                    className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-20 lg:pb-24 p-6 items-start'
                >
                    <input type='text' hidden value="Sanny" onChange={e => {}} name="to_name" />
                    <input type='text' hidden value={formData.name} onChange={e => {}} name="from_name" />

                    <div key="name" className='w-full'>
                        <input
                            type='text'
                            name="user_name"
                            autoComplete='none'
                            placeholder='Your name'
                            value={formData.name}
                            onChange={e => handleInputChange("name", e.target.value)}
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        />
                        {errors.name && <span className="text-accent">{errors.name}</span>}
                    </div>

                    <div key="email" className='w-full'>
                        <input
                            type='email'
                            name="user_email"
                            autoComplete='none'
                            placeholder='Your email'
                            value={formData.email}
                            onChange={e => handleInputChange("email", e.target.value)}
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        />
                        {errors.email && <span className="text-accent">{errors.email}</span>}
                    </div>

                    <div key="message" className='w-full py-3 lg:py-12 lg:mb-12'>
                        <textarea
                            rows={4}
                            name="message"  
                            autoComplete='none'
                            placeholder='Your message'
                            value={formData.message}
                            onChange={e => handleInputChange("message", e.target.value)}
                            className='bg-transparent border-b outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none'
                        ></textarea>
                        {errors.message && <span className="text-accent">{errors.message}</span>}
                    </div>

                    <div className='flex gap-x-8 items-center'>
                        <button type='submit' className='btn btn-sm mt-2 lg:mt-0'>
                            <span>Send Message</span>
                        </button>
                        <a href='#' onClick={copyEmailToClipboard} className='text-gradient btn-link'>Copy Email</a>
                    </div>
                </motion.form>

            </div>

        </div>
        </section>
    );
};

export default Contact;
