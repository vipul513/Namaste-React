import React from "react";
import "./Shimmer.css";
import ShimmerCard from "./ShimmerCard";

function Shimmer() {
  console.log("shimmer");
  return (
    <div className="shimmer-container">
      <div className="shimmer-body">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
      <div className="shimmer-body">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
}

export default Shimmer;
