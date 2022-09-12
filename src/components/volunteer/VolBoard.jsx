import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'cookie';

import Map from './Map';
import SendRequest from './SendRequest';

import '../../styles/VolBoard.css';
import OrgInfo from '../org/OrgsCard';
// import NavBar from '../NavBar';

import '../../styles/TimePicker.css';

function VolBoard(props) {
	const cookies = cookie.parse(document.cookie);
	const { user } = props;
	console.log('props', user);

	const [allOrgs, setAllOrgs] = useState([]);
	const [selectOrg, setSelectOrg] = useState('');

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		axios
			.get('https://light-path.herokuapp.com/users/orgsList', {
				headers: {
					Authorization: cookies.jwt,
				},
			})
			.then((response) => {
				setAllOrgs(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [cookies.jwt]);

	const handleClick = (e) => {
		console.log('click allOrgs is:', allOrgs);
		for (let i = 0; i < allOrgs.length; i++) {
			if (allOrgs[i].username === e.target.id) {
				setSelectOrg(allOrgs[i]);
				console.log('All orgs I', allOrgs[i]);
			}
		}
	};

	console.log('list of allOrgs', allOrgs);

	return (
		<div>
			{/* <NavBar /> */}
			<div className="volBoard">
				<div className="content">
					<div className="main">
						<h3>
							{user.name.charAt(0).toUpperCase()}
							{user.name.slice(1)}'s SparkBoard
						</h3>
						<div className="mapBox">
							<Map allOrgs={allOrgs} />
						</div>
						<div className="orgCard">
							<ol>
								{allOrgs.map((org) => (
									<OrgInfo
										key={org.name}
										id={org.username}
										username={org.username}
										name={org.name}
										email={org.email}
										address={org.address}
										phone={org.phone}
										handleOpen={handleOpen}
										handleClick={handleClick}
										selectOrg={selectOrg}
									/>
								))}
							</ol>
						</div>
					</div>
					<div>
						<SendRequest
							handleClose={handleClose}
							selectOrg={selectOrg}
							open={open}
							user={user}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VolBoard;
