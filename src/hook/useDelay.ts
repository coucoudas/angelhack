import { OnClick } from "@coucoudas/ui";
import { useEffect, useState } from "react";

export default function useDelay({
  callBack,
  timer = 5,
}: {
  callBack: OnClick;
  timer?: number;
}) {
  const [nowTime, setNowTime] = useState<number>(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      if (nowTime === 0) {
        clearInterval(interval);
        callBack();
      } else {
        setNowTime((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [nowTime, callBack]);
  return { nowTime };
}
