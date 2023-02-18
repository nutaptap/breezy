import { useContext } from "react";
import SettingsContext from "../context/SettingsContext";

const TabsSettings = () => {
  const { settings, updateSetting } = useContext(SettingsContext);

  const handleChange = (event) => {
    const { id, checked } = event.target;
    updateSetting(id, checked);
  };

  return (
    <form>
      <input
        type="checkbox"
        id="rain"
        onChange={handleChange}
        defaultChecked={settings.rain}
      />
      <label htmlFor="rain">Rain</label>
      <input
        type="checkbox"
        id="humidity"
        onChange={handleChange}
        defaultChecked={settings.humidity}
      />
      <label htmlFor="humidity">Humidity</label>
      <input
        type="checkbox"
        id="wind"
        onChange={handleChange}
        defaultChecked={settings.wind}
      />
      <label htmlFor="wind">Wind</label>
      <input
        type="checkbox"
        id="pollution"
        onChange={handleChange}
        defaultChecked={settings.pollution}
      />
      <label htmlFor="pollution">Pollution</label>
    </form>
  );
};

export default TabsSettings;
