import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './users/users.module';
import { ClassesModule } from './classes/classes.module';
import { FilesModule } from './files/files.module';
import { ProjectsModule } from './projects/projects.module';
import { FunctionsModule } from './functions/functions.module';
import { UploadModule } from './upload/upload.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    // BooksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql', './*.graphql'],
      // 关闭原来的 playground，使用 https://studio.apollographql.com/sandbox/explorer
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),
    UsersModule,
    ClassesModule,
    FilesModule,
    ProjectsModule,
    FunctionsModule,
    UploadModule,
  ],
})
export class AppModule {}
