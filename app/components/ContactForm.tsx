'use client';
import React, { useState } from 'react';


const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
    };
  
  return (
    <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 
          transform transition-all duration-300 hover:shadow-xl "
        >
          <div className="space-y-8">
            {['First Name','Last Name', 'email', 'phone'].map((field) => (
              <input
                key={field}
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full px-3 text-gray-800 py-2 border rounded 
                transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            ))}
            <textarea
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full text-gray-800 px-3 py-2 border rounded 
              transition-all duration-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
            <p className='text-gray-800 text-center text-sm mb-6 leading-7'> By submitting, you agree to be contacted about your request & other information using automated technology. Message frequency varies. Msg & data rates may apply. Text <span className='text-red-600 font-semibold'>STOP</span> to cancel.</p>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded 
              hover:bg-blue-600 
              transition-all duration-300 
              transform hover:scale-[1.02]"
            >
              Submit
            </button>
          </div>
        </form>
        
  )
}

export default ContactForm