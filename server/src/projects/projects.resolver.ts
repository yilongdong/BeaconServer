import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import {
  CreateProjectInput,
  PageInput,
  SearchEnum,
  UpdateProjectInput,
} from '../graphql';
import { PrismaService } from '../../prisma/prisma.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private prisma: PrismaService,
  ) {}
  @Mutation('createProject')
  create(@Args('createProjectInput') createProjectInput: CreateProjectInput) {
    return this.projectsService.create(createProjectInput);
  }

  @Query('projects')
  findAll() {
    return this.projectsService.findAll();
  }

  @Query('project')
  findOne(@Args('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @ResolveField()
  async search(
    @Parent() project,
    @Args('pageInput') pageInput: PageInput,
    @Args('text') text: string,
    @Args('type') type: SearchEnum,
  ) {
    if (type == SearchEnum.ClassAttrs) {
      return await this.projectsService.searchClassAttrs(
        project.id,
        pageInput,
        text,
      );
    } else if (type == SearchEnum.CLOC) {
      return await this.projectsService.searchCLOC(
        project.id,
        pageInput,
        text.length == 0 ? undefined : text,
      );
    } else if (type == SearchEnum.CYCLO) {
      return await this.projectsService.searchCYCLO(
        project.id,
        pageInput,
        text.length == 0 ? undefined : text,
      );
    }
  }

  @ResolveField()
  async fileCount(@Parent() project) {
    const result = await this.prisma.project.findUnique({
      where: {
        id: project.id,
      },
      select: {
        _count: {
          select: {
            files: true,
          },
        },
      },
    });
    return result._count.files;
  }
  @ResolveField()
  async userCount(@Parent() project) {
    const result = await this.prisma.project.findUnique({
      where: {
        id: project.id,
      },
      select: {
        _count: {
          select: {
            principals: true,
          },
        },
      },
    });
    return result._count.principals;
  }
  @ResolveField()
  async codeCount(@Parent() project) {
    const result = await this.prisma.file.findMany({
      where: {
        projectId: project.id,
      },
    });
    let lineOfCode = 0;
    result.forEach((file) => {
      lineOfCode +=
        file.CLOCInfo.code + file.CLOCInfo.blank + file.CLOCInfo.comment;
    });
    return lineOfCode;
  }
  @ResolveField()
  async classCount(@Parent() project) {
    const files = await this.prisma.file.findMany({
      where: {
        projectId: project.id,
      },
    });
    if (!files) {
      return 0;
    }
    const fileIDs = files.map((file) => file.id);
    const result = await this.prisma.class.aggregate({
      where: {
        fileId: {
          in: fileIDs,
        },
      },
      _count: true,
    });
    return result._count;
  }

  @Mutation('updateProject')
  update(@Args('updateProjectInput') updateProjectInput: UpdateProjectInput) {
    return this.projectsService.update(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation('removeProject')
  remove(@Args('id') id: string) {
    return this.projectsService.remove(id);
  }
}
