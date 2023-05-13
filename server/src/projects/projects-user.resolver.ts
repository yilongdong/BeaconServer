import { UsersService } from '../users/users.service';
import { Parent, Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('Project')
export class ProjectUserResolver {
  constructor(private usersService: UsersService) {}

  @ResolveField()
  async principals(@Parent() project) {
    return this.usersService.findManyByIDs(project.principalIDs);
  }
}
