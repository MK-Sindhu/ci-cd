import { db } from "@repo/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await db.orm.public.User.select("id", "username").all().first();

  return (
    <div>
      NAME: {user?.username}
    </div>
  );
}
