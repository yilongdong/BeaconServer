import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesResolver } from './files.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { ClassesModule } from '../classes/classes.module';
import { FunctionsModule } from '../functions/functions.module';
import { FilesClassesResolver } from './files-class.resolver';
import { FilesFunctionsResolver } from './files-functions.resolver';
import { SearchResultUnionResolver } from '../SearchResultUnion.resolver';

@Module({
  imports: [ClassesModule, FunctionsModule],
  providers: [
    FilesResolver,
    FilesClassesResolver,
    FilesFunctionsResolver,
    SearchResultUnionResolver,
    FilesService,
    PrismaService,
  ],
  exports: [FilesService],
})
export class FilesModule {}
