const Intro: React.FC = () => {
	return (
		<div className='intro-section flex flex--column align-items--center'>
			<p className='main-title text--white text--uppercase font--extra-heavy text--center mt--20 mb--20'>
				Pollution Awareness
			</p>
			<div className='details_wrapper mt--20 mb--20'>
				<p className='title mb--20 text--white font-size--lg font--extra-bold'>Go green to breathe clean.</p>
				<ul>
					<li className='description text--white mb--10'>
						Air pollution is any physical, chemical, or biological change in the air. A certain percentage
						of the gas is present in the atmosphere. Increasing or decreasing the composition of these
						gasses is detrimental to survival. This imbalance in gas composition causes an increase in
						global temperature which is called global warming.
					</li>
					<li className='description text--white mb--10'>
						Air pollution created by man-made resources is also changing the Earth’s atmosphere. It is
						causing the depletion of the ozone layer and letting in more harmful radiation from the Sun. The
						greenhouse gasses released into the atmosphere prevents heat from escaping back into space and
						leads to a rise in global average temperatures. Global warming affects the average sea-level and
						increases the spread of tropical diseases.
					</li>
					<li className='description text--white mb--10'>
						Air pollution occurs when large amounts of gas and tiny particles are released into the air and
						the ecological balance is disturbed. Each year millions of tons of gasses and particulate matter
						are emitted into the air.
					</li>
					<li className='description text--white mb--10'>
						There are a number of solutions for reducing air pollution, and it can start with every
						individual. It can be controlled by reducing the use of personal automobiles and switching to
						healthier modes such as cycling, using public transport, or resorting to methods such as
						carpooling. Since a majority of our power still comes from fossil fuels, decreasing power
						consumption can also significantly reduce air pollution.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Intro;
