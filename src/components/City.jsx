import Tabs from "./Tabs";
import Search from "./Search";

const City = (props) => {
  return (
    <>
      <Search />
      <div className="city-container">
        <div>
          <h2>{props.data.name}</h2>
          <p>{props.data.main.temp} °</p>
        </div>
        <Tabs data={props.data} pollution={props.pollution} />
      </div>
    </>
  );
};

export default City;
