import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Weather {
  @Field({ description: 'temperate in graus celsius' })
  temperature: string;

  @Field({ description: 'weather description',nullable: true })
  description?: string;
}
