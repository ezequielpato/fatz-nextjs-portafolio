import Layout from '../components/Layout';

import skills from '../utils/profile/skills'
import experiences from '../utils/profile/experiences'

const Index = () => {
	return (
		<Layout>
			{/** Header card */}
			<header className='row'>
				<div className='col-md-12'>
					<div className='card card-body bg-secondary text-light'>
						<div className='row'>
							<div className='col-md-4'>
								<img
									src='ryan-ray-profile2.jpeg'
									alt='profile-picture'
									className='img-fluid'
								/>
							</div>
							<div className='col-md-8'>
								<h1 className='font-weight-normal'>Ryan Ray</h1>
								<h3 className='font-weight-light'>FullStack Developer</h3>
								<p className='font-weight-light'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cum
									saepe magni, mollitia numquam architecto neque vero, omnis quibusdam
									quidem fugiat. Voluptas pariatur consequatur earum maiores, magnam quis,
									sint impedit eum, nesciunt vero nihil minus facilis commodi aliquid
									incidunt cum.
								</p>
								<a href='/hireme'>Hire Me</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/** Second section */}
			<div className='row mt-3' >
				<div className='col-md-4 pr-2'>
					<div className='card'>
						<div className='card body bg-light p-3'>
							<h1>Skills</h1>

							{/** Skill Progress  */}
							{
								skills.map(({ skill, percentage }, i) => (
              <div className="pb-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
							))
						}
						</div>
					</div>
				</div>

				<div className='col-md-8'>
					<div className='card '>
						<div className='card body bg-light p-3'>
							<h1>Experience</h1>

							{/** Experiences Section  */}
							<ul>
							{
									experiences.map(({ title, description, from,to='actualy' }, i) => (
										<li key={i}>
											<h3>{title}</h3>
											<h5>{from} - {to}</h5>
											<p>{description}</p>
										</li>
								))
							}
							</ul>

						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
