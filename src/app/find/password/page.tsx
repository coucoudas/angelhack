import { useState } from "react";
import { cn, Button, CheckBox, Input, OnClick } from "@coucoudas/ui";
import { useNavigate } from "react-router-dom";

export default function FindPassword() {
  const router = useNavigate();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [autoLogin, setAutoLogin] = useState<boolean>(false);
  const layout = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  const container = {
    displays: "flex flex-col gap-y-4",
  };
  const contents: [string, OnClick][] = [
    ["회원가입", () => router("/sign-up")],
    ["아이디 찾기", () => router("/find/username")],
  ];

  return (
    <div className={cn(layout)}>
      <div className={cn(container)}>
        <div className="text-2xl text-black font-pretendard-bold font-bold">
          비밀번호 찾기
        </div>
        <button
          onClick={() => router("/sign-in")}
          className="flex text-sm text-blue-500"
        >
          {"<"} 로그인으로 돌아가기
        </button>
        <Input
          title="아이디(이메일)"
          state={[name, setName]}
          isValid={(value) => value.length === 0}
          notifications={[
            [
              (value) => value.length !== 0,
              {
                title: "존재하지 않는 아이디입니다.",
                titleColor: "text-red-500",
              },
            ],
          ]}
          placeholder="아이디를 입력해주세요."
        />
        <Button title="비밀번호 찾기" onClick={() => {}} />
        <div className="flex items-center gap-x-4">
          {contents.map(([title, onClick]) => (
            <div
              key={title}
              onClick={onClick}
              className="text-[14px] text-gray-500 underline"
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
