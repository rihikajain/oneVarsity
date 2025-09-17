import React from 'react';

export default function Button({ className = "bg-bluee text-whitee", children, ...props }) {
  return (
    <button
      className={`px-2 py-1 shadow rounded-xl text-sm font-semibold h-8 w-fit  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
