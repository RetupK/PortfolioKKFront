import React from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = ({ animationStart, valueEnd, valueStart, duration, children }) => {
    return (
        <Animate
            start={() => ({
                value: valueStart
            })}
            update={() => ({
                value: [
                    animationStart ? valueEnd : valueStart
                ],
                timing: {
                    duration: duration * 1000,
                }
            })}
        >
            {({ value }) => children(value)}
        </Animate>
    )
}

export default AnimatedProgressProvider;