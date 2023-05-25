import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { FilesService } from './files.service';
import {
  CreateFileInput,
  UpdateFileCLOCInput,
  UpdateFileCYCLOInput,
  UpdateFileGitCommitsInput,
  UpdateFileInclusionsInput,
} from '../graphql';

@Resolver('File')
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  @Mutation('createFile')
  create(@Args('createFileInput') createFileInput: CreateFileInput) {
    return this.filesService.create(createFileInput);
  }

  @Query('files')
  findAll() {
    return this.filesService.findAll();
  }

  @Query('file')
  findOne(@Args('id') id: string) {
    return this.filesService.findOne(id);
  }
  @ResolveField()
  async callgraph(@Parent() file) {
    return this.filesService.callgraphOfFile(file.id);
  }

  @Mutation('updateFileCLOC')
  updateCLOC(
    @Args('updateFileCLOCInput') updateFileCLOCInput: UpdateFileCLOCInput,
  ) {
    return this.filesService.updateCLOC(
      updateFileCLOCInput.id,
      updateFileCLOCInput,
    );
  }

  @Mutation('updateFileCLOC')
  updateCYCLO(
    @Args('updateFileCYCLOInput') updateFileCYCLOInput: UpdateFileCYCLOInput,
  ) {
    return this.filesService.updateCYCLO(
      updateFileCYCLOInput.id,
      updateFileCYCLOInput,
    );
  }

  @Mutation('updateFileGitCommits')
  updateGitCommits(
    @Args('updateFileGitCommitsInput')
    updateFileGitCommitsInput: UpdateFileGitCommitsInput,
  ) {
    return this.filesService.updateGitCommits(
      updateFileGitCommitsInput.id,
      updateFileGitCommitsInput,
    );
  }

  @Mutation('updateFileInclusions')
  updateInclusions(
    @Args('updateFileInclusionsInput')
    updateFileInclusionsInput: UpdateFileInclusionsInput,
  ) {
    return this.filesService.updateInclusions(
      updateFileInclusionsInput.id,
      updateFileInclusionsInput,
    );
  }

  @Mutation('removeFile')
  remove(@Args('id') id: number) {
    return this.filesService.remove(id);
  }
}
