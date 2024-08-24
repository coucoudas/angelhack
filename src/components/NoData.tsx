import { cn } from "@coucoudas/ui";

export default function NoData({
  script = "NO DATA",
  option,
}: {
  script?: string;
  option?: {
    text?: string;
    size?: string;
  };
}) {
  const { size, text } = option ?? {};
  const container = {
    displays: "flex justify-center items-center",
    sizes: size ?? "w-25 ",
    backgrounds: "bg-gray-200",
    fonts: text ?? "text-sm",
    styles: " aspect-square",
  };
  return (
    <div className={cn(container)}>
      <div>{script}</div>
    </div>
  );
}
