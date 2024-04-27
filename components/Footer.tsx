// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#404287] text-gray-100 py-4 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="/logo.png" alt="Logo" className="h-8" /> {/* Replace with your logo */}
        </div>
        <div>
          <p>&copy; 2024 Blog Post. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
