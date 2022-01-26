const Header = () => {
	return (
		<header className='row'>
			<div className='col-md-12'>
				<div className='card card-body bg-secondary text-light'>
					<div className='row'>
						<div className='col-md-4 pr-4'>
							<img
								src='ryan-ray-profile2.jpeg'
								alt='profile-picture'
								className='img-fluid w-auto'
							/>
						</div>
						<div className='col-md-8'>
							<h1 className='font-weight-normal'>Ryan Ray</h1>
							<h3 className='font-weight-light'>FullStack Developer</h3>
							<p className='font-weight-light'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cum saepe
								magni, mollitia numquam architecto neque vero, omnis quibusdam quidem
								fugiat. Voluptas pariatur consequatur earum maiores, magnam quis, sint
								impedit eum, nesciunt vero nihil minus facilis commodi aliquid incidunt cum.
							</p>
							<a href='/hireme'>Hire Me</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
