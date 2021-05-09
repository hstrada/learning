import { HttpModule, Module } from '@nestjs/common';
import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';

@Module({
  imports: [HttpModule],
  providers: [WeatherResolver, WeatherService],
})
export class WeatherModule {}
