import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '.prisma/client';
import {
  CreateUserInput,
  Role,
  UpdateUserInput,
  UserLoginInput,
  UserLoginOutput,
} from '../graphql';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserInput: CreateUserInput) {
    const data: Prisma.UserUncheckedCreateInput = {
      name: createUserInput.name,
      role: createUserInput.role,
    };
    return this.prisma.user.create({
      data: data,
    });
  }

  async login(userLoginInput: UserLoginInput) {
    const result = await this.prisma.user.findUnique({
      where: {
        name: userLoginInput.username,
      },
    });
    const projectsResult = await this.prisma.project.findUnique({
      where: {
        name: userLoginInput.project,
      },
    });
    if (
      result &&
      projectsResult &&
      userLoginInput.password == result.password
    ) {
      const userLoginOutput: UserLoginOutput = {
        id: result.id,
        username: result.name,
        role: Role.USER,
        projectID: projectsResult.id,
        projectName: projectsResult.name,
      };
      return userLoginOutput;
    }
    return null;
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: updateUserInput.name,
        role: updateUserInput.role,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }

  findManyByIDs(IDs: string[]) {
    return this.prisma.user.findMany({
      where: {
        id: {
          in: IDs,
        },
      },
    });
  }
}
