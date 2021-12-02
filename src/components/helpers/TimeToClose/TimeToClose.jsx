import "./TimeToClose.scss";
import timeDiference from "../../../modules/timeDiference";
export default function TimeToClose(props) {
  let todayAtTen = new Date();
  todayAtTen.setHours(22, 0, 0, 0);
  todayAtTen = todayAtTen.getTime();
  const time = timeDiference(props.now, todayAtTen);
  const timeDisplay = `We close in ${time.hours} : ${time.minutes} : ${time.seconds}`;
  return <p className="TimeToClose">{time.hours < 0 ? "we are close" : timeDisplay}</p>;
}
