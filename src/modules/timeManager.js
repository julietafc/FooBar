import settingTime from "./settingTime";

export default function timeManager(now, isHappyHour, setIsHappyHour, setIsOpen) {
  //   console.log("timeManager");

  const happyHourTime = 21;
  const closingHour = 22;
  const openHour = 10;
  const happyHourStar = settingTime(happyHourTime);
  const happyHourEnd = settingTime(happyHourTime + 1);
  const closingTime = settingTime(closingHour);
  const openingTime = settingTime(openHour);

  if (now) {
    // console.log(now, happyHourStar);
    // console.log(isHappyHour);
    if (now > happyHourStar && now < happyHourEnd) {
      setIsHappyHour(true);
    } else {
      if (isHappyHour) {
        setIsHappyHour(false);
      }
    }

    now > openingTime && now < closingTime ? setIsOpen(true) : setIsOpen(false);
  }
  return {
    happyHourStar: happyHourStar,
    happyHourEnd: happyHourEnd,
    closingTime: closingTime,
    openingTime: openingTime,
  };
}
