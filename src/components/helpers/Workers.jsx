import "./Workers.scss";
import Subheading from "./Subheading";

export default function Workers(props) {
  const employees = props.bartenders;
  //React can "forEach" on it's own with map
  const employeesMap = employees.map((person, i) => (
    <div className="emp" key={i}>
      {" "}
      <p>{person.name}</p> <img src={"/assets/" + person.name.toLowerCase() + ".png"} />
    </div>
  ));

  return (
    <div className="workers">
      <Subheading label="Employees on duty" />
      <ul>{employeesMap}</ul>
    </div>
  );
}
