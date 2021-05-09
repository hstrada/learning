import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Weather } from './model/weather.model';
import { WeatherService } from './weather.service';

@Resolver((of) => Weather)
export class WeatherResolver {
  constructor(private weatherService: WeatherService) {}

  @Query((returns) => Weather)
  async weather(@Args('city') city: string): Promise<Weather> {
    const weather = await this.weatherService.getWeather(city);
    if (!weather) {
      throw new NotFoundException(city);
    }
    return weather;
  }
}
