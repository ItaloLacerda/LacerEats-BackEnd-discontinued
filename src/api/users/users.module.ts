import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserModel } from 'src/database/models/users/user.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserModel, PrismaService],
})
export class UsersModule {}
