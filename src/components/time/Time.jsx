import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Time = ({selectedColor}) => {
    //get the time
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())
    useEffect(() =>{
        setInterval(() =>{
            setCurrentTime(new Date().toLocaleTimeString())
        },1000)
    },[])
    return (
        <div>
            <h1 className=" text-4xl font-semibold" style={{color: selectedColor}} >{currentTime}</h1>
        </div>
    );
};
Time.propTypes = {
    selectedColor: PropTypes.string.isRequired
}
export default Time;