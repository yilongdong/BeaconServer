import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersProjectResolver } from './users-project.resolver';
import { PrismaService } from '../../prisma/prisma.service';
import { ProjectsModule } from '../projects/projects.module';
import { ProjectsService } from '../projects/projects.service';
@Module({
  imports: [ProjectsModule],
  providers: [UsersResolver, UsersProjectResolver, UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
