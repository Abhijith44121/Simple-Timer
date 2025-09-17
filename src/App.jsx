import { useState, useRef } from "react";
const App = () => {
  const timeRef = useRef(null);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timeRef.current);
      timeRef.current = null;
    } else {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTime(0);
    timeRef.current = null;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 pb-8 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-4xl font-semibold mt-4 mb-6">
        ⏳Timer: {time}
      </h2>
      <div className="flex gap-4 w-full justify-center">
        <button
          onClick={toggleTimer}
          className="cursor-pointer bg-green-500 w-32 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 w-32 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
