import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, { description: 'Hola gql', name: 'SayHi' })
  helloWorld(): string {
    return 'Hola graphql';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber() {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'getRandomNumberFromZeroTo',
    description: 'Returns a random number from 0 to (default 10)',
  })
  gerRandomNumberFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 10,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
