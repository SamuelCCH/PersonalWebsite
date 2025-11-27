"use client";

import React from 'react';
import Button from '@/components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Awesome Site</h1>
      <p className="text-xl mb-8">
        This is a Next.js application with Tailwind CSS.
      </p>
      <Button onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
    </div>
  );
};

export default HomePage;
