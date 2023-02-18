const Tabs = (props) => {
  return (
    <div>
      <div>Rain {props.data.rain ? `${props.data.rain} mm` : "0 mm"}</div>
      <div>Humidity {props.data.main.humidity} %</div>
      <div>Wind {props.data.wind.speed} m/s</div>
      <div>Pollution {props.pollution.list[0].main.aqi} \ 5</div>
    </div>
  );
};

export default Tabs;
