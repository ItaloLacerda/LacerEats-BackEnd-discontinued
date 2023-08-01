import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
    return await this.userService.create(newUserData);
  }

  @Get('/:id')
  async findId(@Param('id') id: string) {
    return await this.userService.findId(id);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() dataUser: User) {
    return await this.userService.update(id, dataUser);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
