import React from 'react';

const Icom = (props) => {
	return (
		<div>
			<div className="icon">
				<img
					src={`/images/${props.name}.png`}
					alt=" wait"
					width="20px"
					height="20px"
					style={{margin:'1rem'}}
					
				/>
			</div>
			
			
		</div>
	);
}

export default Icom;
