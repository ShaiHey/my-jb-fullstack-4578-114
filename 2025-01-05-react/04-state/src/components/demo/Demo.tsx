import { useEffect, useRef, useState } from 'react';
import './Demo.css'

function Demo(): JSX.Element {
    // const startTime = new Date().toLocaleTimeString();
    const startTime = useRef<string>(new Date().toLocaleTimeString());
    const [currentTime, setCurrentTime] = useState<string>(startTime.current);

    // useEffect 2nd param (the array) has 3 options
    // 1. do not pass it at all: the effect will run with every render and rerender
    // 2. pass an empty array: run the effect only once, only at initial render
    // 3. pass an array containing variable: the effect will be reactive
    // to the variables. it will run every time a variable changes
    useEffect(() => {
        // Initialization
        const intervalId = setInterval(() => {
            console.log("Modifying time....")
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Destruction
        return () => clearInterval(intervalId)
    }, []);

    return (
        <div className='Demo'>
            <p>Start time: {startTime.current}</p>
            <p>Current time: {currentTime}</p>
        </div>
    )
}

export default Demo;