import { Module } from '@nestjs/common';
import { FunctionsService } from './functions.service';
import { FunctionsResolver } from './functions.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { SearchResultUnionResolver } from '../SearchResultUnion.resolver';

@Module({
  providers: [
    FunctionsResolver,
    FunctionsService,
    PrismaService,
    SearchResultUnionResolver,
  ],
  exports: [FunctionsService],
})
export class FunctionsModule {}
