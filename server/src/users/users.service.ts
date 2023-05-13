import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { CreateUserInput, UpdateUserInput } from '../graphql';

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
