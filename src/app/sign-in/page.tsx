import { useState } from "react";
import {
  cn,
  Button,
  CheckBox,
  Input,
  OnClick,
  Action,
  AlertModal,
} from "@coucoudas/ui";
import { useActionStore } from "@coucoudas/ui/store";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const router = useNavigate();
  const { setModal, clearModal } = useActionStore();
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
    <Action.Show
      actions={[
        [
          "alert",
          <AlertModal
            titles={{
              title: "로그인 오류",
              subtitle:
                "아이디(이메일) 혹은 비밀번호를 잘못 입력하셨거나 등록되지 않은 아이디 이메일입니다. 다시 시도해주세요.",
            }}
            button={{
              title: "확인",
              onClick: () => clearModal(),
            }}
          />,
        ],
      ]}
    >
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
            isValid={(value) => value.length >= 8 || !value.length}
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
          <CheckBox title="자동 로그인" state={[autoLogin, setAutoLogin]} />
          <Button
            title="로그인 하기"
            onClick={() => {
              setModal("alert");
            }}
          />
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
    </Action.Show>
  );
}
