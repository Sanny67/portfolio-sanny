import React, { useEffect } from 'react';
import '../cursor.css';

const CustomCursor = () => {
  useEffect(() => {
    const customCursor = document.createElement('div');
    customCursor.className = 'circle-cursor';
    document.body.appendChild(customCursor);

    const follower = document.createElement('div');
    follower.className = 'cursor-follow';
    document.body.appendChild(follower);

    const updateCursorPosition = (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.body.removeChild(customCursor);
    };
  }, []);

  return null; // We don't need to render anything in the component
};

export default CustomCursor;
