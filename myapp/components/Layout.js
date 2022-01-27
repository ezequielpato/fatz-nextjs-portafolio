import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, footer = true, dark = false }) => {
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
		<div className={dark && 'bg-dark'}>
			<Navbar />
			<main className='container pb-4'>{children}</main>
			{footer && <Footer />}
		</div>
	);
};

export default Layout;
