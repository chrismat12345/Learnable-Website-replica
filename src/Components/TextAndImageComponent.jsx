import React from 'react';

const TextAndImageComponent = (props) => {
	return (
		<div>
			<div className="diva2">
				<img src={`/images/${props.name}.png`} alt="" width={props.width}  height={props.height}/>
				<p>{props.paragraph}</p>
				<h3 style ={props.color}>{props.header3}</h3>
  <span>{props.facilitator}</span>
			
			</div>
		</div>
	);
}

export default TextAndImageComponent;
