'use client';
import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function Check() {
  const [formData, setFormData] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleStartClick = () => {
    router.push('/'); // Replace with your target page route
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post('http://127.0.0.1:5000/query', {
        query: formData
      });
      setResponse(result.data.response);
      setError(null); // Clear any previous error
    } catch (err: any) {
      setError(err.response?.data?.error || 'An unexpected error occurred');
      setResponse(null); // Clear any previous response
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 via-blue-300 to-blue-500">
      {/* Navigation Bar */}
      <header className="p-4">
        <h1 className="text-3xl font-bold text-center text-white" onClick={handleStartClick}>Clear Cosmetics.</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg flex gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-black">Enter Ingredients</h2>
            <textarea 
              value={formData}
              onChange={handleChange}
              placeholder="Ingredients"
              required
              className="border border-gray-300 rounded-lg p-4 w-full text-sm text-black resize-none min-h-[200px]"
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white rounded-lg p-2 hover:bg-gray-300 mt-4 w-full"
            >
              Submit
            </button>
          </div>
          <div className="flex-1 border-l border-gray-300 pl-6">
            {response && <p className="text-black">Response: {response}</p>}
            {error && <p className="text-red-600">Error: {error}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
