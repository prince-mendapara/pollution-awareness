import Intro from 'features/home/component/intro';
import LocationMap from '../component/locationMap';
import SensorsList from '../component/sensorsList';

const Home: React.FC = () => {
	return (
		<section className='main-app'>
			<div className='container'>
				<Intro />
				<LocationMap />
				<SensorsList />
			</div>
		</section>
	);
};

export default Home;
