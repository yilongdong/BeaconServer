import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '.prisma/client';
import {
  ClassAttrs,
  CreateProjectInput,
  CYCLO,
  FileCYCLO,
  PageInput,
  UpdateProjectInput,
} from '../graphql';

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

  async searchClassAttrs(
    projectID: string,
    pageInput: PageInput,
    text: string,
  ) {
    const result = await this.prisma.file.findMany({
      where: {
        projectId: projectID,
        classes: {
          some: {
            OR: {
              name: {
                contains: text,
              },
              location: {
                is: {
                  path: {
                    contains: text,
                  },
                },
              },
            },
          },
        },
      },
      select: {
        classes: {
          where: {
            OR: {
              name: {
                contains: text,
              },
              location: {
                is: {
                  path: {
                    contains: text,
                  },
                },
              },
            },
          },
          select: {
            name: true,
            methods: {
              select: {
                access: true,
              },
            },
            fields: {
              select: {
                access: true,
              },
            },
            bases: {
              select: {
                access: true,
              },
            },
            relations: true,
          },
        },
      },
      take: pageInput.take,
      skip: pageInput.after,
    });
    const res = result
      .map((info) => {
        return info.classes;
      })
      .flat(1)
      .map((info) => {
        const classAttrs: ClassAttrs = {
          name: info.name,
          coupling: {
            sum: info.relations.length + info.bases.length,
            inherit: info.bases.length,
            other: info.relations.length,
          },
          field: {
            public: info.fields.filter((field) => field.access == 'PUBLIC')
              .length,
            private: info.fields.filter((field) => field.access == 'PRIVATE')
              .length,
            protected: info.fields.filter(
              (field) => field.access == 'PROTECTED',
            ).length,
            sum: info.fields.length,
          },
          method: {
            public: info.methods.filter((method) => method.access == 'PUBLIC')
              .length,
            private: info.methods.filter((method) => method.access == 'PRIVATE')
              .length,
            protected: info.methods.filter(
              (method) => method.access == 'PROTECTED',
            ).length,
            sum: info.methods.length,
          },
        };
        return classAttrs;
      });
    return res;
  }

  async searchCLOC(
    projectID: string,
    pageInput: PageInput,
    text: string | undefined,
  ) {
    const result = await this.prisma.file.findMany({
      where: {
        projectId: projectID,
        path: {
          contains: text,
        },
      },
      select: {
        path: true,
        CLOCInfo: true,
      },
      take: pageInput.take,
      skip: pageInput.after,
    });
    return result;
  }

  async searchCYCLO(
    projectID: string,
    pageInput: PageInput,
    text: string | undefined,
  ) {
    const result = await this.prisma.file.findMany({
      where: {
        projectId: projectID,
      },
      select: {
        filename: true,
        path: true,
        CYCLOInfo: true,
      },
      take: pageInput.take,
      skip: pageInput.after,
    });
    if (text == undefined) {
      return result;
    }
    result.forEach((fileCYCLO) => {
      fileCYCLO.CYCLOInfo = fileCYCLO.CYCLOInfo.filter((cycloInfo) => {
        return cycloInfo.functionName.indexOf(text) != -1;
      });
    });
    return result;
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
