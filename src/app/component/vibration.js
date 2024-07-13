"use client";
import React, { useEffect } from 'react';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const VibrationComponent = () => {

    const hapticsVibrate = async () => {
        console.log(12)
        await Haptics.vibrate();
    };

    useEffect(() => {
        const handleTouch = () => {
            if(window.navigator.userAgentData.mobile){
                window.navigator.vibrate(100);
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
            <button onClick={() => hapticsVibrate()}>check vibrate</button>
        </div>
    );
};

export default VibrationComponent;
