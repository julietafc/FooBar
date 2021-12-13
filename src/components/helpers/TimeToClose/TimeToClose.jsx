import "./TimeToClose.scss";
import settingTime from "../../../modules/settingTime";
import TimeBar from "../TimeBar/TimeBar";
import React, { useEffect } from "react";
import Confetti from "react-confetti";
import timeManager from "../../../modules/timeManager";

export default function TimeToClose(props) {
  if (!props.now) {
    return null;
  }
  const schedule = timeManager();
  return (
    <>
      <article className="TimeToClose">
        <TimeBar isBarActive={props.isHappyHour} timeInit={schedule.happyHourStar} timeEnd={schedule.happyHourEnd} now={props.now} label="HAPPY HOUR" />
        <TimeBar isBarActive={props.isOpen} timeInit={schedule.openingTime} timeEnd={schedule.closingTime} now={props.now} label="TIME LEFT" />
        {props.isHappyHour && props.now < schedule.happyHourStar + 30000 && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      </article>
    </>
  );
}
