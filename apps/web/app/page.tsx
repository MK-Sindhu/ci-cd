import { db } from "@repo/db";

export default async function Home() {
  const user = await db.orm.public.User.select("id", "username").all().first();

  return (
    <div>
      {user?.username}
    </div>
  );
}