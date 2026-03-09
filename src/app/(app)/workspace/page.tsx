import { Card } from "@/components/ui/card";
import { getUserWorkspace } from "@/lib/server-context";

export default async function WorkspacePage() {
  const { workspace } = await getUserWorkspace();
  return (
    <Card title="ورک‌اسپیس">
      <p className="text-sm text-slate-700">نام ورک‌اسپیس: {workspace.name}</p>
      <p className="mt-2 text-sm text-slate-700">شناسه: {workspace.slug}</p>
    </Card>
  );
}
