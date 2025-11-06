'use client';
import * as React from 'react';
export function Dialog({ children }:{ children:React.ReactNode }){ return <div>{children}</div>; }
export function DialogContent({ children, className='' }:{ children:React.ReactNode; className?:string }){ return <div className={`fixed inset-0 grid place-items-center bg-black/30 p-4`}><div className={`w-full max-w-lg rounded-lg bg-white p-4 ${className}`}>{children}</div></div>; }
export function DialogHeader({ children }:{ children:React.ReactNode }){ return <div className="mb-2">{children}</div>; }
export function DialogTitle({ children }:{ children:React.ReactNode }){ return <h3 className="text-base font-semibold">{children}</h3>; }
export function DialogFooter({ children }:{ children:React.ReactNode }){ return <div className="mt-3 flex justify-end gap-2">{children}</div>; }
