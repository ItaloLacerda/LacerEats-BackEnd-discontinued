import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from 'src/types/user/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() newUserData: User) {
    const {
      activeUser,
      firstName,
      idUserType,
      lastName,
      loginUser,
      userPassword,
    } = newUserData;
    return await this.userService.create(
      loginUser,
      firstName,
      lastName,
      userPassword,
      idUserType,
      activeUser,
    );
  }
}
