import { useDelay } from "@/hook";

export default function RootPage() {
  const { nowTime } = useDelay({
    callBack: () => console.log("done"),
  });
  return <div>{nowTime}</div>;
}
