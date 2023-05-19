import GoogleMapReact from 'google-map-react';
import { useCallback } from 'react';
import { dummyData } from './dummyData';
const LocationMap: React.FC = () => {
	const options = {
		center: {
			lat: 23.0379,
			lng: 72.5101
		},
		zoom: 11
	};

	const position = dummyData.map((item: any) => ({
		lat: item.latitude,
		lng: item.longitude,
		location: item.location
	}));

	const renderMarkers = useCallback((map: any, maps: any, position: any) => {
		position.forEach((element: any) => {
			const marker = new maps.Marker({
				position: {
					lat: element.lat,
					lng: element.lng
				},
				map,
				title: element.location
			});
			return marker;
		});
	}, []);

	return (
		<div className='location-section flex flex--column align-items--start justify-content--center mt--20'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY as string }}
				defaultCenter={options.center}
				defaultZoom={options.zoom}
				onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, position)}
			/>
		</div>
	);
};

export default LocationMap;
