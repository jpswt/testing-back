import React, { useCallback, useState, useMemo, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const containerStyle = {
	width: '100%',
	height: '400px',
	marginBottom: '2rem',
};

const Map = (props) => {
	const { allOrgs } = props;
	console.log('Map props are:', allOrgs);
	const mapRef = useRef();
	const center = useMemo(() => ({ lat: 30.266, lng: -97.733 }), []);
	const options = useMemo(
		() => ({
			disableDefaultUI: true,
			clickableIcons: false,
			mapId: '83c2d4e1e9177d04',
		}),
		[]
	);
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [map, setMap] = useState(null);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyAfQRfxhtSDCA1NKKWRrS-cQ4zB4fHoZEU',
	});

	const mapStyle = useCallback((map) => (mapRef.current = map), []);

	const onLoad = useCallback((map) => {
		const geocoder = new window.google.maps.Geocoder();
		geocoder
			.geocode({ address: '1806 W. Stassney Ln, ste. 106 Austin, TX 78745' })
			.then((res) => {
				// full response results
				console.log('fetch results are:', res.results);

				// formatted address from results
				console.log(
					'fetch formatted address:',
					res.results[0].formatted_address
				);

				// geometry (lat & lng)
				setLat(res.results[0].geometry.location.lat());
				setLng(res.results[0].geometry.location.lng());
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	const onUnmount = useCallback((map) => {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			options={options}
			zoom={11}
			mapStyle={mapStyle}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Marker
				position={{ lat: lat, lng: lng }}
				name="Testing"
				color="secondary"
			/>
		</GoogleMap>
	) : (
		<></>
	);
};

export default Map;
