import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(10000);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    const id = setInterval(() => {
      setTime(t => {
        if (t <= 0) {
          clearInterval(id);
          return 0;
        }
        return t - 10;
      });
    }, 10);

    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">Countdown Timer</h2>
      <p>{(time / 1000).toFixed(2)} sec</p>

      <button onClick={() => setActive(true)} className="bg-blue-500 text-white px-2">
        Start
      </button>
      <button onClick={() => setActive(false)} className="ml-2 border px-2">
        Pause
      </button>
    </div>
  );
}