import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './classes.resolver';
import { FunctionsModule } from '../functions/functions.module';
import { PrismaService } from '../../prisma/prisma.service';
import { ClassMethodsResolver } from './class-methods.resolver';
import { SearchResultUnionResolver } from '../SearchResultUnion.resolver';
@Module({
  imports: [FunctionsModule],
  providers: [
    ClassesResolver,
    ClassMethodsResolver,
    SearchResultUnionResolver,
    ClassesService,
    PrismaService,
  ],
  exports: [ClassesService],
})
export class ClassesModule {}
