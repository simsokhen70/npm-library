// src/MyComponent.tsx
import React, { useEffect } from 'react';

interface MyComponentProps {
  message: string;
}


const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  useEffect(()=>{
    alert("Hello bong " + message + " !");
  })
  return <div>{message}</div>;
};

export default MyComponent;
