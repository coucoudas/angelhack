import { useState } from "react";
import { cn, Button, CheckBox, Input, OnClick } from "@coucoudas/ui";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const router = useNavigate();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
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
    ["비밀번호 찾기", () => router("/find/password")],
  ];

  return (
    <div className={cn(layout)}>
      <div className={cn(container)}>
        <div className="text-2xl text-black font-pretendard-bold font-bold">
          로그인
        </div>
        <Input
          title="아이디(이메일)"
          state={[username, setUsername]}
          placeholder="아이디를 입력해주세요."
        />
        <Input
          title="비밀번호"
          state={[password, setPassword]}
          isValid={(value) => value.length >= 8}
          placeholder="비밀번호를 입력해주세요."
          type="password"
        />
        <CheckBox title="자동 로그인" state={[autoLogin, setAutoLogin]} />
        <Button title="로그인 하기" onClick={() => {}} />
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
