import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { ProjectDumpFormat } from './proto/Project';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('beacon-model')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadService.store(
      ProjectDumpFormat.decode(file.buffer, file.buffer.length),
    );
  }
}
