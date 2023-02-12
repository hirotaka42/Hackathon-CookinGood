import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type Props = {
    duration: number;
};

const renderTime = ({ remainingTime }: { remainingTime: number }) => {
    if (remainingTime === 0) {
        return <div>Time's up!</div>;
    }

    return <div>{remainingTime}</div>;
};

const Timer: React.FC<Props> = ({ duration }) => {
    return (
        <div className='CookingTimerBoard'>
            <h2>CookingTimer</h2>
            <CountdownCircleTimer
                isPlaying
                duration={duration}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {renderTime}
            </CountdownCircleTimer>
        </div>
    );
};

export default Timer;