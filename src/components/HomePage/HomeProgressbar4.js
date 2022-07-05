import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function HomeProgressbar4() {
  const percentage = 95;

  return (
    <div style={{ width: 150, height: 200 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
      <h3 className="uppercase text-[#100f3a] font-bold pl-5 pt-10 ">
        Awesomeness
      </h3>
    </div>
  );
}
