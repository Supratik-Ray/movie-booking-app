import React from "react";

const BlurCircle = ({
  top = "auto",
  bottom = "auto",
  left = "auto",
  right = "auto",
}) => {
  return (
    <div
      className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-primary/30 blur-3xl"
      style={{ top, bottom, left, right }}
    ></div>
  );
};

export default BlurCircle;
