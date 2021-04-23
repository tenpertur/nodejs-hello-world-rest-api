import { server } from "./server";

export const hostname = "127.0.0.1";
export const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
