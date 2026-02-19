import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  href,
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  
  const variants = {
    primary: "border-transparent text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-500 shadow-sm",
    secondary: "border-transparent text-primary-900 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500",
    outline: "border-slate-300 text-slate-700 bg-transparent hover:bg-slate-50 focus:ring-slate-500",
    white: "border-transparent text-primary-700 bg-white hover:bg-gray-50 focus:ring-white",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (href) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    return (
      <a href={href} className={combinedClasses} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;