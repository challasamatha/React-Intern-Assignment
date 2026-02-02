import { useState } from "react";

const names = ["Samatha", "Samantha", "Samuel", "Rohit", "Anjali"];

export default function SearchList() {
  const [query, setQuery] = useState("");

  const highlight = (text) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((p, i) =>
      p.toLowerCase() === query.toLowerCase()
        ? <b key={i} className="text-blue-600">{p}</b>
        : p
    );
  };

  const filtered = names.filter(n =>
    n.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">Live Search</h2>

      <input
        className="border p-2 w-full"
        placeholder="Search"
        onChange={e => setQuery(e.target.value)}
      />

      <p className="mt-2">Results: {filtered.length}</p>

      {filtered.map(n => (
        <p key={n}>{highlight(n)}</p>
      ))}
    </div>
  );
}