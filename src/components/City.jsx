import Tabs from "./Tabs";

const City = (props) => {
  return (
    <div className="city-container">
      <div>
        <h2>{props.data.name}</h2>
        <p>{props.data.main.temp} °</p>
      </div>
      <Tabs data={props.data} pollution={props.pollution} />
    </div>
  );
};

export default City;
