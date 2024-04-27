'use client';
// components/NavBar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <nav className="bg-[#404287] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" passHref>
            <span className="text-white font-semibold text-xl">Blog Posts</span>
          </Link>
        </div>
        <div className="flex items-center">
        <Link href={`/search?q=${searchTerm}`} passHref>
            <button className=" text-white px-3 hover:underline">Blogs</button>
          </Link>
          <input
            type="text"
            className="bg-gray-100 mr-4 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
            placeholder="Search Blog..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Link href={`/search?q=${searchTerm}`} passHref>
            <button className="border p-2 rounded text-white bg hover:underline">Create Post Blog</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
