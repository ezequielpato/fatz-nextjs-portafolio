import Link from 'next/link';

const Navbar = () => (
	<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
		<div className='container'>
			<Link href='/'>
				<a class='navbar-brand'>Simple Portfolio</a>
			</Link>
			<button
				class='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span class='navbar-toggler-icon'></span>
			</button>
			<div class='collapse navbar-collapse d-flex flex-row-reverse' id='navbarNav'>
				<ul class='navbar-nav'>
					<Link href='/blog'>
						<li class='nav-item'>
							<a class='nav-link'>Blog</a>
						</li>
					</Link>
					<Link href='/github'>
						<li class='nav-item'>
							<a class='nav-link'>Github</a>
						</li>
					</Link>
					<li class='nav-item'>
						<a class='nav-link disabled'>Disabled</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Navbar;
