import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import "./timer.css";
type Props = {
    remainingTime: number;
};

type TimeProps = {
    duration: number;
    shouldRepeat: boolean;
    delay: number;

};

const RenderTime: React.FC<Props> = ({ remainingTime }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef<number | null>(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);

    if (currentTime.current !== remainingTime) {
        isNewTimeFirstTick.current = true;
        prevTime.current = currentTime.current;
        currentTime.current = remainingTime;
    } else {
        isNewTimeFirstTick.current = false;
    }

    // force one last re-render when the time is over to tirgger the last animation
    if (remainingTime === 0) {
        setTimeout(() => {
            setOneLastRerender((val) => val + 1);
        }, 20);
    }

    const isTimeUp = isNewTimeFirstTick.current;

    return (
        <div className="time-wrapper">
            <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
                {remainingTime}
            </div>
            {prevTime.current !== null && (
                <div
                    key={prevTime.current}
                    className={`time ${!isTimeUp ? "down" : ""}`}
                >
                    {prevTime.current}
                </div>
            )}
        </div>
    );
};



const Timer: React.FC<TimeProps> = ({ duration, shouldRepeat, delay }) => {
    return (
        <div className='timer-wrapper'>
            <h2>CookingTimer</h2>
            <CountdownCircleTimer
                isPlaying
                duration={duration}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => ({ shouldRepeat, delay })}
            >
                {RenderTime}
            </CountdownCircleTimer>
        </div >
    );
};

export default Timer;
