import useSignStore from "@/store/signStore";

export default function useSign() {
  const { user } = useSignStore();
  return { user };
}
