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
      <div>
        <input
          type="checkbox"
          id="rain"
          onChange={handleChange}
          defaultChecked={settings.rain}
          className="offscreen"
        />
        <label htmlFor="rain" className="switch"></label>
        <p>Rain</p>
      </div>
      <div>
        <input
          type="checkbox"
          id="humidity"
          onChange={handleChange}
          defaultChecked={settings.humidity}
          className="offscreen"
        />
        <label htmlFor="humidity" className="switch"></label>
        <p>Humidity</p>
      </div>
      <div>
        <input
          type="checkbox"
          id="wind"
          onChange={handleChange}
          defaultChecked={settings.wind}
          className="offscreen"
        />
        <label htmlFor="wind" className="switch"></label>
        <p>Wind</p>
      </div>
      <div>
        <input
          type="checkbox"
          id="pollution"
          onChange={handleChange}
          defaultChecked={settings.pollution}
          className="offscreen"
        />
        <label htmlFor="pollution" className="switch"></label>
        <p>Pollution</p>
      </div>
    </form>
  );
};

export default TabsSettings;
