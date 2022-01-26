import { experiences } from '../utils/profile/data';

const Experiencies = () => {
	return experiences.map(({ title, description, from, to = 'actualy' }, i) => (
		<li key={i}>
			<h3>{title}</h3>
			<h5>
				{from} - {to}
			</h5>
			<p>{description}</p>
		</li>
	));
};

export default Experiencies;
