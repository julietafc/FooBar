function Tap(props) {
  let beerImg = props.tap.beer.toLowerCase().split(" ").join("") + ".png";

  const styleBeerLabel = {
    width: "100px",
    aspectRatio: "1",

    position: "relative",
    transition: ".8s",
    backgroundImage: `url(./src/assets/${beerImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "50%",
    color: "white",
  };

  const styleBeerLevel = {
    position: "absolute",
    width: "36%",
    height: "130%",
    transformOrigin: "bottom right",
    bottom: "100%",
    left: "50%",
    border: "solid 2px black",
    borderRadius: "8px 8px 0 0",
    overflowY: "hidden",
    background: "linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(207,141,55,0) 50%)",
    transform: "translateX(-50%)",
  };

  const styleLevel = {
    position: "absolute",
    width: "30%",
    height: "125%",
    transformOrigin: "bottom right",
    bottom: "100%",
    left: "50%",
    transform: "scaleY(" + props.tap.level * 0.00041 + ") translateX(-50%)",
    transition: "transform 1s",
    backgroundColor: "goldenrod",
    borderTop: "solid 3px white",
    borderRadius: "5px 5px 0 0",
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
    <div className="tap-Container">
      <div className="beer-label" style={styleBeerLabel}>
        <div className="beer-level" style={styleLevel}></div>
        <div className="beer-level-container" style={styleBeerLevel}></div>
        <div className="bulb" style={styleBulbUse}></div>
        <div className="bulb" style={styleBulbCH}></div>
      </div>
      <p>{props.tap.beer}</p>
      <p>{props.tap.level}</p>
      <p style={styleP}>{props.bartenders.filter((person) => person.usingTap === props.tap.id).length > 0 ? props.bartenders.filter((person) => person.usingTap === props.tap.id)[0].name : "nobody"}</p>
    </div>
  );
}

export default function Taps(props) {
  const style = {
    display: "flex",
    padding: ".5rem 1rem",
    gap: "1rem",
    height: "60vh",
    alignItems: "flex-end",
  };

  const taps = [...props.taps].map((tap, i) => <Tap key={"tap" + (i + 1)} bartenders={props.bartenders} tap={tap} />);

  return <div style={style}>{taps}</div>;
}
