import Layout from '../components/Layout';
import Error from './_error';

const Github = ({ user, statusCode }) => {
	if (statusCode) {
		return <Error statusCode={statusCode} />;
	} else {
		return (
			<Layout footer={false} dark title='My Github'>
				<div className='row mt-5 mb-5 '>
					<div className='col-md-5 m-auto text-light vh-100'>
						<div className='card card-body d-flex justify-content-center text-center text-dark'>
							<h2>{user.name}</h2>
							<img
								src={user.avatar_url}
								alt='Image Perfil Github'
								className='rounded-circle mx-auto mt-3 mb-3'
								style={{ width: '90%' }}
							/>
							<p>{user.bio}</p>
							<a href={user.blog} target='_blank' className='btn btn-outline-secondary my-2'>
								My Blog
							</a>
							<a
								href={user.html_url}
								target='_blank'
								className='btn btn-outline-secondary my-2'
							>
								Go to Github
							</a>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
};

export async function getServerSideProps() {
	const res = await fetch('https://api.github.com/users/ezequielpato');
	const data = await res.json();
	const statusCode = res.status > 200 ? res.status : false;
	// console.log(res.status);
	// console.log(data);
	return {
		props: {
			user: data,
			statusCode,
		},
	};
}

export default Github;
