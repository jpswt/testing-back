import React from 'react';
import '../../styles/RequestCard.css';

function RequestCard(props) {
	const { name, start_time, time_span, message, created_on } = props;
	console.log('RequestCard props: ', props);

	return (
		<div className="requestCard">
			<li>
				<div className="titleBar">
					<p>{name}</p>
				</div>
				<p>Sent on: {created_on}</p>
				<p>Start Time: {start_time}</p>
				<p>Duration: {time_span}</p>
			</li>
		</div>
	);
}

export default RequestCard;
