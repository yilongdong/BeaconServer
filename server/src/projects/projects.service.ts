import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '.prisma/client';
import { CreateProjectInput, UpdateProjectInput } from '../graphql';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectInput: CreateProjectInput) {
    const principalIDsKVMap = createProjectInput.principalIDs.map(
      (id: string) => {
        return { id: id };
      },
    );
    return this.prisma.project.create({
      data: {
        name: createProjectInput.name,
        principals: {
          connect: principalIDsKVMap,
        },
      },
      include: {
        principals: true,
      },
    });
  }

  findAll() {
    return this.prisma.project.findMany({});
  }

  findOne(id: string) {
    return this.prisma.project.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    // 暂时只有改名字的功能
    return this.prisma.project.update({
      where: {
        id: id,
      },
      data: {
        name: updateProjectInput.name,
      },
    });
  }

  remove(id: string) {
    return this.prisma.project.delete({
      where: {
        id: id,
      },
    });
  }

  addPrincipal(projectID: string, principalID: string) {
    return this.prisma.project.update({
      where: {
        id: projectID,
      },
      data: {
        principals: {
          connect: {
            id: principalID,
          },
        },
      },
    });
  }

  findManyByIDs(projectIDs: string[]) {
    return this.prisma.project.findMany({
      where: {
        id: {
          in: projectIDs,
        },
      },
    });
  }
}
