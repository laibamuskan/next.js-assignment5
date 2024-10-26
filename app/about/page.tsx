// pages/about.tsx
import React from 'react';

export default function About() {
  return (
    <div className="p-10 bg-[#F7F9FC] ">
      <h1 className="text-4xl font-bold text-center text-[#111853]">About Me</h1>
      <p className="mt-4 text-center">
      I'm an IT professional focused on delivering efficient and innovative tech solutions. Passionate about continuous learning, I'm currently expanding my skills in Next.js and exploring new challenges. My goal is to drive impactful projects that advance digital transformation.
      </p>

      {/* Skills Section */}
      <h2 className="text-3xl font-bold mt-10 text-[#111853]">My Skills</h2>
      <ul className="mt-4">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Tailwind CSS</li>
        {/* Add more skills */}
      </ul>

      {/* Personal Interests Section */}
      <h2 className="text-3xl font-bold mt-10 text-[#111853]">Personal Interests</h2>
      <p className="mt-4">In my free time, I enjoy [your hobbies or interests]. I believe that [any personal philosophy or motivation].</p>
    </div>
  );
}
