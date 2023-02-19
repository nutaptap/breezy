import TabsSettings from "./TabsSettings";
import UnitsSettings from "./UnitsSettings";

const Settings = () => {
  return (
    <div className="settings">
      <UnitsSettings />
      <TabsSettings />
    </div>
  );
};

export default Settings;
