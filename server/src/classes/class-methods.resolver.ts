import { FunctionsService } from '../functions/functions.service';
import { Parent, Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('Class')
export class ClassMethodsResolver {
  constructor(private functionsService: FunctionsService) {}

  @ResolveField()
  async methods(@Parent() cxxclass) {
    return this.functionsService.findManyByClassID(cxxclass.id);
  }
}
