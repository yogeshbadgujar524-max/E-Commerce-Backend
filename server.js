import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./config/config.env",
});

if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT || 4000, () => {
    console.log(
      `Server is running on port ${
        process.env.PORT || 4000
      }`
    );
  });
}

export default app;