import Link from 'next/link';

import Experiencies from './Experiences';
import Skills from './Skills';

const SecondSection = () => {
	return (
		<div className='row'>
			<div className='col-md-4'>
				<div className='card mt-3' style={{ height: 'auto' }}>
					<div className='card body bg-light p-3'>
						<h1>Skills</h1>
						{/** Skill Progress  */}
						<Skills />
					</div>
				</div>
			</div>

			{/** Experiences Section  */}
			<div className='col-md-8'>
				<div className='card mt-3'>
					<div className='card body bg-light p-3'>
						<h1>Experience</h1>

						<ul>
							<Experiencies />
						</ul>

						<Link href='/experiences'>
							<a className='btn btn-light'>Know More</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
