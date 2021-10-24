import { serverHttp } from "./app";

serverHttp.listen(3000, () =>
  console.log("🚀 Server is running in port 3000.")
);
