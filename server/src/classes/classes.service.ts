import { Injectable } from '@nestjs/common';
import { CreateClassInput, UpdateClassInput } from '../graphql';
import { PrismaService } from '../../prisma/prisma.service';
import {} from '../graphql';
@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}
  create(createClassInput: CreateClassInput) {
    return this.prisma.class.create({
      data: {
        name: createClassInput.name,
        location: createClassInput.location,
      },
    });
  }

  findAll() {
    return this.prisma.class.findMany({});
  }

  findOne(id: string) {
    return this.prisma.class.findUnique({
      where: {
        id: id,
      },
    });
  }

  findManyByFileID(id: string) {
    return this.prisma.class.findMany({
      where: {
        fileId: id,
      },
    });
  }

  update(id: string, updateClassInput: UpdateClassInput) {
    return `This action updates a #${id} class`;
  }

  remove(id: string) {
    return this.prisma.class.delete({
      where: {
        id: id,
      },
    });
  }
}
