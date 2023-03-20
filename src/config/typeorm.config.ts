import { User } from "@user/entities/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } from "@utils/env";
import { DataSourceOptions } from "typeorm";

export const typeormConfig: TypeOrmModuleOptions | DataSourceOptions = {
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  entities: [User],
  synchronize: false,
  logging: true,
};
