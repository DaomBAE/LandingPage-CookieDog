import React from "react";
import DiscoverInfo from "../presentational/DiscoverInfo";

function Discover() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundColor: "black" }}>
      <div className="flex justify-center items-center min-h-screen mt-24">
        <DiscoverInfo />
      </div>
    </div>
  );
}

export default Discover;
