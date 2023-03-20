import { Module } from "@nestjs/common";
import { UserModule } from "@user/user.module";
import { typeormConfig } from "@config/typeorm.config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
