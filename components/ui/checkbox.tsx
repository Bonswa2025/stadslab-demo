'use client';
import * as React from 'react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  [key: string]: any;
}

export function Checkbox({
  className = '',
  checked,
  onCheckedChange,
  disabled,
  ...props
}: CheckboxProps) {
  return (
    <label
      className={`inline-flex items-center gap-2 cursor-pointer ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={!!checked}
        onChange={(e) => onCheckedChange?.(e.currentTarget.checked)}
        disabled={disabled}
        {...props}
      />
      <span className="text-sm text-slate-700"></span>
    </label>
  );
}

export default Checkbox;
