import React, {useState, useEffect} from "react";

function DigitalClock(){

  const [time, setTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState("CET");
  
  

    let hours   = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    }
     ,1000);

    return()=>{
      clearInterval(intervalId);
    }
  },[]);
 // No dependency needed in the useEffect hook since the useState hook also triggers the re-render
 // of the page whenever there's a change in the value of state variables, in this case it's the selectedTimeZone 
 // and time.
  function formatTime(){
    switch(true){ 
      case selectedTimeZone == "PKT":
        hours = (hours + 4) % 24;
        break;
      case selectedTimeZone == "EST":
        
        hours = (24 + (hours - 6)) % 24 ;
        console.log("Hours:"+hours)
        break;
      default:
        break;
    }
    
    return `${paddingZero(hours)}:${paddingZero(minutes)}:${paddingZero(seconds)} ${selectedTimeZone}`
  }
  
  const handleMouseEnter = (event) => {
    setSelectedTimeZone(event.target.id);
  };

  function paddingZero(x){
    return (x < 10 ? "0" : "") + x;
  }


return(<>
  <div className = "clock-container"> 
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
  </div>
  <br />

    <div className="timeZone">
      <button id="CET"  onClick={handleMouseEnter}>CET</button>
      <button id="PKT"  onClick={handleMouseEnter}>PAK</button>
      <button id="EST"  onClick={handleMouseEnter}>USA</button>
  </div></>
       )

}export default DigitalClock