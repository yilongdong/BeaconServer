import { Injectable } from '@nestjs/common';
import { ProjectDumpFormat } from './proto/Project';
import {
  ClocInfo,
  CycloInfo,
  FileInfo,
  GitInfo,
  InclusionInfo,
  CallGraph,
} from './proto/File';
import {
  CXXAccess,
  CXXBase,
  CXXClass,
  CXXClassRelation,
  CXXField,
  CXXFunction,
  CXXParam,
  CXXType,
  Location,
  CXXFunctionRelation,
  CXXFunctionRelation_RelationKind,
} from './proto/Code';
import { PrismaService } from '../../prisma/prisma.service';
import * as path from 'path';
import * as fs from 'fs';
import { Prisma } from '.prisma/client';
import { Access } from '@prisma/client';
import { json } from 'express';
import { connect } from 'rxjs';

class Convertor {
  static toGitCommit(gitCommit: GitInfo): Prisma.GitCommitCreateInput {
    if (gitCommit == undefined) return undefined;
    return {
      time: gitCommit.date,
    };
  }

  static toInclusion(inclusion: InclusionInfo): Prisma.InclusionCreateInput {
    if (inclusion == undefined) return undefined;
    return {
      path: inclusion.path,
      line: inclusion.line,
      column: inclusion.column,
    };
  }

  static toCLOC(cloc: ClocInfo): Prisma.CLOCCreateInput {
    if (cloc == undefined) return undefined;
    return {
      language: cloc.language,
      blank: cloc.blank,
      comment: cloc.comment,
      code: cloc.code,
    };
  }

  static toCYCLO(cyclo: CycloInfo): Prisma.CYCLOCreateInput {
    if (cyclo == undefined) return undefined;
    return {
      functionName: cyclo.functionName,
      lineOfCode: cyclo.lineOfCode,
      cyclo: cyclo.cyclomaticComplexity,
      tokenCount: cyclo.tokenCount,
      parameterCount: cyclo.parameterCount,
    };
  }

  static toBaseCreateInput(cxxBase: CXXBase): Prisma.BaseCreateInput {
    if (cxxBase == undefined) return undefined;
    return {
      type: Convertor.toTypeCreateInput(cxxBase?.type),
      access: Convertor.toAccess(cxxBase?.access),
      isVirtual: cxxBase?.isVirtual,
    };
  }

  static toFieldCreateInput(cxxField: CXXField): Prisma.CXXFieldCreateInput {
    if (cxxField == undefined) return undefined;
    return {
      type: Convertor.toTypeCreateInput(cxxField?.type),
      name: cxxField.name,
      access: Convertor.toAccess(cxxField.access),
    };
  }

  static toLocationCreateInput(location: Location): Prisma.LocationCreateInput {
    if (location == undefined) return undefined;
    return {
      path: location?.path,
      line: location?.line,
      column: location?.column,
    };
  }

  static toClassRelationCreateInput(
    clsRelation: CXXClassRelation,
  ): Prisma.ClassRelationCreateInput {
    if (clsRelation == undefined) return undefined;
    return {
      from: clsRelation.from,
      to: clsRelation.to,
    };
  }

  static toClassCreateInput(cxxClass: CXXClass): Prisma.ClassCreateInput {
    if (cxxClass == undefined) return undefined;
    return {
      bases: cxxClass?.bases?.map?.(Convertor.toBaseCreateInput),
      fields: cxxClass?.fields?.map?.(Convertor.toFieldCreateInput),
      isStruct: cxxClass?.isStruct,
      location: Convertor.toLocationCreateInput(cxxClass?.location),
      methods: {
        connectOrCreate: cxxClass?.methods?.map?.(
          Convertor.toFunctionCreateOrConnectInput,
        ),
      },
      name: cxxClass?.name,
      namespace: cxxClass?.namespace,
      relations: cxxClass?.relations?.map?.(
        Convertor.toClassRelationCreateInput,
      ),
    };
  }

  static toAccess(cxxAccess: CXXAccess): Access {
    if (cxxAccess == undefined) return undefined;
    switch (cxxAccess.name) {
      case 'PUBLIC': {
        return Access.PUBLIC;
      }
      case 'PRIVATE': {
        return Access.PRIVATE;
      }
      case 'PROTECTED': {
        return Access.PROTECTED;
      }
      default: {
        return Access.PRIVATE;
      }
    }
  }

  static toTypeCreateInput(cxxType: CXXType): Prisma.TypeCreateInput {
    if (cxxType == undefined) return undefined;
    return {
      name: cxxType?.name,
      associatedType: cxxType?.associatedTypes,
    };
  }
  static toParamCreateInput(cxxParam: CXXParam): Prisma.ParamCreateInput {
    if (cxxParam == undefined) return undefined;
    return {
      name: cxxParam?.name,
      type: Convertor.toTypeCreateInput(cxxParam?.type),
    };
  }

  static toFunctionCreateInput(
    cxxFunction: CXXFunction,
  ): Prisma.FunctionCreateInput {
    if (cxxFunction == undefined) return undefined;
    return {
      access: Convertor.toAccess(cxxFunction.access),
      fullname: cxxFunction?.fullName,
      isConstructor: cxxFunction?.isConstructor,
      isDestructor: cxxFunction?.isDestructor,
      isPureVirtual: cxxFunction?.isPureVirtual,
      isStatic: cxxFunction?.isStatic,
      isVirtual: cxxFunction?.isVirtual,
      name: cxxFunction?.name,
      params: cxxFunction?.params?.map?.(Convertor.toParamCreateInput),
      returnType: Convertor.toTypeCreateInput(cxxFunction.returnType),
    };
  }

