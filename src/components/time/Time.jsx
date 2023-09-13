import { useState } from "react";

const Time = () => {
    //get the time
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-4xl font-semibold">{currentTime}</h1>
        </div>
    );
};

export default Time;