import React, { useEffect, useState } from 'react';

const Counter = () => {
  // Initial time values
  const initialTime = {
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59
  };

  // State to keep track of the countdown
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        // Decrease seconds
        if (seconds > 0) {
          seconds -= 1;
        } else {
          // Handle minutes
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else {
            // Handle hours
            if (hours > 0) {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            } else {
              // Handle days
              if (days > 0) {
                days -= 1;
                hours = 23;
                minutes = 59;
                seconds = 59;
              } else {
                // Reset to initial time after countdown finishes
                return initialTime;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-5 my-10 justify-center">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": time.days }}>{time.days}</span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": time.hours }}>{time.hours}</span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": time.minutes }}>{time.minutes}</span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": time.seconds }}>{time.seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Counter;
