import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { ImFire } from 'react-icons/im';

import '../../styles/OrgsCard.css';

const OrgInfo = (props) => {
	const {
		id,
		name,
		username,
		email,
		address,
		phone,
		handleOpen,
		handleClick,
		selectOrg,
	} = props;
	console.log('ID and select org', selectOrg.id);

	const phoneConvert = () => {
		let formatPhone = `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(
			6,
			10
		)}`;
		return formatPhone;
	};

	return (
		<div className="orgsCard">
			<li>
				<p>{name}</p>
				<p>{address}</p>
				<p>
					<FaPhoneAlt
						style={{ marginRight: '10px', paddingTop: '4px', width: '12px' }}
					/>
					{phoneConvert()}
				</p>
				<p>
					<FaEnvelope
						style={{ marginRight: '10px', paddingTop: '4px', width: '12px' }}
					/>
					{email}
				</p>
				<div className="btnContainer">
					<button
						id={username}
						onClick={(e) => {
							handleClick(e);
							handleOpen(e);
						}}
					>
						<span>
							Send Spark <ImFire />
						</span>
					</button>
				</div>
			</li>
		</div>
	);
};

export default OrgInfo;
