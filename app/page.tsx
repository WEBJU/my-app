// pages/index.tsx
import React from 'react';
import BlogCard from '../components/BlogCard';
import NavBar from '../components/NavBar'; // Import the NavBar component
import blogData, { BlogPost } from '../utils/blogData';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  const blogPosts: BlogPost[] = blogData;

  return (
    <div>
      <NavBar /> {/* Render the NavBar component */}
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">The Accessibilty Blog</h1>
        <p className="text-xl mb-4">The voice of the excluded</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
