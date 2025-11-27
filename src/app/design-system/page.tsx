import React from 'react';
import DesignSystemButton from '@/components/DesignSystemButton';
import Card from '@/components/Card';

const DesignSystemPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Design System</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex space-x-4">
          <DesignSystemButton variant="primary">Primary</DesignSystemButton>
          <DesignSystemButton variant="secondary">Secondary</DesignSystemButton>
          <DesignSystemButton variant="tertiary">Tertiary</DesignSystemButton>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Ride"
            imageUrl="https://via.placeholder.com/150"
          />
          <Card
            title="Courier"
            description="Uber makes same-day item delivery easier than ever."
            imageUrl="https://via.placeholder.com/150"
          />
          <Card
            title="Food"
            description="Order delivery from local restaurants with Uber Eats."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
      </section>
    </div>
  );
};

export default DesignSystemPage;