import Layout from '../components/Layout';
import Header from '../components/Header';
import SecondSection from '../components/SecondSection';
import Portfolio from '../components/Portfolio';

const Index = () => {
	return (
		<Layout>
			{/** Header card */}
			<Header />

			{/** Second section */}
			<SecondSection />

			{/** Portfolio section */}
			<Portfolio />
		</Layout>
	);
};

export default Index;
