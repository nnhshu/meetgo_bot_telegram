"use client";
import React, { useEffect, useState } from 'react';
import { TelegramProvider, useTelegram } from "../lib/TelegramProvider";

const VibrationComponent = () => {
    const [webApp, setWebApp] = useState(null);

    const hapticsVibrate = async () => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');   
        console.log('clicked')
    };

    useEffect(() => {
        const handleTouch = () => {
            window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');   
        };

        // Thêm sự kiện chạm vào màn hình
        window.addEventListener('touchstart', handleTouch);

        // Cleanup sự kiện khi component unmount
        return () => {
            window.removeEventListener('touchstart', handleTouch);
        };
    }, []);

    return (
        <TelegramProvider>
            <div>
                <button onClick={() => hapticsVibrate()}>check vibrate</button>
            </div>
        </TelegramProvider>
        
    );
};

export default VibrationComponent;