  static toFunctionCreateOrConnectInput(
    cxxFunction: CXXFunction,
  ): Prisma.FunctionCreateOrConnectWithoutFileInput {
    return {
      where: {
        fullname: cxxFunction?.fullName,
      },
      create: Convertor.toFunctionCreateInput(cxxFunction),
    };
  }

  static transform<From, To>(
    items: From[] | undefined,
    callback: (value: From, index: number, array: From[]) => To,
  ): To[] | undefined {
    if (items == undefined) return undefined;
    return items.map(callback);
  }
  // static toFunctionRelationCreateWithoutFileInput(
  //   cxxFunctionRelation: CXXFunctionRelation,
  // ): Prisma.FunctionRelationCreateWithoutFileInput {
  //   return {
  //     caller: {
  //       connectOrCreate: Convertor.toFunctionCreateOrConnectInput(
  //         cxxFunctionRelation.from,
  //       ),
  //     },
  //     callee: {
  //       connectOrCreate: Convertor.toFunctionCreateOrConnectInput(
  //         cxxFunctionRelation.to,
  //       ),
  //     },
  //   };
  // }
  static toFileCreateInput(fileInfo: FileInfo): Prisma.FileCreateInput {
    if (fileInfo == undefined) return undefined;
    console.log(`create file input = ${fileInfo.path}`);
    const functionList = fileInfo?.tuInfo?.functionList?.filter(
      (func: CXXFunction) => {
        // return func.className == undefined;
        return false;
      },
    );

    fileInfo?.tuInfo?.classList.forEach((cls) => {
      functionList.push(...cls.methods);
    });

    return {
      path: fileInfo.path,
      filename: path.basename(fileInfo.path),
      directory: path.dirname(fileInfo.path),
      gitCommits: fileInfo?.gitInfo?.map?.(Convertor.toGitCommit),
      inclusions: fileInfo?.inclusions.map?.(Convertor.toInclusion),
      CLOCInfo: Convertor.toCLOC(fileInfo?.clocInfo),
      CYCLOInfo: fileInfo?.cycloInfoList?.map?.(Convertor.toCYCLO),
      classes: {
        create: fileInfo?.tuInfo?.classList.map?.(Convertor.toClassCreateInput),
      },
      functions: {
        connectOrCreate: functionList?.map?.(
          Convertor.toFunctionCreateOrConnectInput,
        ),
      },
    };
  }

  static toUserCreateInput(name: string): Prisma.UserCreateInput {
    return {
      name: name,
      role: 'USER',
    };
  }

  static toProjectCreateInput(
    projectDumpFormat: ProjectDumpFormat,
  ): Prisma.ProjectCreateInput {
    if (projectDumpFormat == undefined) return undefined;
    const username = 'yilongdong';
    const result: Prisma.ProjectCreateInput = {
      // name: projectDumpFormat?.name,
      name: 'CXXScanner',
      principals: {
        connectOrCreate: [
          {
            where: {
              name: username,
            },
            create: Convertor.toUserCreateInput(username),
          },
        ],
      },
      files: {
        create: projectDumpFormat?.fileInfoList?.map?.(
          Convertor.toFileCreateInput,
        ),
      },
    };
    fs.writeFile(
      '/Users/dongyilong/WebstormProjects/stars-books-admin/server/create-input.json',
      JSON.stringify(result),
      (err) => {
        if (err) {
          throw err;
        }
        console.log('JSON data is saved.');
      },
    );
    return result;
  }
}

@Injectable()
export class UploadService {
  constructor(private prisma: PrismaService) {}

  debug(projectDumpFormat: ProjectDumpFormat) {
    // const filePathList = projectDumpFormat.fileInfoList.map(
    //   (fileInfo, index) => {
    //     return fileInfo.path;
    //   },
    // );
    // const countResult = {};
    // filePathList.map((path) => {
    //   countResult[path] = countResult[path] + 1 || 1;
    // });
    // console.log(JSON.stringify(countResult, null, 4));
  }

  tobatchList(relations: CXXFunctionRelation[], batchSize) {
    const batchRelations: CXXFunctionRelation[][] = [];
    for (let i = 0; i < relations.length; ) {
      batchRelations.push(relations.slice(i, (i += batchSize)));
    }
    return batchRelations;
  }

  async store(projectDumpFormat: ProjectDumpFormat) {
    this.debug(projectDumpFormat);

    this.prisma.project.create({
      data: Convertor.toProjectCreateInput(projectDumpFormat),
      select: {
        id: true,
        files: {
          select: {
            path: true,
          },
        },
      },
    });
    // 暂时屏蔽调用图上传，因为数据没有过滤，数据量太大导致上传速度太慢了
    // for (let j = 0; j < projectDumpFormat.fileInfoList.length; ++j) {
    //   const fileInfo = projectDumpFormat.fileInfoList[j];
    //   const relations = fileInfo?.tuInfo?.callGraph?.relations || [];
    //   if (relations.length == 0) return;
    //   const batchRelation = this.tobatchList(relations, 500);
    //
    //   for (let i = 0; i < batchRelation.length; ++i) {
    //     console.log(
    //       `callgraph [begin] path = ${fileInfo.path} relations size = ${batchRelation[i].length}`,
    //     );
    //     await this.prisma.file.update({
    //       where: {
    //         path: fileInfo?.path,
    //       },
    //       data: {
    //         callgraph: {
    //           create: batchRelation[i].map(
    //             (rel): Prisma.FunctionRelationCreateWithoutFileInput => {
    //               return {
    //                 from: rel.from.fullName,
    //                 to: rel.to.fullName,
    //                 type: rel.kind.toString(),
    //               };
    //             },
    //           ),
    //         },
    //       },
    //     });
    //     console.log(
    //       `callgraph [end] path = ${fileInfo.path} relations size = ${batchRelation[i].length}`,
    //     );
    //   }
    // }
  }
}
