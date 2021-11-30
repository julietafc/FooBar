import counterClose from "../../../modules/counterClose";
export default function TimeToClose(props) {
  const time = counterClose(props.now);
  const timeDisplay = `We close in ${time.hours} : ${time.minutes} : ${time.seconds}`;
  return <p>{time.hours < 0 ? "we are close" : timeDisplay}</p>;
}
