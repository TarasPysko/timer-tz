import React from "react";

function App() {
  const [sec, setSec] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [work, setWork] = React.useState(false);
  React.useEffect(() => {
    if (work) {
      return setTimeout(() => setSec(sec + 1), 1000);
    }
    if (!work) {
      return clearTimeout();
    }
  }, [sec, work]);
  React.useEffect(() => {
    if (sec === 60) {
      setMin(min + 1);
      setSec(0);
    }
    if (min === 60) {
      setMin(0);
      setHour(hour + 1);
    }
  }, [min, sec, hour]);

  return (
    <div className="App">
      <div className="text-center mt-5">
        <div id="timer">
          {hour} / {min} / {sec}
        </div>
        <button
          onClick={() => {
            setWork(false);
            setSec(0);
            setMin(0);
            setHour(0);
          }}
          className="btn btn-danger"
        >
          Stop/Reset
        </button>
        <button
          onClick={(e) => {
            let timer;
            clearTimeout(timer);
            timer = setTimeout(
              (click) => {
                if (click === 2) return setWork(false);
              },
              300,
              e.detail
            );
          }}
          className="btn btn-warning"
        >
          Wait
        </button>
        <button
          onClick={() => {
            setWork(true);
          }}
          className="btn btn-success"
        >
          start
        </button>
      </div>
    </div>
  );
}

export default App;
