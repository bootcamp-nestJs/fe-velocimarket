import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string; // El "?" indica que className es opcional
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button className={`${className} button_component`} {...props}>
      {children}
    </button>
  );
}
