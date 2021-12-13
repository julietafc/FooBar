export default function settingTime(hour) {
  let setedHour = new Date();

  setedHour.setHours(hour, 39, 0, 0);

  return setedHour.getTime();
}
