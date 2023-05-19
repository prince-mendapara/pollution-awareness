import isEmpty from 'lodash/isEmpty';
import { useCallback, useEffect, useState } from 'react';
import { IFilters, ISensor } from '../interface/home.interface';
import { dummyData } from './dummyData';
import Filters from './filterSection';

const severityMapper: { [key: string]: string } = {
	Good: '#36c716',
	Moderate: '#f5d226',
	Unhealthy: '#c71a1a'
};

const SensorsList: React.FC = () => {
	const [sensors, setSensors] = useState<ISensor[]>([...dummyData]);
	const [filters, setFilters] = useState<IFilters>({} as IFilters);
	const [appliedFilters, setAppliedFilters] = useState({
		location: '',
		temperature: '',
		severity: '',
		pm25: '',
		co: ''
	});

	type typeOf = 'location';
	const dropDowns = useCallback(() => {
		const updatedFilters: IFilters = {};

		['location', 'temperature', 'severity', 'pm25', 'co'].forEach((key) => {
			const data = dummyData.map((item) => item[key as typeOf]).sort();
			const filterData = data.filter((item, index, arr) => arr.indexOf(item) === index);
			const dropdown = filterData.map((item) => {
				return { label: item, value: item };
			});
			updatedFilters[key as string] = dropdown;
		});

		setFilters({ ...updatedFilters });
	}, []);

	const handleUpdateFilters = (key: string, value: string | number) => {
		const updatedFilters = { ...appliedFilters, [key]: value };
		setAppliedFilters(updatedFilters);
		fetchFilterdData(key, value);
	};

	const fetchFilterdData = (key: string, value: string | number) => {
		const updatedSensors = [...sensors];
		if (value === '') {
			setSensors([...dummyData]);
			return;
		}
		const filterData = updatedSensors.filter((item) => item[key as typeOf] === value);
		setSensors(filterData);
	};

	useEffect(() => {
		setSensors(dummyData);
		dropDowns();
	}, [dropDowns]);

	return (
		<div className='sensors-section flex flex--column align-items--start justify-content--center'>
			<h1 className='main-title'>List of installed sensors in the city.</h1>
			<Filters filters={filters} filterValues={appliedFilters} handleOnChange={handleUpdateFilters} />
			{!isEmpty(sensors) &&
				sensors.map((sensor: ISensor) => {
					return (
						<div key={sensor.id} className='sensor-card'>
							<div className='title_wrapper flex align-items--center justify-content--start'>
								<p className='title font-size--xxl font--medium'>{sensor.location}</p>
								<div
									title={sensor.severity}
									className='severity-box cursor--pointer'
									style={{ backgroundColor: `${severityMapper[sensor.severity as string]}` }}
								/>
							</div>
							<div className='flex flex--wrap'>
								<div className='item flex align-items--center mb--10'>
									<p className='item_title'>Temperature :</p>
									<p className='item_value'>{sensor.temperature}</p>
								</div>
								<div className='item flex align-items--center mb--10'>
									<p className='item_title'>PM2.5 :</p>
									<p className='item_value'>{sensor.pm25}</p>
								</div>
								<div className='item flex align-items--center mb--10'>
									<p className='item_title'>CO :</p>
									<p className='item_value'>{sensor.co}</p>
								</div>
								<div className='item flex align-items--center mb--10'>
									<p className='item_title'>Severity :</p>
									<p className='item_value'>{sensor.severity}</p>
								</div>
								<div className='item flex align-items--center mb--10'>
									<p className='item_title'>Sensor type :</p>
									<p className='item_value'>{sensor.sensor_type}</p>
								</div>
								<div className='item flex align-items--center mb--10'>
									<p className='item_title'>Installation Date :</p>
									<p className='item_value'>{sensor.installation_date}</p>
								</div>
							</div>
							<p className='description'>{sensor.description}</p>
						</div>
					);
				})}
			{isEmpty(sensors) && <h1 className='mb--20 mt--20 font-size--xxl'>No Data Found.</h1>}
		</div>
	);
};

export default SensorsList;
