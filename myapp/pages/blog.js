import Layout from '../components/Layout';

const Blog = () => {
	return (
		<Layout footer={false} dark>
			<div>
				<h1>Blog</h1>
			</div>
		</Layout>
	);
};

export default Blog;

// <div className={dark && 'bg-dark'}></div>
