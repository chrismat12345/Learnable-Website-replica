import React from "react";

const FagText = (props) => {
  return (
    <div>
      <div className="faq-text-container">
        <h3>{props.text} </h3>
        <img src="/images/vector3.png" alt="expand icon" />
      </div>
    </div>
  );
};

export default FagText;
