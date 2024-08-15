'use client'; // Mark this file as a Client Component

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push('/product-check'); // Replace with your target page route
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-screen bg-gradient-to-r from-green-400 via-blue-300 to-blue-500">
      <div className="flex flex-col items-start justify-center max-w-lg text-left font-bold">
        <h1 className="text-9xl">Clear&nbsp;</h1>
        <h1 className="text-9xl">Cosmetics.</h1>
        <div className="w-full flex justify-center">
          <button 
            className="mt-8 px-4 py-2 bg-white text-black rounded-md shadow-md"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
      </div>
    </section>
  );
}
