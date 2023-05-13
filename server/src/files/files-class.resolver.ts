import { ClassesService } from '../classes/classes.service';
import { Parent, Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('File')
export class FilesClassesResolver {
  constructor(private classesService: ClassesService) {}

  @ResolveField()
  async classes(@Parent() file) {
    return this.classesService.findManyByFileID(file.id);
  }
}
