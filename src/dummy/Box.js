import React from "react";

export const Box = (props) => (
  <div className="box" onClick={() => props.onClick(props)}>
    {props.text}
  </div>
);
