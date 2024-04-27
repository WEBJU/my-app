'use client';

import NavBar from '@/components/NavBar';
import { findPostBySlug } from '../../../utils/blogData';
import Link from 'next/link';
import React from 'react';
import Footer from '@/components/Footer';

const Post = ({ params }: { params: { slug: string } }) => {
  const post = findPostBySlug(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <NavBar /> {/* Render the NavBar component */}
   
    <div className="container mx-auto mt-8">
      <img
        src={`/${post.image}`}
        alt={post.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="mb-4">{post.content}</div>
      <Link href="/" className="text-blue-600">
        Back to Homepage
      </Link>
    </div>
    <Footer/>
    </div>
  );
};

export default Post;
