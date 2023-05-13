import { ProjectsService } from '../projects/projects.service';
import { Parent, Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('User')
export class UsersProjectResolver {
  constructor(private projectsService: ProjectsService) {}

  @ResolveField()
  async projects(@Parent() user) {
    console.log(user.projectIDs);
    return this.projectsService.findManyByIDs(user.projectIDs);
  }
}
