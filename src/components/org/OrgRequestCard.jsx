import React from 'react';
import { Button } from '@mui/material';
import '../../styles/RequestCard.css';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { MdCancelPresentation } from 'react-icons/md';

function OrgRequestCard(props) {
	const {
		id,
		name,
		email,
		start_date,
		start_time,
		time_span,
		message,
		created_on,
		handleAccept,
		handleDecline,
		accepted,
	} = props;
	console.log('RequestCard props: ', props);
	let orgTitle = name.toUpperCase();

	if (accepted === null) {
		return (
			<div className="requestCard" name={id}>
				<li>
					<div className="titleBar">
						<p>{orgTitle}</p>
					</div>
					{/* <p>Email: {email}</p> */}
					<p>
						<span>Sent on:</span> {created_on}
					</p>
					<p>
						<span>Start Date: </span>
						{start_date}
					</p>
					<p>
						<span>Start Time:</span> {start_time}
					</p>
					<p>
						<span>Available for:</span> {time_span}
					</p>
					<p>
						<span>View Details</span>
					</p>
					<div>
						<div className="buttonContainer">
							<Button
								variant="contained"
								className="accept"
								onClick={handleAccept}
								endIcon={<AiOutlineCheckSquare />}
								id={id}
								name="accept"
							>
								Accept
							</Button>
							<Button
								variant="contained"
								className="decline"
								onClick={handleDecline}
								endIcon={<MdCancelPresentation />}
								id={id}
								name="decline"
							>
								Decline
							</Button>
						</div>
					</div>
				</li>
			</div>
		);
	} else {
		return (
			<div className="requestCard" name={id}>
				<li>
					<div className="titleBar">
						<p>{orgTitle}</p>
					</div>
					{/* <p>Email: {email}</p> */}
					<p>
						<span>Sent on:</span> {created_on}
					</p>
					<p>
						<span>Start Date:</span> {start_date}
					</p>
					<p>
						<span>Start Time: </span>
						{start_time}
					</p>
					<p>
						<span>Available for: </span>
						{time_span}
					</p>
					<p>
						<span>Message:</span> {message}
					</p>

					<p></p>
				</li>
			</div>
		);
	}
}

export default OrgRequestCard;

{
	/* <Button
variant="contained"
onClick={handleClose}
endIcon={<FaRegHandPeace />}
sx={{
	backgroundColor: 'var(--secondary-color)',
	padding: '.5rem 1rem',
	width: '6rem',
}}
>
Close
</Button> */
}
