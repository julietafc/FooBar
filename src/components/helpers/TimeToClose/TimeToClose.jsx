import "./TimeToClose.scss";
import timeDiference from "../../../modules/timeDiference";
import settingTime from "../../../modules/settingTime";
import TimeBar from "../TimeBar/TimeBar";
import React from "react";
import Confetti from "react-confetti";

export default function TimeToClose(props) {
  const happyHourTime = 14;
  const closingHour = 22;
  const openHour = 10;
  const happyHourStar = settingTime(happyHourTime);
  const happyHourEnd = settingTime(happyHourTime + 1);
  const closingTime = settingTime(closingHour);
  const openingTime = settingTime(openHour);
  const time = timeDiference(props.now, closingTime);
  const timeDisplay = `${time.hours}:${time.minutes}:${time.seconds}`;

  if (props.now > happyHourStar && props.now < happyHourEnd) {
    props.setIsHappyHour(true);
  } else {
    props.setIsHappyHour(false);
  }
  const isOpen = props.now > openingTime && props.now < closingTime;

  return (
    <>
      <article className="TimeToClose">
        <p>{!isOpen ? "we are close" : timeDisplay}</p>
        <div>
          <TimeBar isBarActive={isOpen} timeInit={openingTime} timeEnd={closingTime} now={props.now} label="TIME LEFT" />
          <TimeBar isBarActive={props.isHappyHour} timeInit={happyHourStar} timeEnd={happyHourEnd} now={props.now} label="HAPPY HOUR" />
        </div>
        {props.isHappyHour && props.now < happyHourStar + 30000 && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        {/* <h2>{props.isHappyHour ? "HAPPY HOUR" : "TIME"}</h2> */}
      </article>
    </>
  );
}
