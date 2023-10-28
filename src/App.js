import { useEffect, useState } from "react";

export default function App() {
  const [temp, setTemp] = useState(10);
  const [bgColor, setBgColor] = useState("#1a5ba6");

  const increment = () => {
    if (temp === 30) {
      return;
    } else {
      setTemp(temp + 1);
    }
  };

  const decrement = () => {
    if (temp === 0) {
      return;
    } else {
      setTemp(temp - 1);
    }
  };

  useEffect(() => {
    if (temp > 15 && temp <= 25) {
      setBgColor("#F85700");
    } else if (temp <= 15 && temp >= 5) {
      setBgColor("#1a5ba6");
    } else if (temp > 25) {
      setBgColor("red");
    } else if (temp < 5) {
      setBgColor("#83C8E4");
    }
  }, [temp]);

  return (
    <div className="card">
      <span className="temp-text" style={{ backgroundColor: bgColor }}>
        {temp}°C
      </span>
      <div className="buttons-div">
        <button onClick={decrement} className="btn">
          -
        </button>
        <button onClick={increment} className="btn">
          +
        </button>
      </div>
    </div>
  );
}
