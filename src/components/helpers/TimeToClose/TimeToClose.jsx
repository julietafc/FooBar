import "./TimeToClose.scss";
import timeDiference from "../../../modules/timeDiference";
import settingTime from "../../../modules/settingTime";
import React from "react";
import Confetti from "react-confetti";

export default function TimeToClose(props) {
  const happyHourTime = 11;
  const closingHour = 22;
  const happyHourStar = settingTime(happyHourTime);
  const happyHourEnd = settingTime(happyHourTime + 1);
  const todayAtTen = settingTime(closingHour);
  const time = timeDiference(props.now, todayAtTen);
  const timeDisplay = `${time.hours}:${time.minutes}:${time.seconds}`;

  if (props.now > happyHourStar && props.now < happyHourEnd) {
    props.setIsHappyHour(true);
  } else {
    props.setIsHappyHour(false);
  }

  return (
    <>
      <article>
        {props.isHappyHour ? (
          <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <h2>HAPPY HOUR</h2>
          </>
        ) : (
          <h2>TIME</h2>
        )}
        <p className="TimeToClose">{time.hours < 0 ? "we are close" : timeDisplay}</p>
      </article>
    </>
  );
}
