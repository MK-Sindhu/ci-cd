
import express from "express";
import { db } from "@repo/db";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello from the HTTP server!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body ?? {};
  if (!username || !password) {
    return res.status(400).json({ message: "username and password are required" });
  }

  try {
    // hash the password here before storing it (e.g. bcrypt)
    const user = await db.orm.public.User.create({ username, password });
    res.status(201).json({ message: "User signed up successfully!", id: user.id });
  } catch (err) {
    console.error(err);
    res.status(409).json({ message: "Could not create user (username may be taken)" });
  }
});

app.listen(3001, () => console.log("http-server on 3001"));
