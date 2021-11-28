import "./TapBox.scss";
export default function TapBox(props) {
  let beerImg = props.tap.beer.toLowerCase().split(" ").join("") + ".png";
  const level = 151 - (props.tap.level * 151) / 2500;
  const bartender = props.bartenders.filter((person) => person.usingTap === props.tap.id);

  const styleUse = {
    fill: props.tap.inUse ? "#21e876be" : "url(#linear-gradient-6)",
    filter: props.tap.inUse ? "drop-shadow(0px 0px 10px #21e876)" : "none",
  };

  const styleChange = {
    fill: props.tap.level < 50 ? "#f42a2abe" : "url(#linear-gradient-4)",
    filter: props.tap.level < 50 ? "drop-shadow(0px 0px 10px #f42a2a)" : "none",
  };

  return (
    <div className="svg-wrapper">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 151.49 250">
        <defs>
          <linearGradient id="linear-gradient" x1="1.95" y1="122.39" x2="151.04" y2="122.39" gradientUnits="userSpaceOnUse">
            <stop offset="0.01" stopColor="#9e005d" />
            <stop offset="0.07" stopColor="#a90461" stopOpacity="0.97" />
            <stop offset="0.13" stopColor="#ca116d" stopOpacity="0.88" />
            <stop offset="0.17" stopColor="#ed1e79" stopOpacity="0.79" />
            <stop offset="0.23" stopColor="#d81671" stopOpacity="0.85" />
            <stop offset="0.36" stopColor="#b70966" stopOpacity="0.93" />
            <stop offset="0.55" stopColor="#a3025f" stopOpacity="0.99" />
            <stop offset="1" stopColor="#9e005d" />
          </linearGradient>
          <clipPath id="clip-path">
            <rect id="mask" className="cls-1" x="121.49" y="43.39" width="17" height="157" rx="8.5" />
          </clipPath>
          <linearGradient id="linear-gradient-2" x1="119.02" y1="123.39" x2="140.97" y2="123.39" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.31" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="0.35" stopColor="#fff" />
            <stop offset="0.4" stopColor="#fff" stopOpacity="0.76" />
            <stop offset="0.47" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="0.54" stopColor="#fff" stopOpacity="0.46" />
            <stop offset="0.61" stopColor="#fff" stopOpacity="0.34" />
            <stop offset="0.69" stopColor="#fff" stopOpacity="0.25" />
            <stop offset="0.8" stopColor="#fff" stopOpacity="0.19" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip-path-2">
            <rect className="cls-1" x="12.59" y="43.39" width="90" height="90" rx="11.71" />
          </clipPath>
          <linearGradient id="linear-gradient-3" x1="6.68" y1="88.39" x2="95.68" y2="88.39" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.02" stopColor="#fff" stopOpacity="0.04" />
            <stop offset="0.04" stopColor="#fff" stopOpacity="0.13" />
            <stop offset="0.07" stopColor="#fff" stopOpacity="0.29" />
            <stop offset="0.11" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="0.15" stopColor="#fff" stopOpacity="0.77" />
            <stop offset="0.15" stopColor="#fff" stopOpacity="0.79" />
            <stop offset="0.16" stopColor="#fff" stopOpacity="0.77" />
            <stop offset="0.24" stopColor="#fff" stopOpacity="0.59" />
            <stop offset="0.32" stopColor="#fff" stopOpacity="0.43" />
            <stop offset="0.4" stopColor="#fff" stopOpacity="0.3" />
            <stop offset="0.49" stopColor="#fff" stopOpacity="0.19" />
            <stop offset="0.59" stopColor="#fff" stopOpacity="0.11" />
            <stop offset="0.69" stopColor="#fff" stopOpacity="0.05" />
            <stop offset="0.82" stopColor="#fff" stopOpacity="0.01" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="linear-gradient-4" x1="76.58" y1="14.64" x2="94.58" y2="14.64" gradientUnits="userSpaceOnUse">
            <stop offset="0.3" stopColor="#7f2121" />
            <stop offset="0.37" stopColor="#7f2121" stopOpacity="0.93" />
            <stop offset="1" stopColor="#7f2121" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="linear-gradient-5" x1="76.08" y1="28.89" x2="95.08" y2="28.89" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#666" />
            <stop offset="0.18" stopColor="#a0a0a0" />
            <stop offset="0.34" stopColor="#ccc" />
            <stop offset="0.46" stopColor="#e8e8e8" />
            <stop offset="0.53" stopColor="#f2f2f2" />
            <stop offset="0.98" stopColor="#666" />
          </linearGradient>
          <linearGradient id="linear-gradient-6" x1="30.58" y1="14.64" x2="48.58" y2="14.64" gradientUnits="userSpaceOnUse">
            <stop offset="0.3" stopColor="#105b30" />
            <stop offset="0.37" stopColor="#105b30" stopOpacity="0.93" />
            <stop offset="1" stopColor="#105b30" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="linear-gradient-7" x1="30.08" y1="28.89" x2="49.08" y2="28.89" xlinkHref="#linear-gradient-5" />
        </defs>
        <g className="box-container" transform="translate(0 35)">
          <g id="box">
            <rect className="cls-2" x="1.95" y="31.84" width="149.09" height="181.09" rx="14.23" />
            <path d="M136.8,32.3a13.79,13.79,0,0,1,13.78,13.78V198.7a13.79,13.79,0,0,1-13.78,13.78H16.18A13.79,13.79,0,0,1,2.4,198.7V46.08A13.79,13.79,0,0,1,16.18,32.3H136.8m0-.91H16.18A14.69,14.69,0,0,0,1.49,46.08V198.7a14.69,14.69,0,0,0,14.69,14.69H136.8a14.69,14.69,0,0,0,14.69-14.69V46.08A14.68,14.68,0,0,0,136.8,31.39Z" />
          </g>

          <g id="pipet">
            <g>
              <path className="cls-12" d="M130,202.87a11,11,0,0,1-11-11v-137a11,11,0,1,1,22,0v137A11,11,0,0,1,130,202.87Z" />
            </g>
            <g id="level-mask">
              <g className="cls-8">
                <g id="level" transform={"translate(0 " + level + ")"}>
                  <g id="scum">
                    <path className="cls-9" d="M135.82,60H124.53a2.67,2.67,0,0,1-2.67-2.67V54.58a8.19,8.19,0,0,1,8.19-8.19h.25a8.19,8.19,0,0,1,8.19,8.19V57.3A2.66,2.66,0,0,1,135.82,60Z" />
                  </g>
                  <g id="liquid">
                    <rect className="cls-10" x="121.86" y="49.3" width="16.63" height="151.09" rx="7.99" />
                  </g>
                </g>
              </g>
            </g>
            <g id="glass">
              <path className="cls-11" d="M130,202.87a11,11,0,0,1-11-11v-137a11,11,0,1,1,22,0v137A11,11,0,0,1,130,202.87Z" />
              <path className="cls-120" d="M130,44.44a10.46,10.46,0,0,1,10.46,10.45v137a10.46,10.46,0,0,1-20.91,0v-137A10.46,10.46,0,0,1,130,44.44m0-1a11.5,11.5,0,0,0-11.5,11.5v137a11.5,11.5,0,1,0,23,0v-137A11.5,11.5,0,0,0,130,43.39Z" />
            </g>
          </g>
          <g id="pic-holder">
            <g id="pic-mask">
              <g className="cls-13">
                <foreignObject x="13" y="43.9" width="89" height="89">
                  <div className="img-wrapper">
                    <img src={"./src/assets/" + beerImg} alt="beer label" />
                  </div>
                </foreignObject>
              </g>
            </g>
            <g id="glass-2" data-name="glass">
              <rect className="cls-14" x="12.99" y="43.89" width="89" height="89" rx="11.21" />
              <path d="M90.78,44.39A10.72,10.72,0,0,1,101.49,55.1v66.58a10.72,10.72,0,0,1-10.71,10.71H24.2a10.73,10.73,0,0,1-10.71-10.71V55.1A10.72,10.72,0,0,1,24.2,44.39H90.78m0-1H24.2A11.71,11.71,0,0,0,12.49,55.1v66.58A11.71,11.71,0,0,0,24.2,133.39H90.78a11.71,11.71,0,0,0,11.71-11.71V55.1A11.71,11.71,0,0,0,90.78,43.39Z" />
            </g>
          </g>
          <g id="bulb-red">
            <g>
              <line className="cls-15" x1="83.42" y1="23.33" x2="81.58" y2="13.83" />
              <line className="cls-15" x1="87.73" y1="23.33" x2="89.58" y2="13.83" />
              <line className="cls-15" x1="81.58" y1="14.39" x2="89.58" y2="14.39" />
            </g>
            <rect className="cls-16" x="82.99" y="20.89" width="5" height="7" rx="2.5" />
            <path
              id="glass-red"
              className="cls-17"
              style={styleChange}
              d="M94.58,8.53A8.14,8.14,0,0,0,86.43.39H84.72a8.13,8.13,0,0,0-8.14,8.14v8.72a8.05,8.05,0,0,0,1.23,4.29,5.45,5.45,0,0,1,.77,2.87v4.48h14V24.41a5.44,5.44,0,0,1,.76-2.87,8.06,8.06,0,0,0,1.24-4.29Z"
            />
            <path className="cls-18" d="M78.94,25.89H92.21a2.86,2.86,0,0,1,2.86,2.86v3.14a0,0,0,0,1,0,0h-19a0,0,0,0,1,0,0V28.75A2.86,2.86,0,0,1,78.94,25.89Z" />
          </g>
          <g id="bulb-green">
            <g>
              <line className="cls-15" x1="37.42" y1="23.33" x2="35.58" y2="13.83" />
              <line className="cls-15" x1="41.73" y1="23.33" x2="43.58" y2="13.83" />
              <line className="cls-15" x1="35.58" y1="14.39" x2="43.58" y2="14.39" />
            </g>
            <rect className="cls-16" x="36.99" y="20.89" width="5" height="7" rx="2.5" />
            <path
              id="glass-green"
              className="cls-19"
              style={styleUse}
              d="M48.58,8.53A8.14,8.14,0,0,0,40.43.39H38.72a8.13,8.13,0,0,0-8.14,8.14v8.72a8.05,8.05,0,0,0,1.23,4.29,5.45,5.45,0,0,1,.77,2.87v4.48h14V24.41a5.44,5.44,0,0,1,.76-2.87,8.06,8.06,0,0,0,1.24-4.29Z"
            />
            <path className="cls-20" d="M32.94,25.89H46.21a2.86,2.86,0,0,1,2.86,2.86v3.14a0,0,0,0,1,0,0h-19a0,0,0,0,1,0,0V28.75A2.86,2.86,0,0,1,32.94,25.89Z" />
          </g>
          <g>
            <foreignObject x="15" y="140" width="160" height="160">
              <p>{props.tap.beer}</p>
            </foreignObject>
            <foreignObject x="15" y="180" width="160" height="160">
              <p>{props.tap.level + " cl"}</p>
            </foreignObject>
          </g>
        </g>
      </svg>
      <p style={bartender.length > 0 ? { opacity: "1" } : { opacity: "0.2" }}>{bartender.length > 0 ? bartender[0].name : "nobody"}</p>
    </div>
  );
}
