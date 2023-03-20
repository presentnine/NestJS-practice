import { IsString, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserInfoDto {
  @ApiProperty({
    description: "유저 이름",
    type: String,
  })
  @IsString()
  @Matches("^[a-z|A-Z|0-9|ㄱ-힣]{2,12}$")
  name: string;
}
