import React from 'react';
import { useSpring, animated } from 'react-spring';
import StreamingTest from '../assets/videos/streaming_test.mp4';
import './Streaming.scss';

export default function Streaming({ onBackClick }) {
    const boxAnimation = useSpring({
        opacity: 1,
        from: {
            opacity: 0,
        },
    });

    return (
        <animated.div className="streaming" style={boxAnimation}>
            <button onClick={() => onBackClick()}>Volver al mapa</button>
            <video src={StreamingTest} autoPlay={true} loop={true} />
        </animated.div>
    );
}
