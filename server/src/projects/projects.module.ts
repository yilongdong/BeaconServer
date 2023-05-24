import { Module, forwardRef } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsResolver } from './projects.resolver';
import { ProjectUserResolver } from './projects-user.resolver';
import { ProjectFileResolver } from './projects-file.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersModule } from '../users/users.module';
import { FilesModule } from '../files/files.module';
import { SearchResultUnionResolver } from "../SearchResultUnion.resolver";

@Module({
  imports: [forwardRef(() => UsersModule), FilesModule],
  providers: [
    ProjectsResolver,
    ProjectUserResolver,
    ProjectFileResolver,
    SearchResultUnionResolver,
    ProjectsService,
    PrismaService,
  ],
  exports: [ProjectsService],
})
export class ProjectsModule {}
