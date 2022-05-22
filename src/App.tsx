import React, { useState } from "react";
import "./App.css";

function getEpochTime(
  month: number,
  day: number,
  year: number,
  hour: number,
  minute: number,
  second: number
) {
  const date = new Date(year, month, day, hour, minute, second);
  return date.getTime() / 1000;
}

function endCap(selection: number) {
  switch (selection) {
    case 0:
      return ":f>";
    case 1:
      return ":F>";
    case 2:
      return ":t>";
    case 3:
      return ":T>";
    case 4:
      return ":d>";
    case 5:
      return ":D>";
    case 6:
      return ":R>";
  }
}

function App() {
  const [time, setTime] = useState({
    month: 0,
    day: 0,
    year: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const [stampType, setStampType] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* set defualt to current */}
          <select
            name="month"
            value={time.month}
            onChange={(e) =>
              setTime({ ...time, month: parseInt(e.target.value) })
            }
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <select
            name="day"
            value={time.day}
            onChange={(e) =>
              setTime({ ...time, day: parseInt(e.target.value) })
            }
          >
            {Array(31)
              .fill(0)
              .map((_, i) => i + 1)
              .map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
          </select>
          <select
            name="year"
            value={time.year}
            onChange={(e) =>
              setTime({ ...time, year: parseInt(e.target.value) })
            }
          >
            {Array(1032)
              .fill(0)
              .map((_, i) => i + 1969)
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
          <select
            name="hour"
            value={time.hour}
            onChange={(e) =>
              setTime({ ...time, hour: parseInt(e.target.value) })
            }
          >
            {Array(24)
              .fill(0)
              .map((_, i) => i)
              .map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
          </select>
          <select
            name="minute"
            value={time.minute}
            onChange={(e) =>
              setTime({ ...time, minute: parseInt(e.target.value) })
            }
          >
            {Array(60)
              .fill(0)
              .map((_, i) => i)
              .map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
          </select>
          <select
            name="second"
            value={time.second}
            onChange={(e) =>
              setTime({ ...time, second: parseInt(e.target.value) })
            }
          >
            {Array(60)
              .fill(0)
              .map((_, i) => i)
              .map((second) => (
                <option key={second} value={second}>
                  {second}
                </option>
              ))}
          </select>
        </div>
        <select
          name="stamp type"
          onChange={(e) => setStampType(parseInt(e.target.value))}
        >
          <option value="0">Short Date/Time</option>
          <option value="1">Long Date/Time</option>
          <option value="2">Short Time</option>
          <option value="3">Long Time</option>
          <option value="4">Short Date</option>
          <option value="5">Long Date</option>
          <option value="6">Reletive</option>
        </select>
        <div>
          {"<t:"}
          {getEpochTime(
            time.month,
            time.day,
            time.year,
            time.hour,
            time.minute,
            time.second
          )}
          {endCap(stampType)}
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `<t:${getEpochTime(
                  time.month,
                  time.day,
                  time.year,
                  time.hour,
                  time.minute,
                  time.second
                )}${endCap(stampType)}`
              );
            }}
          >
            Copy
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
