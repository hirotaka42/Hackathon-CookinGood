import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type Props = {
    duration: number;
    shouldRepeat: boolean;
    delay: number;

};

const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0) {
        return <div>Time's up!</div>;
    }

    return (
        <div className="timer">
            <div className="value">{remainingTime}</div>
        </div>
    );
};

const Timer: React.FC<Props> = ({ duration, shouldRepeat, delay }) => {
    return (
        <div className='timer-wrapper'>
            <h2>CookingTimer</h2>
            <CountdownCircleTimer
                isPlaying={true}
                duration={duration}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => ({ shouldRepeat, delay })}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div >
    );
};

export default Timer;
