import Loader from 'react-loader-spinner'
import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >          <Loader type="Hearts" color="#00BFFF" height={200} width={250} />

    </div>
  );
}
