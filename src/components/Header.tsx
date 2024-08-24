import Svg from "@/asset/SVG";
import useSignStore from "@/store/signStore";
import { Button, cn } from "@coucoudas/ui";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const router = useNavigate();
  const { user, signOut } = useSignStore();
  const container = {
    positions: "absolute top-0 left-0",
    displays: "flex justify-center",
    sizes: "w-full h-14",
    backgrounds: "bg-white",
  };
  const block = {
    sizes: "w-full h-14",
  };
  const body = {
    displays: "flex items-center justify-between ",
    sizes: "w-full max-w-[1020px] h-full",
  };
  return (
    <>
      <div className={cn(block)} />
      <div className={cn(container)}>
        <div className={cn(body)}>
          <Svg.Logo.Coucoudas />
          <div className="flex gap-x-2">
            {!user ? (
              <Button
                title="로그인"
                onClick={() => router("/sign-in")}
                option={{
                  width: "w-12",
                  height: "h-6",
                  background: "bg-gray-black",
                  text: "text-white text-[12px]",
                }}
              />
            ) : (
              <div className="flex gap-x-2">
                <div className="flex text-gray-black">
                  <div className="font-pretendard-bold">{user.name}</div>
                  <div>님</div>
                </div>
                <Button
                  title="로그아웃"
                  onClick={async () => {
                    alert("로그아웃 되었습니다.");
                    await signOut();
                  }}
                  option={{
                    width: "w-[58px]",
                    height: "h-6",
                    background: "bg-transparent",
                    text: "text-gray-black text-[12px]",
                    boundaries: "border border-gray-300 rounded-[6px]",
                  }}
                />
              </div>
            )}
            {/* <Button
              title="회원가입"
              onClick={() => signOut()}
              option={{
                width: "w-12",
                height: "h-6",
                background: "bg-transparent",
                text: "text-gray-black text-[12px]",
              }}
            /> */}
            <Button
              title="고객센터"
              onClick={() => router("/supports")}
              option={{
                width: "w-12",
                height: "h-6",
                background: "bg-transparent",
                text: "text-gray-black text-[12px]",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
