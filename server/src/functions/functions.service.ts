import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFunctionInput, UpdateFunctionInput } from '../graphql';

@Injectable()
export class FunctionsService {
  constructor(private prisma: PrismaService) {}
  create(createFunctionInput: CreateFunctionInput) {
    return 'This action adds a new function';
  }

  findAll() {
    return this.prisma.function.findMany({});
  }
  find
  findManyByClassID(id: string) {
    return this.prisma.function.findMany({
      where: {
        classId: id,
      },
    });
  }

  findManyByFileID(id: string) {
    return this.prisma.function.findMany({
      where: {
        fileId: id,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.function.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateFunctionInput: UpdateFunctionInput) {
    return `This action updates a #${id} function`;
  }

  remove(id: string) {
    return this.prisma.function.delete({
      where: {
        id: id,
      },
    });
  }
}
