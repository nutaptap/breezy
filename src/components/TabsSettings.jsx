const TabsSettings = () => {
  return (
    <form>
      <input type="checkbox" id="rain" />
      <label htmlFor="rain">Rain</label>
      <input type="checkbox" id="humidity" />
      <label htmlFor="humidity">Humidity</label>
      <input type="checkbox" id="wind" />
      <label htmlFor="wind">Wind</label>
      <input type="checkbox" id="pollution" />
      <label htmlFor="pollution">Pollution</label>
    </form>
  );
};

export default TabsSettings;
