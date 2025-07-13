import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-xl shadow ${className}`}>{children}</div>
  );
}

export function CardHeader({ children }) {
  return <div className="border-b px-6 py-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold">{children}</h3>;
}

export function CardContent({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
