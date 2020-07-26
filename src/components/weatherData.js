import React from 'react'
import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';

const WeatherData = () => {
  return (
    <>
      <WeatherTemperature />
      <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </>
  )
}
export default WeatherData;