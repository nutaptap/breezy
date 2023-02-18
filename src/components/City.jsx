import { useEffect } from "react";

const City = () => {
  const apiKey = "4ac0db577dcd1464b28232be4b9ad3d3";
  const name = "Barcelona";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, [name]);

  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default City;
