import { useState } from "react";
import { cn, Button, CheckBox, Input, Shelf } from "@coucoudas/ui";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const router = useNavigate();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordCheck, setPasswordCheck] = useState<string>();
  const [agree, setAgree] = useState<boolean>(false);
  const layout = {
    displays: "flex flex-col justify-center items-center",
    sizes: "w-full min-h-screen",
  };
  return (
    <div className={cn(layout)}>
      <Shelf.Col className={"gap-y-4"}>
        <div className="text-2xl text-black font-pretendard-bold font-bold">
          SIGN UP
        </div>
        <div className="flex gap-x-2 text-[14px]">
          <div>이미 아이디가 있으신가요?</div>
          <button
            onClick={() => router("/sign-in")}
            className="text-blue-500 underline"
          >
            로그인
          </button>
        </div>
        <Input
          title="이름"
          state={[name, setName]}
          placeholder="이름을 입력해주세요."
        />
        <Input
          title="이메일"
          state={[email, setEmail]}
          placeholder="이메일을 입력해주세요."
        />
        <Input
          title="비밀번호"
          state={[password, setPassword]}
          placeholder="영문, 숫자, 특수문자 8~16자"
          type="password"
        />
        <Input
          title="비밀번호 확인"
          state={[passwordCheck, setPasswordCheck]}
          isValid={!passwordCheck || passwordCheck === password}
          placeholder="비밀번호를 한번 더 입력해주세요."
          notifications={[
            [!passwordCheck, { title: "*영문, 숫자, 특수문자 8~16자" }],
            [
              !!passwordCheck && passwordCheck !== password,
              {
                title: "*비밀번호가 일치하지 않습니다.",
                titleColor: "text-red-500",
              },
            ],
          ]}
          type="password"
        />
        <CheckBox title="개인정보제공동의" state={[agree, setAgree]} />
        <Button title="회원가입" onClick={() => {}} />
      </Shelf.Col>
    </div>
  );
}
