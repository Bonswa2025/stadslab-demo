'use client';
import * as React from 'react';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'> {
  checked?: boolean;
  onCheckedChange?: (next: boolean) => void;
  className?: string;
}
export function Switch({ className='', checked, onCheckedChange, disabled, ...props }: SwitchProps){
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}>
      <input
        type="checkbox"
        role="switch"
        checked={!!checked}
        onChange={(e)=> onCheckedChange?.(e.currentTarget.checked)}
        disabled={disabled}
        {...props}
      />
      <span className="text-sm text-slate-700"></span>
    </label>
  );
}
export default Switch;
