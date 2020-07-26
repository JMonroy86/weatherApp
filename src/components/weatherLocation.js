import React from 'react'
import Location from './Location';
import WeatherData from './weatherData';

const WeatherLocation = () => {
  return (
    <>
      <Location city={"Chile"}/>
      <WeatherData/>
    </>
  )
}
export default WeatherLocation;
