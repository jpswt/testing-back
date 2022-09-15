import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'cookie';

import OrgTabs from './OrgTabs';
import '../../styles/VolRequests.css';

function VolRequests(props) {
	const cookies = cookie.parse(document.cookie);
	const { user } = props;
	console.log('props are:', user);

	const [accepted, setAccepted] = useState([]);
	const [declined, setDeclined] = useState([]);
	const [pending, setPending] = useState([]);

	useEffect(() => {
		// const { user } = props;

		axios
			.get(`https://light-path.herokuapp.com/users/orgRequest`, {
				headers: {
					Authorization: cookies.jwt,
				},
			})
			.then((response) => {
				let accepted = [];
				let declined = [];
				let pending = [];
				response.data.map((requests) => {
					switch (requests.accepted) {
						case 1:
							accepted.push(requests);
							break;
						case 0:
							declined.push(requests);
							break;
						default:
							pending.push(requests);
							break;
					}
				});
				setAccepted(accepted);
				setDeclined(declined);
				setPending(pending);

				console.log(response.data);
				console.log('pending', pending);
				console.log('accepted', accepted);
				console.log('declined', declined);
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
						<OrgTabs
							user={user}
							accepted={accepted}
							declined={declined}
							pending={pending}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VolRequests;
