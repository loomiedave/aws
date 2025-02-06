import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      <div className="max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <Image 
            src="/404-illustration.jpg" 
            alt="404 Error" 
            width={300} 
            height={300} 
          />
        </div>
        <h1 className="text-5xl font-bold text-indigo-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          The page you&apos;re looking for seems to have an error or doesn&apos;t exist.
        </p>
        <div className="space-x-4">
          <Link href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Go Home
          </Link>
          <Link href="/contact" className="bg-gray-200 text-indigo-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}