// useEffect, useRef & useCallback

import React, { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // use ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "!@#$%^&*<>?/~:";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  // passwordGenerator() // -> ❌

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
    // }, [length, numAllow, charAllow, setPassword]) // -> ❌
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-xl rounded-lg px-6 py-5 my-12 bg-gray-900 text-gray-100">
        <h1 className="text-center text-2xl font-bold mb-6">Password Generator</h1>
        <div className="flex shadow-md rounded-lg mb-6 overflow-hidden">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            className="w-full py-2 px-4 text-gray-800 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Generated password"
            readOnly
          />
          <button
            onClick={copyPassword}
            className="bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 transition-all duration-200"
          >
            Copy
          </button>
        </div>
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full accent-blue-500"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <span className="font-medium">Length: {length}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={numAllow}
                id="numInput"
                className="h-5 w-5 rounded text-blue-600 border-gray-600 focus:ring-blue-500"
                onChange={() => {
                  setNumAllow((prev) => !prev);
                }}
              />
              <label htmlFor="numInput" className="text-sm">
                Include Numbers
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={charAllow}
                id="charInput"
                className="h-5 w-5 rounded text-blue-600 border-gray-600 focus:ring-blue-500"
                onChange={() => {
                  setCharAllow((prev) => !prev);
                }}
              />
              <label htmlFor="charInput" className="text-sm">
                Include Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
