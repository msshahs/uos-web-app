import React, { useState, useRef } from "react";

export function Select({ children, value, onValueChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  const handleSelect = (selectedValue) => {
    onValueChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (child.type.displayName === "SelectTrigger") {
          return React.cloneElement(child, {
            onClick: () => setIsOpen(!isOpen),
            ref: triggerRef,
            value,
          });
        }

        if (child.type.displayName === "SelectContent" && isOpen) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, (item) => {
              return React.cloneElement(item, {
                onSelect: handleSelect,
              });
            }),
          });
        }

        return null;
      })}
    </div>
  );
}

export function SelectTrigger({ children, onClick }, ref) {
  return (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left bg-white"
    >
      {children}
    </button>
  );
}
SelectTrigger.displayName = "SelectTrigger";
export function SelectValue({ placeholder, value }) {
  return (
    <span className="text-gray-700">
      {value || <span className="text-gray-400">{placeholder}</span>}
    </span>
  );
}

export function SelectContent({ children }) {
  return (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow">
      {children}
    </div>
  );
}
SelectContent.displayName = "SelectContent";

export function SelectItem({ children, value, onSelect }) {
  return (
    <div
      onClick={() => onSelect(value)}
      className="cursor-pointer px-4 py-2 hover:bg-blue-100"
    >
      {children}
    </div>
  );
}
