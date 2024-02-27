import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

type ConfettiProps = {
    show: boolean;
};

export const Confetti = ({ show }: ConfettiProps) => {

    if (!show) return null;
    useEffect(() => {
        let duration = 5 * 1000;
        let animationEnd = Date.now() + duration;
        let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            let timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            let particleCount = 50 * (timeLeft / duration);
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                }),
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                }),
            );
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return <span className="h-24 mx-auto mt-20"> Congrats!</span>;
};
