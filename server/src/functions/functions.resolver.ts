import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FunctionsService } from './functions.service';
import { CreateFunctionInput, UpdateFunctionInput } from '../graphql';

@Resolver('Function')
export class FunctionsResolver {
  constructor(private readonly functionsService: FunctionsService) {}

  @Mutation('createFunction')
  create(
    @Args('createFunctionInput') createFunctionInput: CreateFunctionInput,
  ) {
    return this.functionsService.create(createFunctionInput);
  }

  @Query('functions')
  findAll() {
    return this.functionsService.findAll();
  }

  @Query('function')
  findOne(@Args('id') id: string) {
    return this.functionsService.findOne(id);
  }

  @Mutation('updateFunction')
  update(@Args('updateFunctionInput') updateFunctionInput: UpdateFunctionInput) {
    return this.functionsService.update(updateFunctionInput.id, updateFunctionInput);
  }

  @Mutation('removeFunction')
  remove(@Args('id') id: string) {
    return this.functionsService.remove(id);
  }
}
