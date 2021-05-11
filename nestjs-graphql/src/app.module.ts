import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/common/http';
import { GraphQLModule } from '@nestjs/graphql';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    HttpModule,
    WeatherModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
