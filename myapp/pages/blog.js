import Link from 'next/link';

import Layout from '../components/Layout';
import { posts } from '../utils/profile/data';

const PostCard = ({ post }) => (
	<div className='col-md-6 p-2'>
		<div className='card text-dark'>
			<div className='overflow'>
				<img src={post.imageURL} alt='' className='card-img-top' />
			</div>
			<div className='card-body'>
				<h1>{post.title}</h1>
				<p>{post.content}</p>
				<Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
					<button className='btn btn-light'>Read</button>
				</Link>
			</div>
		</div>
	</div>
);

const Blog = () => {
	return (
		<Layout title='My Blog' footer={false} dark>
			<div className='row'>
				{posts.map((post, i) => (
					<PostCard post={post} key={i} />
				))}
			</div>
		</Layout>
	);
};

export default Blog;
