import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Counter App</h1>
      <p className="text-xl">Count: {count}</p>
      <button
        className="px-6 py-2 rounded-2xl shadow bg-gray-200 hover:bg-gray-300"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
