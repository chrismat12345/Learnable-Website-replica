import React from 'react';

const Update = (props) => {
	return (
		<div>
        <div className="update" >
	    <div className="arrow">
			<img src="/images/arrowup.png" alt="" height='100px'/>
		</div>
		<div className="text-box" style={props.bg}>
					<div className='head'><h2>Stay up to date on what we are doing and new learning opportunities</h2></div>
			<div className='align'>
						<p className='parag'>Your email</p>
						<hr/>
						<p>View Privacy Policy</p>
			</div>
					<div>SUBSCRIBE</div>
		</div>
		</div>
		</div>
	);
}

export default Update;
