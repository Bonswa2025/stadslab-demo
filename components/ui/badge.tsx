import * as React from 'react';
export function Badge({ className='', children, ...props }:{ className?:string; children:React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>){
  return <span className={`inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs font-medium ${className}`} {...props}>{children}</span>;
}
export default Badge;
