import { useEffect, useState } from "react";

const Time = () => {
    //get the time
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    useEffect(() =>{
        setInterval(() =>{
            setCurrentTime(new Date().toLocaleTimeString())
        },1000)
    },[])
    return (
        <div>
            <h1 className="text-4xl font-semibold">{currentTime}</h1>
        </div>
    );
};

export default Time;