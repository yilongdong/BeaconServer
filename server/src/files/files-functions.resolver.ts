import { FunctionsService } from '../functions/functions.service';
import { Parent, Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('File')
export class FilesClassesResolver {
  constructor(private functionsService: FunctionsService) {}

  @ResolveField()
  async functions(@Parent() file) {
    return this.functionsService.findManyByFileID(file.id);
  }
}
