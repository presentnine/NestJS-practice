import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiQuery } from "@nestjs/swagger";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  @ApiOperation({
    summary: "",
  })
  @ApiQuery({
    name: "",
    type: "",
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
