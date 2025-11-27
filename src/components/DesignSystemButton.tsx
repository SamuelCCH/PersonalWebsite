import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const DesignSystemButton: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'font-bold py-2 px-4 rounded-full';

  const variantClasses = {
    primary: 'bg-black text-white',
    secondary: 'bg-gray-200 text-black',
    tertiary: 'bg-transparent text-black',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default DesignSystemButton;