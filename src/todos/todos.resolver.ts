import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  @Query(() => [String], {name: 'todos'})
  findAll() {
    return ['a', 'b', 'c', 'd'];
  }

  findOne() {
    return [];
  }

  createTodo() {}

  updateTodo() {}

  removeTodo() {}
}
