'use client';
import * as React from 'react';
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> { }
export function Switch({ className='', ...props }: SwitchProps){
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${className}`}>
      <input type="checkbox" {...props} />
      <span className="text-sm text-slate-700">Toggle</span>
    </label>
  );
}
export default Switch;
