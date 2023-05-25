import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CreateFileInput,
  SeriesItem,
  SortInput,
  UpdateFileCLOCInput,
  UpdateFileCYCLOInput,
  UpdateFileGitCommitsInput,
  UpdateFileInclusionsInput,
} from '../graphql';
import * as path from 'path';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}
  create(createFileInput: CreateFileInput) {
    return this.prisma.file.create({
      data: {
        path: createFileInput.path,
        filename: path.basename(createFileInput.path),
        directory: path.dirname(createFileInput.path),
        gitCommits: [],
        inclusions: [],
      },
    });
  }

  callgraphOfFile(fileId: string) {
    return this.prisma.functionRelation.findMany({
      where: {
        fileId: fileId,
      },
    });
  }

  findAll() {
    return this.prisma.file.findMany({});
  }

  findManyByIDs(IDs: string[]) {
    return this.prisma.file.findMany({
      where: {
        id: {
          in: IDs,
        },
      },
    });
  }

  findManyByProjectID(id: string) {
    return this.prisma.file.findMany({
      where: {
        projectId: id,
      },
    });
  }

  async topsOfLOC(projectID: string, sortInput: SortInput) {
    let order: 'desc' | 'asc' = 'desc';
    if (sortInput.sort == 'asc') {
      order = 'asc';
    }
    const filesLocList = await this.prisma.file.findMany({
      where: {
        projectId: projectID,
      },
      take: sortInput.take,
      select: {
        filename: true,
        CLOCInfo: {
          select: {
            code: true,
          },
        },
      },
      orderBy: {
        CLOCInfo: {
          code: order,
        },
      },
    });
    if (filesLocList) {
      return (
        filesLocList?.map((fileLoc) => {
          const {
            filename,
            CLOCInfo: { code },
          } = fileLoc;
          return {
            name: filename,
            value: code,
          };
        }) || []
      );
    }
    return [];
  }
  async topsOfGit(projectID: string, sortInput: SortInput) {
    const fileGitList = await this.prisma.file.findMany({
      where: {
        projectId: projectID,
      },
      select: {
        filename: true,
        gitCommits: true,
      },
    });
    if (!fileGitList) {
      return [];
    }
    const seriesItems: SeriesItem[] = fileGitList.map((gitInfo) => {
      const { filename, gitCommits } = gitInfo;
      return {
        name: filename,
        value: gitCommits?.length || 0,
      };
    });

    if (sortInput.sort == 'asc') {
      seriesItems.sort((lhs, rhs) => {
        return lhs.value - rhs.value;
      });
    } else {
      seriesItems.sort((lhs, rhs) => {
        return rhs.value - lhs.value;
      });
    }

    const result = seriesItems.slice(
      0,
      Math.min(sortInput.take, seriesItems.length),
    );
    console.log(result);
    return result;
  }

  countFileOfProject(id: string) {
    return this.prisma.file.count({
      where: {
        projectId: id,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.file.findUnique({
      where: {
        id: id,
      },
    });
  }

  updateCLOC(id: string, updateFileCLOCInput: UpdateFileCLOCInput) {
    return this.prisma.file.update({
      where: {
        id: id,
      },
      data: {
        CLOCInfo: updateFileCLOCInput.CLOC,
      },
    });
  }

  updateCYCLO(id: string, updateFileCYCLOInput: UpdateFileCYCLOInput) {
    return this.prisma.file.update({
      where: {
        id: id,
      },
      data: {
        CYCLOInfo: updateFileCYCLOInput.CYCLO,
      },
    });
  }

  updateGitCommits(
    id: string,
    updateFileGitCommitsInput: UpdateFileGitCommitsInput,
  ) {
    return this.prisma.file.update({
      where: {
        id: id,
      },
      data: {
        gitCommits: updateFileGitCommitsInput.gitCommits,
      },
    });
  }

  updateInclusions(
    id: string,
    updateFileInclusionsInput: UpdateFileInclusionsInput,
  ) {
    return this.prisma.file.update({
      where: {
        id: id,
      },
      data: {
        inclusions: updateFileInclusionsInput.inclusions,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
