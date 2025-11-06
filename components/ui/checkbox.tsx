'use client';
import * as React from 'react';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'> {
  checked?: boolean;
  /** shadcn-achtige prop */
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  [key: string]: any;
}

export function Checkbox({
  className = '',
  checked,
  onCheckedChange,
  onChange,           // standaard React prop blijft ook werken
  disabled,
  ...props
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.currentTarget.checked);
    onChange?.(e); // roep originele onChange ook aan
  };

  return (
    <label
      className={`inline-flex items-center gap-2 cursor-pointer ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
    >
      <input
        type="checkbox"
        checked={!!checked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <span className="text-sm text-slate-700" />
    </label>
  );
}

export default Checkbox;
