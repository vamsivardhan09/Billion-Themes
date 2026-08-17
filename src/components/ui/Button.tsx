import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-body uppercase tracking-wider font-medium transition-all duration-300 ease-out rounded-sm shadow-xs';
  
  const variants = {
    primary: 'bg-[#D98E20] text-white hover:bg-[#EAA339] shadow-md hover:shadow-lg',
    secondary: 'bg-[#1C4466] text-white hover:bg-[#2B5F8C] shadow-md',
    outline: 'bg-transparent border border-[#1C4466] text-[#1C4466] hover:bg-[#1C4466] hover:text-white',
    ghost: 'bg-transparent text-slate-600 hover:text-[#D98E20]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20b958] shadow-md',
    phone: 'bg-[#1C4466] text-white hover:bg-[#122F48] shadow-md',
  };

  const sizes = {
    sm: 'text-xs py-2.5 px-5',
    md: 'text-xs py-3.5 px-7',
    lg: 'text-sm py-4 px-9',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const renderIcon = () => {
    if (variant === 'whatsapp') return <MessageCircle className="w-4 h-4 mr-2" />;
    if (variant === 'phone') return <Phone className="w-4 h-4 mr-2" />;
    return null;
  };

  if (href) {
    if (href.startsWith('/') && !href.startsWith('//')) {
      return (
        <Link to={href} className={classes}>
          {renderIcon()}
          {children}
        </Link>
      );
    }
    const isExternal = href.startsWith('http') || href.startsWith('https://');
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {renderIcon()}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {renderIcon()}
      {children}
    </button>
  );
}
