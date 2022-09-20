import React from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
// import '../../styles/RequestCard.css';
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

	return (
		<Container maxWidth="xl">
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Received On</TableCell>
						<TableCell>Volunteer Name</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>Start Time</TableCell>
						<TableCell>Time Span</TableCell>
						<TableCell>message</TableCell>
						<TableCell>Accept</TableCell>
						<TableCell>Decline</TableCell>
					</TableRow>
				</TableHead>
			</Table>
		</Container>
	);
}

export default OrgRequestCard;
