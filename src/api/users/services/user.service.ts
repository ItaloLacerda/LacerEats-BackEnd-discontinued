import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/database/models/users/user.service';

@Injectable()
export class UserService {
  constructor(private readonly userModel: UserModel) {}

  async create(
    loginUser: string,
    firstName: string,
    lastName: string,
    userPassword: string,
    idUserType: number,
    activeUser: boolean,
  ) {
    await this.userModel.create(
      loginUser,
      firstName,
      lastName,
      userPassword,
      idUserType,
      activeUser,
    );

    return await this.findAll();
  }

  async findAll() {
    return await this.userModel.findAll();
  }
}
