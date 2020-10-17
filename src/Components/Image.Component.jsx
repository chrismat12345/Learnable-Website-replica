import React from "react";

const Image = (props) => {
  return (
    <div>
      <div className="image-box">
        <img
          src={`/images/${props.name}.png`}
          alt=" wait"
          width="400px"
		  height="400px"
		  style={props.radius}
        />
      </div>
    </div>
  );
};

export default Image;
