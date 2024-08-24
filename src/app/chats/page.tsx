import { cn } from "@coucoudas/ui";

export default function ChatsPage() {
  const layout = {
    displays: "flex flex-col",
    sizes: "w-full max-w-[456px] min-h-screen",
    backgrounds: "bg-white",
  };
  return (
    <div className={cn(layout)}>
      <div>채팅방</div>
    </div>
  );
}
