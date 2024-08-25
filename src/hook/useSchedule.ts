import { useEffect, useState } from "react";

export default function useSchedule(initialTime: number) {
  const [timer, setTimer] = useState<number>(initialTime);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === 0) {
        setTimer(initialTime);
        return setFlag((prevFlag) => !prevFlag);
      }
      setTimer((prev) => {
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTime]);

  return { timer, flag };
}
