import React, { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

interface BidCountdownTimerProps {
  endDate: string; // Date string for when the bid ends
}

const BidCountdownTimer: React.FC<BidCountdownTimerProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date(endDate);
    const now = new Date();
    const secondsRemaining = differenceInSeconds(endDateTime, now);

    const days = Math.floor(secondsRemaining / (24 * 3600));
    const hours = Math.floor((secondsRemaining % (24 * 3600)) / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  // Conditional rendering for when the bid has ended
  if (
    timeLeft.days <= 0 &&
    timeLeft.hours <= 0 &&
    timeLeft.minutes <= 0 &&
    timeLeft.seconds <= 0
  ) {
    return <p>The bid has ended.</p>;
  }

  // Timer items array
  const timerItems = [
    {
      name: "Days",
      value: `${String(timeLeft.days).padStart(2, "0")}`,
    },
    {
      name: "Hours",
      value: `${String(timeLeft.hours).padStart(2, "0")}`,
    },
    {
      name: "Minutes",
      value: `${String(timeLeft.minutes).padStart(2, "0")}`,
    },
    {
      name: "Seconds",
      value: `${String(timeLeft.seconds).padStart(2, "0")}`,
    },
  ];

  const TimerItem = ({ value }: { value: string }) => (
    <li
      className={
        "border rounded-2xl bg-white flex items-center justify-center w-full py-3 px-1"
      }
    >
      {value}
    </li>
  );

  return (
    <ul className="grid grid-cols-4 gap-3 items-center p-2 bg-muted ">
      {timerItems.map((item, index) => (
        <TimerItem key={index} value={item.value} />
      ))}
    </ul>
  );
};

export default BidCountdownTimer;