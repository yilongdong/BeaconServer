import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { PrismaService } from '../../prisma/prisma.service';
import { UploadController } from './upload.controller';

@Module({
  controllers: [UploadController],
  providers: [UploadService, PrismaService],
  exports: [UploadService],
})
export class UploadModule {}
