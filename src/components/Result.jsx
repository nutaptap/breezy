import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import City from "./City";

const Result = () => {
  const { id } = useParams();
  const apiKey = "4ac0db577dcd1464b28232be4b9ad3d3";

  const [weatherData, setWeatherData] = useState(null);
  const [airData, setAirData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      if (weatherData) {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${apiKey}`
        );
        const data = await response.json();
        setAirData(data);
        console.log(data);
      }
    };

    fetchData();
  }, [weatherData]);

  if (!airData) {
    return <p>Loading...</p>;
  }

  return <City data={weatherData} pollution={airData} />;
};

export default Result;
