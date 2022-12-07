import * as dotenv from "dotenv";
import app from "./server";
dotenv.config(); //WE need to import this on the entry point of the server instead of diff diff handlers files

const PORT = 3001;

app.listen(PORT, () => {
  console.log("hello on http://localhost:3001");
});
