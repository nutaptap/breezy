import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";

const Tabs = (props) => {
  const { settings } = useContext(SettingsContext);

  return (
    <div>
      {settings.rain && (
        <div>Rain {props.data.rain ? `${props.data.rain} mm` : "0 mm"}</div>
      )}
      {settings.humidity && <div>Humidity {props.data.main.humidity} %</div>}
      {settings.wind && <div>Wind {props.data.wind.speed} m/s</div>}
      {settings.pollution && (
        <div>Pollution {props.pollution.list[0].main.aqi} \ 5</div>
      )}
    </div>
  );
};

export default Tabs;
