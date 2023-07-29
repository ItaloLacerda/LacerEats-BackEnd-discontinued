import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserModel {
  constructor(private readonly prismaServicee: PrismaService) {}

  async create(
    loginUser: string,
    firstName: string,
    lastName: string,
    userPassword: string,
    idUserType: number,
    activeUser: boolean,
  ) {
    const newUser = await this.prismaServicee.user.create({
      data: {
        login_user: loginUser,
        first_name: firstName,
        last_name: lastName,
        user_password: userPassword,
        id_user_type: idUserType,
        active_user: activeUser,
      },
    });

    return newUser;
  }

  async findAll() {
    return await this.prismaServicee.user.findMany();
  }
}
