let todayAtTen = new Date();
todayAtTen.setHours(22, 0, 0, 0);
todayAtTen = todayAtTen.getTime();
const sec = 1000;
const minute = sec * 60;
const hour = minute * 60;
const day = hour * 24;

export default function counterClose(now) {
  const dif = todayAtTen - Number(now);
  const hours = Math.floor((dif % day) / hour) < 10 ? "0" + Math.floor((dif % day) / hour) : Math.floor((dif % day) / hour);
  const minutes = Math.floor((dif % hour) / minute) < 10 ? "0" + Math.floor((dif % hour) / minute) : Math.floor((dif % hour) / minute);
  const seconds = Math.floor((dif % minute) / sec) < 10 ? "0" + Math.floor((dif % minute) / sec) : Math.floor((dif % minute) / sec);

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
