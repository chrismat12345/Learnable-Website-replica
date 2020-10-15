import React from "react";

const Image = (props) => {
  return (
    <div>
      <div className="image-box">
        <img
          src={`/images/${props.name}.png`}
          alt=" wait"
          width="300px"
		  height="300px"
		  style={props.radius}
        />
      </div>
    </div>
  );
};

export default Image;
