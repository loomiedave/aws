import React from 'react';
import ContactForm from './ContactForm';

const ContactDiv = () => {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative h-[50vh] md:h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/section.jpg")',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-indigo-800/70" />
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <div className="text-center text-white space-y-6">
            <hr className="border-t border-white w-full" />
            <h1 className="text-4xl md:text-5xl font-bold">
             Mental and emotional health are vital.
            </h1>
            <p className="text-xl font-semibold text-white mb-4">
              Get in touch and get help today.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-4xl md:text-5xl text-indigo-800 text-center p-4 font-bold'>Contact Us Today</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactDiv;