import { useState } from "react";

export default function MultiProgressBar() {
  const [values, setValues] = useState([20, 40, 60]);

  const update = (i, val) => {
    const copy = [...values];
    copy[i] = val;
    setValues(copy);
  };

  const avg = values.reduce((a, b) => a + Number(b), 0) / values.length;

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">Progress Bars</h2>

      {values.map((v, i) => (
        <input key={i} type="number" value={v}
          onChange={e => update(i, e.target.value)}
          className="border p-1 w-full mt-2" />
      ))}

      <div className="h-4 bg-gray-200 mt-4">
        <div
          className={`h-full ${avg < 40 ? "bg-red-500" : "bg-green-500"}`}
          style={{ width: `${avg}%` }}
        />
      </div>
    </div>
  );
}