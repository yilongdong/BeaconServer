import { FilesService } from '../files/files.service';
import { Parent, Resolver, ResolveField, Args, Query } from '@nestjs/graphql';
import { SeriesItem, SortInput, TopType } from '../graphql';

@Resolver('Project')
export class ProjectFileResolver {
  constructor(private filesService: FilesService) {}

  @ResolveField()
  async files(@Parent() project) {
    return this.filesService.findManyByProjectID(project.id);
  }

  @Query('topFile')
  async topFile(
    @Args('projectID') projectID: string,
    @Args('sortInput') sortInput: SortInput,
  ) {
    this.filesService.topsOfLOC(projectID, sortInput);
  }

  @ResolveField()
  async tops(
    @Parent() project,
    @Args('sortInput') sortInput: SortInput,
    @Args('type') type: TopType,
  ) {
    if (type == TopType.LOC) {
      return this.filesService.topsOfLOC(project.id, sortInput);
    } else if (type == TopType.GIT) {
      return this.filesService.topsOfGit(project.id, sortInput);
    } else if (type == TopType.CLASS) {
      return [];
    } else {
      return [];
    }
  }
}
