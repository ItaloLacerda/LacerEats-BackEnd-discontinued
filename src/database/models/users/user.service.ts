import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { User } from 'src/types/user/user.interface';

@Injectable()
export class UserModel {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: User) {
    const newUser = await this.prismaService.user.create({
      data: {
        ...user,
      },
    });

    return newUser;
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findId(idUsers: string) {
    return await this.prismaService.user.findFirst({
      where: {
        idUsers,
      },
    });
  }

  async update(idUsers: string, user: User) {
    return await this.prismaService.user.update({
      where: {
        idUsers,
      },
      data: {
        ...user,
      },
    });
  }

  async delete(idUsers: string) {
    return await this.prismaService.user.delete({
      where: {
        idUsers,
      },
    });
  }
}
