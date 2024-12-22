import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white bg-opacity-80 px-5 py-4 rounded-3xl border border-gray-200 backdrop-blur-md">
          <button
            onClick={() => setColor("crimson")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "crimson" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("limegreen")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "limegreen" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("royalblue")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "royalblue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("darkorange")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "darkorange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("mediumpurple")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "mediumpurple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("saddlebrown")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "saddlebrown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("slategray")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "slategray" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("darkviolet")}
            className="outline-none px-6 py-2 rounded-3xl text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: "darkviolet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
