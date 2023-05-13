import { FilesService } from '../files/files.service';
import { Parent, Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('Project')
export class ProjectFileResolver {
  constructor(private filesService: FilesService) {}

  @ResolveField()
  async files(@Parent() project) {
    return this.filesService.findManyByProjectID(project.id);
  }
}
