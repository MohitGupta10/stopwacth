import { useState, useEffect } from "react";
export const Stopwatch = () => {
  const [hour, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [stop, setStop] = useState(false);

  const onStart = () => {
    setStop(false);
  };
  const onStop = () => {
    setStop(true);
  };
  const onReset = () => {
    setHours(0);
    setMin(0);
    setSecond(0);
    setMilisecond(0);
  };
  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (min > 59) {
          setHours(hour + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (second > 59) {
          setMin(min + 1);
          setSecond(0);
          clearInterval(interval);
        }
        if (milisecond > 99) {
          setSecond(second + 1);
          setMilisecond(0);
          clearInterval(interval);
        }
        if (milisecond <=99) {
          setMilisecond(milisecond + 1);
          clearInterval(interval);
        }
      }, 20);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <h1>StopWatch</h1>
      <h1>
        {" "}
        hours:{hour} min:{min} second:{second} minisecond:{milisecond}
      </h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
};
