"use client"
// pages/contact.tsx
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    alert('Message Sent!');
  };

  return (
    <div className="p-10 bg-[#F7F9FC]">
      <h1 className="text-4xl font-bold text-center text-[#111853]">Contact Me</h1>

      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-900" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border rounded-lg w-full py-2 px-4" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border rounded-lg w-full py-2 px-4" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-900" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className="border rounded-lg w-full py-2 px-4" 
            rows={4} 
            required 
          />
        </div>
        <button type="submit" className="bg-[#3361b6] text-white py-2 px-4 rounded-lg hover:bg-[#0c275a] transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
