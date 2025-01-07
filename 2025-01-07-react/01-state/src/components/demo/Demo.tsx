import { useEffect, useState } from 'react';
import './Demo.css'

function Demo(): JSX.Element {
    // const startTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Setting time...")
            // time = new Date().toLocaleTimeString();
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className='Demo'>
            <p>Time is {time}</p>
        </div>
    )
}

export default Demo;