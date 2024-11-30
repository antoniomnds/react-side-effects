import {useEffect, useState} from "react";

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    // useEffect avoids infinite loop caused by setRemainingTime
    const interval = setInterval(
      () => setRemainingTime(prevTime => prevTime - 10),
      10
    );
    // remove interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <progress value={remainingTime} max={timer}/>
  );
}