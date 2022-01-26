import Link from 'next/link';
import { projects } from '../utils/profile/data';

const Portfolio = () => {
	return (
		<div className='row'>
			<div className='col-md-12'>
				<div className='card card-body bg-dark  mt-3'>
					<div className='row'>
						<div className='col-md-12'>
							<h1 className='text-center text-light'>Portfolio</h1>
						</div>

						{projects.map(({ name, description, image }, i) => (
							<div className='col-md-4 p-2' key={i}>
								<div className='card h-100'>
									<div className='overflow'>
										<img src={image} alt='' className='card-img-top' />
									</div>
									<div className='card-body'>
										<h3>{name}</h3>
										<p>{description}</p>
										<a href='#'>Know more</a>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='text-center mt-4'>
						<Link href='/portfolio'>
							<a className='btn btn-outline-light'>More Projects</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
