import React from "react";
import LeftMain from "./LeftBody";
import RightMain from "./RightBody";

export default function Main() {
  return (
    <>
      <div className="Container row">
        <div className="col p-4 mx-4">
          <LeftMain />
        </div>
        <div className="col p-4 mx-2">
          <RightMain />
        </div>
      </div>
    </>
  );
}
