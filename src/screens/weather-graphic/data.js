import { WeatherDescription } from './enums';

export default [
  {
    day: "Monday",
    description: WeatherDescription.PARTLY_CLOUDY,
    highTemp: 50,
    humidity: 30,
    lowTemp: 39,
    chanceOfRain: 30
  },
  {
    day: "Tuesday",
    description: WeatherDescription.RAIN,
    highTemp: 55,
    humidity: 65,
    lowTemp: 42,
    chanceOfRain: 90
  },
  {
    day: "Wednesday",
    description: WeatherDescription.RAIN,
    highTemp: 56,
    humidity: 60,
    lowTemp: 43,
    chanceOfRain: 60
  },
  {
    day: "Thursday",
    description: WeatherDescription.CLOUDY,
    highTemp: 48,
    humidity: 50,
    lowTemp: 32,
    chanceOfRain: 20
  },
  {
    day: "Friday",
    description: WeatherDescription.SUNNY,
    highTemp: 39,
    humidity: 40,
    lowTemp: 28,
    chanceOfRain: 0
  },
  {
    day: "Saturday",
    description: WeatherDescription.PARTLY_CLOUDY,
    highTemp: 36,
    humidity: 50,
    lowTemp: 25,
    chanceOfRain: 20
  },
  {
    day: "Sunday",
    description: WeatherDescription.SUNNY,
    highTemp: 40,
    humidity: 30,
    lowTemp: 32,
    chanceOfRain: 0
  }
];