export interface Weather {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: string[];
  minutely: string[];
  hourly: string[];
}
