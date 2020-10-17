import React from 'react';
import '../ComponentStyle/textStyle.css'

const Text = (props) => {
	return (
		<div style={props.width} >
<p>{props.children}</p>
			<h1 style={props.hstyle}>{props.header}</h1>
	<p>{props.para}</p>
		</div>
	);
}

export default Text;
