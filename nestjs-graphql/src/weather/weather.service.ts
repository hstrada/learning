import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private readonly http: HttpService) {}

  async getWeather(city: string): Promise<any> {
    return this.http
      .get(`https://goweather.herokuapp.com/weather/${city}`)
      .pipe(map((response) => response.data));
  }
}
