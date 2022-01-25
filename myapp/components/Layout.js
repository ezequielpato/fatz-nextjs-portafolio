import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
		<Head>
			<title>my portfolio</title>
		</Head>
			<Navbar />
			<main className='container py-4'>
				{children}
			</main>
		</>
	);
};

export default Layout;
