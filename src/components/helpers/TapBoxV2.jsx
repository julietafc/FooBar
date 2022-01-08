import "./TapBox.scss";
export default function TapBoxV2(props) {
  let beerImg = props.tap.beer.toLowerCase().split(" ").join("") + ".png";
  const level = 308 - (props.tap.level * 308) / 2500;
  const bartender = props.bartenders.filter((person) => person.usingTap === props.tap.id);

  const styleUse = {
    fill: props.tap.inUse ? "#21e876be" : "#0e2908",
    filter: props.tap.inUse ? "drop-shadow(-2px -8px 15px #21e876be)" : "none",
  };

  const styleChange = {
    fill: props.tap.level < 50 ? "#f42a2abe" : "#4f0101",
    filter: props.tap.level < 50 ? "drop-shadow(0px 0px 12px #f42a2a)" : "none",
  };

  return (
    <div className="TapBox svg-wrapper">
      <p style={{ opacity: "1" }}>{"tap: " + (props.tap.id + 1)}</p>

      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 350 527.08">
        <defs>
          <clipPath id="clip-path-100">
            <rect id="mask" className="cls-1" x="127.61" y="277.8" width="326.49" height="35.65" transform="translate(586.48 4.78) rotate(90)" />
          </clipPath>
          <clipPath id="clip-path-102">
            <rect id="mask-2" data-name="mask" className="cls-1" x="50.49" y="127.8" width="182.29" height="182.29" rx="32.39" />
          </clipPath>
        </defs>

        <g id="items-to-use" transform="translate(0 20)">
          <g id="pixel-tap-box">
            <g>
              <polygon id="box-background" className="cls-2" points="6.87 117.71 15.87 99.7 26.3 94.75 39.34 89.6 319.93 90.72 337.18 103.66 342.21 118.89 342.21 476.26 327.99 496.31 312.82 500.21 24.41 498.74 6.87 476.26 6.87 117.71" />
              <rect className="cls-3" x="330.96" y="100.14" width="6.22" height="390.79" />
              <rect className="cls-3" x="12.82" y="110.91" width="6.22" height="369.24" />
              <rect className="cls-3" x="172.04" y="-46.5" width="6.22" height="286.51" transform="translate(78.4 271.91) rotate(-90)" />
              <rect className="cls-3" x="171.43" y="350.8" width="6.22" height="286.51" transform="translate(-319.52 668.59) rotate(-90)" />
              <path
                id="outer-line"
                className="cls-4"
                d="M343.59,110.91V100.14h-6.41V94.75h-6.41V89.37H318V84H32v5.39H19.23v5.38H12.82v5.39H6.41v10.77H0V480.15H6.41v10.78h6.41v5.38h6.41v5.39H32v5.38H318V501.7h12.81v-5.39h6.41v-5.38h6.41V480.15H350V110.91Zm-6.41,299.23v70h-6.41v10.78H318v5.38H32v-5.38H19.23V480.15H12.82V110.91h6.41V100.14H32V94.75H318v5.39h12.81v10.77h6.41V410.14Z"
              />
            </g>
            <g id="progress-bar">
              <g id="backGround">
                <rect className="cls-5" x="141.77" y="291.97" width="326.68" height="7.13" transform="translate(600.64 -9.57) rotate(90)" />
                <rect className="cls-6" x="123.94" y="281.27" width="326.68" height="28.52" transform="translate(582.81 8.25) rotate(90)" />
              </g>
              <g className="cls-7">
                <g id="level" transform={"translate(0 " + level + ")"}>
                  <g>
                    <rect className="cls-8" x="273.02" y="140.71" width="7.13" height="8.51" />
                    <rect className="cls-9" x="301.55" y="140.71" width="7.13" height="8.51" />
                    <rect className="cls-4" x="301.55" y="132.19" width="7.13" height="8.51" />
                    <rect className="cls-4" x="273.03" y="132.19" width="7.13" height="8.51" />
                    <polygon className="cls-4" points="287.28 140.71 280.16 140.71 280.16 149.22 287.28 149.22 294.42 149.22 301.55 149.22 301.55 140.71 294.42 140.71 287.28 140.71" />
                  </g>
                  <rect className="cls-10" x="132.46" y="289.78" width="309.65" height="28.53" transform="translate(591.33 16.76) rotate(90)" />
                  <rect className="cls-11" x="154.41" y="296.36" width="301.4" height="7.13" transform="translate(605.03 -5.19) rotate(90)" />
                </g>
              </g>
              <g id="contorn">
                <rect className="cls-12" x="301.54" y="450.36" width="7.13" height="8.51" />
                <polygon className="cls-4" points="308.68 458.87 301.55 458.87 294.42 458.87 287.28 458.87 280.16 458.87 273.02 458.87 273.02 467.39 280.16 467.39 287.28 467.39 294.42 467.39 301.55 467.39 308.68 467.39 308.68 458.87" />
                <polygon className="cls-4" points="308.68 123.68 301.55 123.68 294.42 123.68 287.28 123.68 280.16 123.68 273.02 123.68 273.02 132.19 280.16 132.19 287.28 132.19 294.42 132.19 301.55 132.19 308.68 132.19 308.68 123.68" />
                <rect className="cls-4" x="148.89" y="291.97" width="326.68" height="7.13" transform="translate(607.76 -16.7) rotate(90)" />
                <rect className="cls-4" x="106.12" y="291.97" width="326.68" height="7.13" transform="translate(564.99 26.07) rotate(90)" />
              </g>
            </g>
            <g id="info_holder" className="box-container" data-name="info holder">
              <g>
                <rect id="name" className="cls-1" x="41.24" y="336.64" width="199.67" height="86.25" />
                <foreignObject x="41.24" y="336.64" width="199.67" height="83">
                  <p>{props.tap.beer}</p>
                </foreignObject>
                <rect id="alc-level" className="cls-1" x="52.44" y="435.68" width="177.27" height="40.46" />
                <foreignObject x="52.44" y="435.68" width="177.27" height="40.46">
                  <p>{props.tap.level + " cl"}</p>
                </foreignObject>
              </g>
              <rect id="info-holder-frame" className="cls-1" x="28.72" y="336.64" width="224.71" height="139.79" />
            </g>
            <g id="image-holder">
              <g className="cls-13">
                <foreignObject x="50.49" y="127.8" width="182.29" height="182.29">
                  <div className="img-wrapper">
                    <img src={"./assets/" + beerImg} alt="beer label" />
                  </div>
                </foreignObject>
              </g>
            </g>
            <path
              id="image-frame"
              className="cls-4"
              d="M234.51,156V139.84H228.1v-5.39h-6.41v-5.39H208.87v-5.38H73.28v5.38H60.47v5.39H54.06v5.39H47.65v10.77H41.24v139h6.41v10.78h6.41v5.38h6.41v5.39H73.28v5.38H208.87v-5.38h12.82v-5.39h6.41v-5.38h6.41V284.25h6.4V156Zm-6.41,59.25v74.39h-6.41V295h-6.41v5.39h-6.41v5.38H73.28v-5.38H60.47V289.63H54.06v-139h6.41V139.84H73.28v-5.39H208.87v5.39h6.41v5.38h6.41v5.39h6.41v64.63Z"
            />
            <g id="bulb-green">
              <g>
                <polygon
                  className="cls-5"
                  points="106.59 53.11 101.92 53.11 97.26 53.11 92.6 53.11 87.94 53.11 83.27 53.11 78.61 53.11 73.94 53.11 69.28 53.11 64.62 53.11 64.62 58.3 69.28 58.3 73.94 58.3 78.61 58.3 83.27 58.3 87.94 58.3 92.6 58.3 97.26 58.3 101.92 58.3 106.59 58.3 111.25 58.3 111.25 53.11 106.59 53.11"
                />
                <polygon
                  className="cls-6"
                  points="118.31 58.3 115.69 58.3 108.43 58.3 101.16 58.3 93.89 58.3 86.63 58.3 79.36 58.3 72.09 58.3 64.82 58.3 57.56 58.3 57.56 63.48 57.56 68.66 57.56 73.85 57.56 79.04 64.82 79.04 72.09 79.04 79.36 79.04 86.63 79.04 93.89 79.04 101.16 79.04 108.43 79.04 115.69 79.04 118.31 79.04 118.31 58.3"
                />
                <path className="cls-4" d="M118.31,53.11V47.92H57.56v5.19H50.49V84.22h74.89V53.11Zm0,10.37V79H57.56V58.3h7.06V53.11h46.63V58.3h7.06Z" />
              </g>
              <g>
                <rect className="cls-14" x="97.87" y="14.27" width="7.37" height="33.65" />
                <rect id="light-green" className="cls-15" style={styleUse} x="71.35" y="7.37" width="26.44" height="40.55" />
                <polygon
                  className="cls-4"
                  points="103.88 7.38 103.88 0 71.99 0 71.99 7.38 64.62 7.38 64.62 14.27 64.62 14.75 64.62 47.92 71.99 47.92 71.99 14.75 78.08 14.75 78.08 7.38 97.79 7.38 97.79 14.75 103.88 14.75 103.88 47.92 111.25 47.92 111.25 14.75 111.25 14.27 111.25 7.38 103.88 7.38"
                />
              </g>
            </g>
            <g id="bulb-red">
              <g>
                <polygon
                  className="cls-5"
                  points="197.74 53.11 193.07 53.11 188.41 53.11 183.75 53.11 179.08 53.11 174.42 53.11 169.75 53.11 165.09 53.11 160.43 53.11 155.76 53.11 155.76 58.3 160.43 58.3 165.09 58.3 169.75 58.3 174.42 58.3 179.08 58.3 183.75 58.3 188.41 58.3 193.07 58.3 197.74 58.3 202.4 58.3 202.4 53.11 197.74 53.11"
                />
                <polygon
                  className="cls-6"
                  points="209.46 58.3 206.84 58.3 199.57 58.3 192.31 58.3 185.04 58.3 177.77 58.3 170.5 58.3 163.24 58.3 155.97 58.3 148.7 58.3 148.7 63.48 148.7 68.66 148.7 73.85 148.7 79.04 155.97 79.04 163.24 79.04 170.5 79.04 177.77 79.04 185.04 79.04 192.31 79.04 199.57 79.04 206.84 79.04 209.46 79.04 209.46 58.3"
                />
                <path className="cls-4" d="M209.46,53.11V47.92H148.7v5.19h-7.06V84.22h74.88V53.11Zm0,10.37V79H148.7V58.3h7.06V53.11H202.4V58.3h7.06Z" />
              </g>
              <g>
                <rect className="cls-16" x="189.02" y="14.27" width="7.37" height="33.65" />
                <rect id="light-red" className="cls-17" style={styleChange} x="162.5" y="7.37" width="26.44" height="40.55" />
                <polygon
                  className="cls-4"
                  points="195.02 7.38 195.02 0 163.14 0 163.14 7.38 155.76 7.38 155.76 14.27 155.76 14.75 155.76 47.92 163.14 47.92 163.14 14.75 169.23 14.75 169.23 7.38 188.94 7.38 188.94 14.75 195.02 14.75 195.02 47.92 202.4 47.92 202.4 14.75 202.4 14.27 202.4 7.38 195.02 7.38"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <p style={bartender.length > 0 ? { opacity: "1" } : { opacity: "0.2" }}>{bartender.length > 0 ? bartender[0].name : "nobody"}</p>
    </div>
  );
}
