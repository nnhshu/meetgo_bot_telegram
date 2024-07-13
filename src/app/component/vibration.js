"use client";
import React, { useEffect } from 'react';

const VibrationComponent = () => {
  useEffect(() => {
    const handleTouch = () => {
      if (window.navigator.vibrate) {
        window.navigator.vibrate(200); // Rung 200ms
      }
    };

    // Thêm sự kiện chạm vào màn hình
    window.addEventListener('touchstart', handleTouch);

    // Cleanup sự kiện khi component unmount
    return () => {
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <div>
      <h1>Chạm vào màn hình để làm rung điện thoại</h1>
    </div>
  );
};

export default VibrationComponent;
