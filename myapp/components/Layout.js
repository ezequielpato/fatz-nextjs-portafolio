import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouterChange = (url) => {
			console.log(url);
			NProgress.start();
		};

		router.events.on('routeChangeStart', handleRouterChange);

		router.events.on('routeChangeComplete', () => NProgress.done());

		return () => {
			router.events.off('routeChangeStart', handleRouterChange);
		};
	}, []);

	return (
		<>
			<Navbar />

			<main className='container py-4'>{children}</main>

			<Footer />
		</>
	);
};

export default Layout;
