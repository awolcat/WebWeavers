 /* eslint-disable */
 import React, { useState, useEffect } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 
 const ContactForm = () => {
     const [formData, setFormData] = useState({
         email: '',
         name: '',
         message: '',
       });
       const [status, setStatus] = useState('idle');
       
     // Simplified timeout effect
     useEffect(() => {
         if (status === 'success' || status === 'error') {
             const timer = setTimeout(() => {
                 setStatus('idle');
             }, 8000);
             
             return () => clearTimeout(timer); // Only clear the timeout, don't reset status
         }
     }, [status]);
 
       const handleSubmit = async (e) => {
         e.preventDefault();
         setStatus('submitting');
         try {
           //Send data to serverless function path
           const response = await fetch('/api/submit', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(formData),
           });
           
           if (!response.ok) {
             const error = await response.json();
             
             throw new Error(error.message || 'Submission failed');
           }
           
           setStatus('success');
           setFormData({ 
             email: '',
             name: '',
             message: '', });
         } catch (error) {
           setStatus('error');
         }
       };
 
       return (
         <section id="contact" className="px-6 py-16">
         <h1 className="text-3xl font-bold mb-16 mt-8 text-center">Contact us</h1>
         <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 mb-4 gap-8 justify-items-center	">
           <div className='mx-auto flex flex-col items-center'>
             <h2 className="text-4xl font-bold mb-4 text-center">Tell us about</h2>
             <h2 className="text-4xl font-bold mb-8 text-blue-500 text-center">your project.</h2>
             <p className='w-full md:w-3/6 md:text-center lg:text-left'>Lets figure out how to create an effective application,
             its cost and terms of its development</p>
           </div>
           <div className='w-full md:w-4/6 lg:w-full'>
             <form onSubmit={handleSubmit} id="enquiry-form" className="space-y-6">
               <div>
                 <input
                   type="text"
                   placeholder="Name"
                   required
                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                   value={formData.name}
                   onChange={(e) => setFormData({...formData, name: e.target.value})}
                 />
               </div>
               <div>
                 <input
                   type="email"
                   placeholder="E-mail"
                   required
                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                 />
               </div>
               <div>
                 <textarea
                   placeholder="Message"
                   rows={4}
                   style={{resize: 'none'}}
                   required
                   className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                   value={formData.message}
                   onChange={(e) => setFormData({...formData, message: e.target.value})}
                 />
               </div>
               
               {/* Status Messages */}
               <AnimatePresence>
                 {status === 'success' && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.3 }}
                     className="bg-green-50 text-green-800 px-4 py-2 rounded-lg border border-green-200 text-sm relative overflow-hidden"
                   >
                     Message sent successfully! We'll get back to you soon.
                   </motion.div>
                 )}
                 
                 {status === 'error' && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.3 }}
                     className="bg-red-50 text-red-800 px-4 py-2 rounded-lg border border-red-200 text-sm relative overflow-hidden"
                   >
                     Failed to send message. Please try again later.
                   </motion.div>
                 )}
               </AnimatePresence>
              
               <button
                   type="submit"
                   className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
                   disabled={status === 'submitting'}
               >{status === 'submitting' ?
                   <div id='loading'></div> :
                   <>Submit Enquiry</>
                 }
               </button>
             </form>
           </div>
         </div>
       </section>
       );
 };
 
 export default ContactForm;