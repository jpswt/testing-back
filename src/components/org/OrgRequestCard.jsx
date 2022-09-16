import React from 'react';
import '../../styles/RequestCard.css';

function OrgRequestCard(props) {
	const {
		name,
		email,
		start_date,
		start_time,
		time_span,
		message,
		created_on,
	} = props;
	console.log('RequestCard props: ', props);
	let orgTitle = name.toUpperCase();

	return (
		<div className="requestCard">
			<li>
				<div className="titleBar">
					<p>{orgTitle}</p>
				</div>
				{/* <p>Email: {email}</p> */}
				<p>Sent on: {created_on}</p>
				<p>Start Date: {start_date}</p>
				<p>Start Time: {start_time}</p>
				<p>Available for: {time_span}</p>
				{/* <p>Message:{message}</p> */}
			</li>
		</div>
	);
}

export default OrgRequestCard;
