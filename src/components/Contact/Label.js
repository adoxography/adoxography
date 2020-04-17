import React from 'react';

const Label = ({ children, className, htmlFor }) => (
  <label htmlFor={htmlFor} className={`block font-display lowercase lg:text-lg mb-1 ${className}`} >
    {children}
  </label>
);

export default Label;
