import { Parent, Resolver, ResolveField, Args, Query } from '@nestjs/graphql';
import { SeriesItem, SortInput, TopType } from './graphql';

@Resolver('SearchResult')
export class SearchResultUnionResolver {
  @ResolveField()
  __resolveType(value) {
    if (value.name && value.coupling && value.method && value.field) {
      return 'ClassAttrs';
    }
    if (value.CLOCInfo && value.path) {
      return 'FileLOC';
    }
    if (value.CYCLOInfo && value.path && value.filename) {
      return 'FileCYCLO';
    }
    return null;
  }
}
