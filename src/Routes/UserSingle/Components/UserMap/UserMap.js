import React from 'react';
import './UserMap.css';

const UserMap = (props) => {
	return (
		<iframe 
			title={props.title}
			width='100%' 
			height='170' 
			frameBorder='0' 
			scrolling='no' 
			marginHeight='0' 
			marginWidth='0' 
			src={`https://maps.google.com/maps?q=${props.lat},${props.lng}&z=14&amp&output=embed`}
		>
		</iframe>
	);
}

export default UserMap;