'use client';
import * as React from 'react';
export function Select({ children, value, onValueChange }:{ children:React.ReactNode; value?:string; onValueChange?:(v:string)=>void }){
  return <div data-select value={value} onChange={()=>{}}>{children}</div>;
}
export function SelectTrigger({ children, className='', ...props }:{ children:React.ReactNode; className?:string } & React.HTMLAttributes<HTMLDivElement>){
  return <div className={`inline-flex items-center justify-between rounded-md border border-slate-300 px-3 py-1.5 text-sm bg-white ${className}`} {...props}>{children}</div>;
}
export function SelectValue({ placeholder }:{ placeholder?:string }){ return <span>{placeholder}</span>; }
export function SelectContent({ children }:{ children:React.ReactNode }){ return <div className="mt-2 rounded-md border bg-white p-2 shadow">{children}</div>; }
export function SelectItem({ value, children, onClick }:{ value:string; children:React.ReactNode; onClick?:()=>void }){ 
  return <div className="px-2 py-1.5 rounded hover:bg-slate-50 cursor-pointer" onClick={onClick} data-value={value}>{children}</div>;
}
