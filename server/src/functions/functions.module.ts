import { Module } from '@nestjs/common';
import { FunctionsService } from './functions.service';
import { FunctionsResolver } from './functions.resolver';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [FunctionsResolver, FunctionsService, PrismaService],
  exports: [FunctionsService],
})
export class FunctionsModule {}
