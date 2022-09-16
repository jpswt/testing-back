import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'cookie';
import LatestRequests from './LatestRequests';

import '../../styles/VolBoard.css';

function OrgBoard(props) {
	const cookies = cookie.parse(document.cookie);
	const { user } = props;
	console.log('props are:', user);

	const [allRequests, setAllRequests] = useState([]);

	useEffect(() => {
		axios
			.get(`https://light-path.herokuapp.com/users/orgRequest`, {
				headers: {
					Authorization: cookies.jwt,
				},
			})
			.then((response) => {
				let allRequests = [];
				response.data.map((requests) => {
					allRequests.push(requests);
					console.log('all requests:', allRequests);
				});
				setAllRequests(allRequests);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [cookies.jwt]);

	return (
		<div>
			<div className="volRequest">
				<div className="content">
					<div className="main">
						<h3>
							{user.name.charAt(0).toUpperCase()}
							{user.name.slice(1)}'s SparkBoard
						</h3>
						<h2>Latest</h2>
						<LatestRequests allRequests={allRequests} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default OrgBoard;
