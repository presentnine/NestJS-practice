import { User } from "@user/entities/user.entity";
import { DataSource } from "typeorm";
import { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } from "@utils/env";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  entities: [User],
});
