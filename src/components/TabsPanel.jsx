// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
// 	const { children, value, index, ...other } = props;

// 	return (
// 		<div
// 			role="tabpanel"
// 			hidden={value !== index}
// 			id={`simple-tabpanel-${index}`}
// 			aria-labelledby={`simple-tab-${index}`}
// 			{...other}
// 		>
// 			{value === index && (
// 				<Box sx={{ p: 3 }}>
// 					<Typography>{children}</Typography>
// 				</Box>
// 			)}
// 		</div>
// 	);
// }

// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.number.isRequired,
// 	value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
// 	return {
// 		'id': `simple-tab-${index}`,
// 		'aria-controls': `simple-tabpanel-${index}`,
// 	};
// }

// export default function TabsPanel(props) {
// 	const { user } = props;
// 	const [value, setValue] = React.useState(0);

// 	const handleChange = (event, newValue) => {
// 		setValue(newValue);
// 	};

// 	return (
// 		<Box sx={{ width: '100%' }}>
// 			<Box
// 				sx={{
// 					borderBottom: 1,
// 					borderColor: 'var(--secondary-color)',
// 					display: 'inline-flex',
// 					width: '100%',
// 					justifyContent: 'space-between',
// 				}}
// 			>
// 				<h3>
// 					{user.name.charAt(0).toUpperCase()}
// 					{user.name.slice(1)}'s Sparks
// 				</h3>
// 				<Tabs
// 					value={value}
// 					onChange={handleChange}
// 					variant="scrollable"
// 					scrollButtons="auto"
// 					aria-label="scrollable auto tabs example"
// 				>
// 					<Tab label="Pending Sparks" {...a11yProps(0)} />
// 					<Tab label="Accepted Sparks" {...a11yProps(1)} />
// 					<Tab label="Declined Sparks" {...a11yProps(2)} />
// 				</Tabs>
// 			</Box>
// 			<TabPanel value={value} index={0}>
// 				Item One
// 			</TabPanel>
// 			<TabPanel value={value} index={1}>
// 				Item Two
// 			</TabPanel>
// 			<TabPanel value={value} index={2}>
// 				Item Three
// 			</TabPanel>
// 		</Box>
// 	);
// }

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ bgcolor: 'gray' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="scrollable"
					scrollButtons="auto"
					aria-label="scrollable auto tabs example"
				>
					<Tab label="Item One" />
					<Tab label="Item Two" />
					<Tab label="Item Three" />
					<Tab label="Item Four" />
					<Tab label="Item Five" />
					<Tab label="Item Six" />
					<Tab label="Item Seven" />
				</Tabs>
			</Box>
		</Box>
	);
}
