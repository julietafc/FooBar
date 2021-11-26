import "./Bartender.scss";
import Taps from "../helpers/Taps/Taps";

export default function Bartender(props) {
  return (
    <div className="Bartender">
      <Taps bartenders={props.bartenders} taps={props.taps} />
      <h1>Content for Bartenders</h1>
    </div>
  );
}
