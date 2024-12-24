import React, { useState } from 'react';
import SuccessModal from './SuccessSubmitModal';
import FailModal from './FailedSubmitModal';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
      });
      const [status, setStatus] = useState('idle');
      
    
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
            {status === 'success' && (
        <SuccessModal isOpen={true}
                      onClose={() => setStatus('idle')} />
      )}
      
      {status === 'error' && (
        <FailModal isOpen={true}
                   onClose={() => setStatus('idle')} />
      )}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 mb-4 gap-8 justify-items-center	">
          <div className='mx-auto flex flex-col items-center'>
            <h2 className="text-4xl font-bold mb-8 text-center">Tell us about</h2>
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
                  className="w-full p-3 border rounded-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  className="w-full p-3 border rounded-lg"
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
                  className="w-full p-3 border rounded-lg"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
             
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