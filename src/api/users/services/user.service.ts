import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/database/models/users/user.service';
import { User } from 'src/types/user/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserModel) {}

  async create(newUserData: User) {
    await this.userModel.create(newUserData);

    return await this.findAll();
  }

  async findAll() {
    return await this.userModel.findAll();
  }
}
