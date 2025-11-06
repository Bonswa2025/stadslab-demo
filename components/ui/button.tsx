'use client';
import * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function Button({ className='', ...props }: ButtonProps){
  return <button className={`inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm shadow-sm hover:bg-slate-50 ${className}`} {...props} />;
}
export default Button;
