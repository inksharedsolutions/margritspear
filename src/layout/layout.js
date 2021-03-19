import React from 'react';
import Header from '../components/header';
import ParticlesBg from '../components/particlesbg';
import Footer from '../components/footer';
import Metadata from '../components/metadata';
import '../../static/css/normalize.scss';
import '../../static/css/grid.min.scss';
import '../../static/css/global.scss';

const Layout = (props) => {
	return (
		<div className={props.className}>
			<Metadata />
			<Header />
			<ParticlesBg />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
