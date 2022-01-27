import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { posts } from '../utils/profile/data';

const Post = () => {
	const router = useRouter();

	// console.log(router.query.title);

	const currentPosts = posts.filter((post) => post.title === router.query.title)[0];
	// console.log(currentPosts);

	return (
		<Layout footer={false} title={currentPosts.title}>
			<div className='text-center'>
				<img
					src={currentPosts.imageURL}
					alt=''
					className='img-fluid mb-4'
					style={{ width: '50%' }}
				/>
				<p>{currentPosts.content}</p>
			</div>
		</Layout>
	);
};

export default Post;
