import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd() as string, ".env") });

export const { PORT, DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME, HOST } = process.env;
