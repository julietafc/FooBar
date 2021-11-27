import { useState } from "react";

export default function Button(props) {
  const [clicks, setClicks] = useState(0);
  function buttonClicked(e) {
    setClicks(clicks + 1);
  }
  return <button onClick={buttonClicked}>{clicks}</button>;
}
