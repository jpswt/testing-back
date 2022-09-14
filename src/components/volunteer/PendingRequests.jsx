import React, { useState } from 'react';
import RequestCard from './RequestCard';
import ReactPaginate from 'react-paginate';

import '../../styles/PendingRequests.css';

function PendingRequests(props) {
	const { pending } = props;
	console.log('Pending props: ', props.pending);

	// const [requests, setRequests] = useState(0);
	const [pageNumber, setPageNumber] = useState(0);

	const requestsPerPage = 6;
	const pageVisited = pageNumber * requestsPerPage;
	const pageCount = Math.ceil(pending.length / requestsPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	const displayRequests = pending
		.slice(pageVisited, pageVisited + requestsPerPage)
		.map((requests, index) => {
			let daySent = requests.created_on;
			let date =
				daySent.slice(5, 7) +
				'-' +
				daySent.slice(8, 10) +
				'-' +
				daySent.slice(0, 4);
			return (
				<div className="pendingReq" key={index}>
					<ol>
						<RequestCard
							key={index}
							name={requests.name}
							org_id={requests.org_id}
							start_time={requests.start_time}
							time_span={requests.time_span}
							message={requests.message}
							created_on={date}
						/>
					</ol>
				</div>
			);
		});
	if (props.declined.length === 0) {
		return 'Currently no declined requests';
	} else {
		return (
			<div>
				<div className="test">{displayRequests}</div>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={'pagination'}
					activeClassName={'active'}
				/>
			</div>
		);
	}
}

export default PendingRequests;
