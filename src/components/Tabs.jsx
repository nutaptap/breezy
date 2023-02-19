import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";

const Tabs = (props) => {
  const { settings } = useContext(SettingsContext);

  return (
    <div>
      {settings.rain && (
        <div>
          RAIN {props.data.rain ? `${props.data.rain["1h"]} mm` : "0 mm"}
        </div>
      )}
      {settings.humidity && <div>HUMIDITY {props.data.main.humidity} %</div>}
      {settings.wind && <div>WIND {props.data.wind.speed} m/s</div>}
      {settings.pollution && (
        <div>POLLUTION {props.pollution.list[0].main.aqi} \ 5</div>
      )}
    </div>
  );
};

export default Tabs;
