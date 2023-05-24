import { FunctionsService } from '../functions/functions.service';
import { Parent, Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('File')
export class FilesFunctionsResolver {
  constructor(private functionsService: FunctionsService) {}

  @ResolveField()
  async functions(@Parent() file) {
    // await this.functionsService.findManyByFileID(file.id);
    // function和file联系没有建立，需要修改upload函数
    return [];
  }
}
