import "./ModalOrderReady.scss";
import useSound from "use-sound";
import sound from "./pressbee.mp3";
import { useEffect } from "react";
import Button from "./Button";

export default function ModalOrderReady(props) {
  const [play, { stop }] = useSound(sound, { interrupt: true });
  useEffect(() => {
    play();
  });

  const pic = props.bartender.toLowerCase() + ".png";
  return (
    <div className="background-black-order">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.58 357.26">
        <g id="items-to-use">
          <g id="hor-text-box-pic">
            <foreignObject y="209.63" width="147.63" height="147.63">
              <div className="pic-wrapper">
                <img src={"./assets/" + pic} alt="beer label" />
              </div>
            </foreignObject>
            <rect id="picture-holder" className="cls-1" y="209.63" width="147.63" height="147.63" />
            <g>
              <polygon
                className="cls-2"
                points="406.36 30.23 406.36 22.67 398.95 22.67 398.95 15.11 391.55 15.11 384.14 15.11 376.74 15.11 369.33 15.11 361.93 15.11 354.52 15.11 347.12 15.11 339.71 15.11 332.3 15.11 324.9 15.11 317.49 15.11 310.09 15.11 302.68 15.11 295.28 15.11 287.87 15.11 280.47 15.11 273.06 15.11 265.66 15.11 258.25 15.11 250.84 15.11 243.44 15.11 236.03 15.11 228.63 15.11 221.22 15.11 213.82 15.11 206.41 15.11 199.01 15.11 191.6 15.11 184.19 15.11 176.79 15.11 169.38 15.11 169.38 22.67 161.98 22.67 154.57 22.67 154.57 30.23 154.57 37.78 154.57 45.34 154.57 52.9 154.57 60.45 154.57 68.01 154.57 75.57 154.57 83.12 154.57 90.68 154.57 98.24 154.57 105.79 154.57 113.35 154.57 120.91 154.57 128.46 154.57 136.02 154.57 143.58 154.57 151.13 154.57 158.69 154.57 166.25 154.57 173.8 161.98 173.8 161.98 181.36 169.38 181.36 169.38 188.91 176.79 188.91 184.19 188.91 191.6 188.91 199.01 188.91 206.41 188.91 213.82 188.91 221.22 188.91 228.63 188.91 236.03 188.91 243.44 188.91 250.84 188.91 258.25 188.91 265.66 188.91 273.06 188.91 280.47 188.91 287.87 188.91 295.28 188.91 302.68 188.91 310.09 188.91 317.49 188.91 324.9 188.91 332.3 188.91 339.71 188.91 347.12 188.91 354.52 188.91 361.93 188.91 369.33 188.91 376.74 188.91 384.14 188.91 391.55 188.91 398.95 188.91 398.95 181.36 406.36 181.36 406.36 173.8 413.76 173.8 413.76 166.25 413.76 158.69 413.76 151.13 413.76 143.58 413.76 136.02 413.76 128.46 413.76 120.91 413.76 113.35 413.76 105.79 413.76 98.24 413.76 90.68 413.76 83.12 413.76 75.57 413.76 68.01 413.76 60.45 413.76 52.9 413.76 45.34 413.76 37.78 413.76 30.23 406.36 30.23"
              />
              <path
                className="cls-3"
                d="M421.17,30.23V15.11h-7.4V7.56H399V0H169.38V7.56H154.57v7.55h-7.4v7.56h-7.41V45.34h-7.4V158.69h7.4v22.67h7.41V204h-7.41v7.55h-7.4V226.7h14.81v-7.56H162v-7.56h7.4V204H399v-7.56h14.82v-7.55h7.4V173.8h7.41V30.23ZM406.36,173.8v7.56H399v7.56H169.38v-7.56H162V173.8h-7.41V22.67h14.81V15.11H399v7.56h7.41v7.56h7.41V173.8Z"
              />
            </g>

            <foreignObject x="223.29" y="132.86" width="122.86" height="48.88">
              <Button
                className="ok-btn-modal"
                onClick={() => {
                  props.setIsYourOrderReady(false);
                }}
                label="OK"
              />
            </foreignObject>

            <rect id="btn-holder" className="cls-1" x="223.29" y="132.86" width="122.86" height="48.88" />

            <foreignObject x="164.5" y="35.1" width="240.44" height="78.25">
              <p>
                Hi <span className="capitalize">{props.customer}</span> your order {props.id} is ready
              </p>
            </foreignObject>
            <rect id="text-holder" className="cls-1" x="164.5" y="35.1" width="240.44" height="78.25" />
          </g>
        </g>
      </svg>
    </div>
  );
}
