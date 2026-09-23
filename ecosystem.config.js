module.exports = {
  apps: [
    {
      name: "web",
      cwd: "./apps/web",
      script: "pnpm",
      args: "start",
    },
    {
      name: "http-server",
      cwd: "./apps/http-server",
      script: "pnpm",
      args: "start",
    },
    {
      name: "ws-server",
      cwd: "./apps/ws-server",
      script: "pnpm",
      args: "start",
    },
  ],
};
