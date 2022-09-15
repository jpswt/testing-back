import React from 'react';
import OrgRequestCard from './OrgRequestCard';

import '../../styles/Requests.css';

function LatestRequests(props) {
	const { allRequests } = props;
	console.log('all request props: ', props.allRequests);

	const displayRequests = allRequests.slice(0, 3).map((requests, index) => {
		let daySent = requests.created_on;
		let date =
			daySent.slice(5, 7) +
			'-' +
			daySent.slice(8, 10) +
			'-' +
			daySent.slice(0, 4);
		return (
			<div className="requestContainer" key={index}>
				<ol>
					<OrgRequestCard
						key={index}
						name={requests.name}
						email={requests.email}
						request_id={requests.id}
						start_time={requests.start_time}
						time_span={requests.time_span}
						message={requests.message}
						created_on={date}
					/>
				</ol>
			</div>
		);
	});

	return (
		<div>
			<div className="requestGrid">{displayRequests}</div>
		</div>
	);
}

export default LatestRequests;
