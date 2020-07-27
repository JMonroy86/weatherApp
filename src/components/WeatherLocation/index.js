import React from 'react'
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => {
  return (
    <>
      <Location city={"Chile"}/>
      <WeatherData/>
    </>
  )
}
export default WeatherLocation;
