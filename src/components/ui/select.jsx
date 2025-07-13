import React, { useState } from "react";

export function Select({ children, value, onValueChange }) {
  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { value, onValueChange });
      })}
    </div>
  );
}

export function SelectTrigger({ children }) {
  return (
    <button className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left">
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow">
      {children}
    </div>
  );
}

export function SelectItem({ children, value, onValueChange }) {
  return (
    <div
      onClick={() => onValueChange(value)}
      className="cursor-pointer px-4 py-2 hover:bg-blue-100"
    >
      {children}
    </div>
  );
}
