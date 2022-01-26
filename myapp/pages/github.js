import Layout from '../components/Layout';
import Error from './_error';

const Github = ({ user, statusCode }) => {
	if (statusCode) {
		return <Error statusCode={statusCode} />;
	} else {
		return (
			<Layout>
				<div className='row'>
					<div className='col-md-4 offset-md-4'>
						<div className='card card-body text-center'>
							<h2>{user.name}</h2>
							<img
								src={user.avatar_url}
								alt='Image Perfil Github'
								className='rounded-circle mt-4 mb-4'
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
	const res = await fetch('https://api.github.com/users/ezeddquielpato');
	const data = await res.json();
	const statusCode = res.status > 200 ? res.status : false;
	console.log(res.status);

	// console.log(data);
	return {
		props: {
			user: data,
			statusCode,
		},
	};
}

export default Github;
