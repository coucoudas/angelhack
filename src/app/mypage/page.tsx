import useItem from "@/hook/useItem";
import useSign from "@/hook/useSign";
import { cn } from "@coucoudas/ui";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment-timezone";
export default function MyPage() {
  const router = useNavigate();
  const { user } = useSign();
  const { usedItems } = useItem();

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      router("/sign-in");
    }
  }, [user]);
  const layout = {
    displays: "flex justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  const body = {
    displays: "flex flex-col",
  };
  return (
    <div className={cn(layout)}>
      <div className={cn(body)}>
        <div className="font-bold">YOUR INFORMATION</div>
        <div>{user?.id}</div>
        <div>{user?.name}</div>
        <div>{user?.username}</div>
        <div>{user?.email}</div>
        <div>{user?.password}</div>
        {usedItems.map((item) => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.itemId}</div>
            <div>{item.name}</div>
            <div>{moment.unix(item.createdAt).format("YYYY-MM-DD")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
