import React from "react";
import "./Loader.scss";
import { Ring } from "@uiball/loaders";

function Loader() {
  return (
    <div className="Loader">
      <Ring size={40} lineWeight={5} speed={2} color="#2940D3" />
    </div>
  );
}

export default Loader;
