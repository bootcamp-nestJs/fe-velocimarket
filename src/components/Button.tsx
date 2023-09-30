import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string; // El "?" indica que className es opcional
}
export default function Button({ children, className = '' }: ButtonProps) {
  return (
    <button className={className + ` button_component`}>
      {children}
    </button>
  )
}