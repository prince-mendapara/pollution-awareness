import { useEffect, useState } from 'react';
import { IDropDownOption, IFilters } from '../interface/home.interface';
import React from 'react';
import Select from 'react-select';

interface IProps {
	filters: IFilters;
	filterValues: { [key: string]: string | number };
	handleOnChange: (key: string, value: string | number) => void;
}

export const selectedOption = (options: IDropDownOption[], value: string | number) => {
	return (options || []).filter((option) => option.value === value);
};

const Filters: React.FC<IProps> = (props) => {
	const { filters, filterValues, handleOnChange } = props;
	const [dropDown, setDropDown] = useState<IFilters>(filters as IFilters);

	useEffect(() => {
		setDropDown(filters);
	}, [filters]);

	return (
		<div className='flex width--full flex--wrap'>
			<div className='select-field'>
				<Select
					options={dropDown.location}
					placeholder='Select location'
					name='location'
					isClearable
					value={selectedOption(dropDown.location, filterValues.location)}
					onChange={(option) => handleOnChange('location', option ? option.value : '')}
				/>
			</div>
			<div className='select-field'>
				<Select
					options={dropDown.severity}
					placeholder='Select severity'
					name='severity'
					isClearable
					value={selectedOption(dropDown.severity, filterValues.severity)}
					onChange={(option) => handleOnChange('severity', option ? option.value : '')}
				/>
			</div>
			<div className='select-field'>
				<Select
					options={dropDown.temperature}
					placeholder='Select temperature'
					name='temperature'
					isClearable
					value={selectedOption(dropDown.temperature, filterValues.temperature)}
					onChange={(option) => handleOnChange('temperature', option ? option.value : '')}
				/>
			</div>
			<div className='select-field'>
				<Select
					options={dropDown.pm25}
					placeholder='Select pm2.5'
					name='pm25'
					isClearable
					value={selectedOption(dropDown.pm25, filterValues.pm25)}
					onChange={(option) => handleOnChange('pm25', option ? option.value : '')}
				/>
			</div>
			<div className='select-field'>
				<Select
					options={dropDown.co}
					placeholder='Select co'
					name='co'
					isClearable
					value={selectedOption(dropDown.co, filterValues.co)}
					onChange={(option) => handleOnChange('co', option ? option.value : '')}
				/>
			</div>
		</div>
	);
};

export default Filters;
