'use client';

import dynamic from 'next/dynamic';
import ContactForm from '../components/ContactForm';
import Link from 'next/link';

// Dynamically import LeafletMap with SSR disabled
const LeafletMap = dynamic(() => import('../components/LeafletMap'), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <div className="bg-white mx-auto animate-[fadeIn_1s_ease-in_forwards]">
      <div
        className="relative h-[20vh] md:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/contact.jpg")',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-indigo-600/60 md:bg-gradient-to-b from-white via-white/0 to-indigo-900/80 via-30% flex items-center justify-center">
          <div className="text-center text-white px-6 space-y-6 animate-[fadeIn_1s_ease-in_forwards]">
            <h1 className="text-4xl md:text-6xl font-bold animate-[fadeIn_1s_ease-in_forwards]">
              Contact Us
            </h1>
            <Link href="/">
            <button className="hidden md:block md:mx-auto underline text-center text-indigo-200 hover:text-indigo-400 transition-all duration-300 transform hover:scale-[1.05]">
                Home Page
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 mx-auto px-4 py-8">
        <div className="flex flex-col mb-6 mt-6 text-center">
          <hr className="border-t-1 border-double mx-auto w-3/4 border-gray-500 mb-6" />
        </div>
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-900 transform transition-all duration-500 hover:scale-[1.02]">
          CONTACT ABSOLUTE WELLNESS TODAY!
        </h1>
        <p className="text-gray-600 text-center text-lg mb-8">
          A member of our team will be in touch shortly to confirm your contact
          details or address questions you may have.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <ContactForm />
          <div className="space-y-6">
            <LeafletMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;