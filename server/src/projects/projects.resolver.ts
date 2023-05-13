import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { CreateProjectInput, UpdateProjectInput } from '../graphql';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

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

  // @Mutation('addPrincipal')
  // addPrincipals(
  //   @Args('addPrincipalForProjectInput')
  //   addPrincipalForProjectInput: AddPrincipalForProjectInput,
  // ) {
  //   const { projectID, principalID } = addPrincipalForProjectInput;
  //   return this.projectsService.addPrincipal(projectID, principalID);
  // }
}
