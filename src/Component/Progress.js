import React, { useState, useEffect } from "react";
import "./Progress.css";

const Progress = () => {
  const [progress, setprogress] = useState(0);

  useEffect(()=>{
    const timer=setInterval(()=>{
        if(progress<100){
            setprogress(prevProgress=>prevProgress+1);
        }else{
            clearInterval(timer);
        }
    },50);
    return ()=>clearInterval(timer);
  },[progress]);

  return (
    <div>
      <div className="progress-bar">
        <div className="progress" style={{width:`${progress}%`}}>
            {progress===100 ? 'Completed!' : <span className="percentage">{`${progress}%`}</span>}
        </div>
      </div>
    </div>
  );
};

export default Progress;
