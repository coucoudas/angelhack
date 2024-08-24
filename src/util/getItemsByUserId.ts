import db from "@/db";

export default function getItemsByUserId(userId: number) {
  const filteredLogs = db.logs.filter((log) => log.userId === userId);
  return filteredLogs;
}
