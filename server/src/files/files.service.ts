import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CreateFileInput,
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
        callgraph: [],
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
