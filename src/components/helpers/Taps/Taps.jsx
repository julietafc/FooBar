import TapBox from "../TapBox/TapBox";
import TapBoxV2 from "../TapBox/TapBoxV2";
function Tap(props) {
  let beerImg = props.tap.beer.toLowerCase().split(" ").join("") + ".png";
  const bartender = props.bartenders.filter((person) => person.usingTap === props.tap.id);

  const styleBeerLabel = {
    backgroundImage: `url(./src/assets/${beerImg})`,
  };

  const styleLevel = {
    transform: "scaleY(" + props.tap.level * 0.00041 + ") translateX(-50%)",
  };

  const styleP = {
    color: props.bartenders.filter((person) => person.usingTap === props.tap.id).length > 0 ? "white" : "red",
  };

  const styleBulbUse = {
    backgroundColor: props.tap.inUse ? "rgb(22, 235, 235)" : "rgb(47, 79, 79)",
    filter: props.tap.inUse ? "drop-shadow(0px 0px 8px rgb(22, 235, 235))" : "none",
  };

  const styleBulbCH = {
    backgroundColor: props.tap.level < 100 ? "rgb(224, 44, 44)" : "rgb(79, 47, 47)",
    filter: props.tap.level < 100 ? "drop-shadow(0px 0px 8px rgb(224, 44, 44))" : "none",
  };

  return (
    <div className="Tap">
      <div className="beer-label" style={styleBeerLabel}>
        <div className="beer-level" style={styleLevel}></div>
        <div className="beer-level-container"></div>
        <div className="bulb" style={styleBulbUse}></div>
        <div className="bulb" style={styleBulbCH}></div>
      </div>
      <p>{props.tap.beer}</p>
      <p>{props.tap.level}</p>
      <p style={styleP}>{bartender.length > 0 ? bartender[0].name : "nobody"}</p>
    </div>
  );
}

export default function Taps(props) {
  const style = {
    width: "100%",
    display: "flex",
    padding: ".5rem 1rem",
    gap: "1rem",

    alignItems: "flex-end",
  };

  const taps = [...props.taps].map((tap, i) => <TapBoxV2 key={"tap" + (i + 1)} bartenders={props.bartenders} tap={tap} />);

  return <div style={style}>{taps}</div>;
}
