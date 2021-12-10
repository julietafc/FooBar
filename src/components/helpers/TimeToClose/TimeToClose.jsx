import "./TimeToClose.scss";
import settingTime from "../../../modules/settingTime";
import TimeBar from "../TimeBar/TimeBar";
import React, { useEffect } from "react";
import Confetti from "react-confetti";

export default function TimeToClose(props) {
  if (!props.now) {
    return null;
  }

  const happyHourTime = 18;
  const closingHour = 22;
  const openHour = 10;
  const happyHourStar = settingTime(happyHourTime);
  const happyHourEnd = settingTime(happyHourTime + 1);
  const closingTime = settingTime(closingHour);
  const openingTime = settingTime(openHour);

  useEffect(() => {
    if (props.now > happyHourStar && props.now < happyHourEnd) {
      props.setIsHappyHour(true);
    } else {
      props.setIsHappyHour(false);
    }
  }, []);

  const isOpen = props.now > openingTime && props.now < closingTime;

  return (
    <>
      <article className="TimeToClose">
        <TimeBar isBarActive={props.isHappyHour} timeInit={happyHourStar} timeEnd={happyHourEnd} now={props.now} label="HAPPY HOUR" />
        <TimeBar isBarActive={isOpen} timeInit={openingTime} timeEnd={closingTime} now={props.now} label="TIME LEFT" />
        {props.isHappyHour && props.now < happyHourStar + 30000 && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      </article>
    </>
  );
}
