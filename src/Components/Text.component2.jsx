import React from "react";

const Text2 = (props) => {
  return (
    <div>
      <div style={props.width}>
			  <p>{props.para}</p>
        <h1 style={props.hstyle}>{props.header}</h1>
      
      </div>
    </div>
  );
};

export default Text2;
