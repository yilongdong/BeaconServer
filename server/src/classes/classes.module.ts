import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesResolver } from './classes.resolver';
import { FunctionsModule } from '../functions/functions.module';
import { PrismaService } from '../../prisma/prisma.service';
import { ClassMethodsResolver } from './class-methods.resolver';
@Module({
  imports: [FunctionsModule],
  providers: [
    ClassesResolver,
    ClassMethodsResolver,
    ClassesService,
    PrismaService,
  ],
  exports: [ClassesService],
})
export class ClassesModule {}
