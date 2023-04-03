import React from "react";
import Banner from "./components/Banner/Banner";

export default function App() {
  return (
    <div>
      <h1 className="text-center">Header</h1>
      <button className="mx-auto bg-orange-700 text-white flex align-middle rounded-lg p-2 mt-2">Dark mood</button>
      <div>
        {/* <Banner /> */}
      </div>
    </div>
  );
}
