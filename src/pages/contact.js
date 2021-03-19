import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/banner2';
import Form from '../components/form';
import styles from './css/contact.module.scss';

const Contact = () => {
	return (
		<Layout>
			<Helmet>
				<title>Contact</title>
			</Helmet>
			<Banner2 pagetitle="Contact" />
			<div className="main-nonhome">
				<div className="container">
					<div className="row">
						<div className={`col-lg-12`}>
							<p>
								Hello! Are you having a good day? Anyway, if you have any concerns or you just want to
								share something, please feel free to drop me a line. I would love to hear anything from
								you.
							</p>
						</div>
						<div className={`col-lg-6`}>
							<h2 className="title">Get in Touch</h2>
							<Form />
						</div>
						<div className={`col-lg-6`}>
							<h2 className="title">Information</h2>
							<p>
								831 N Tatnall Street, Suite M #188<br />Wilmington, DE 19801
							</p>
							<p>
								<a href="tel:8883237009">888-323-7009</a>
							</p>
							<p>
								<a href="mailto:publish@stratton-press.com">publish@stratton-press.com</a>
							</p>

							<iframe
								className={`${styles.map}`}
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12271.023799138637!2d-75.5511194!3d39.7451326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1162fb82ac3090ab!2sStratton%20Press%20Inc.!5e0!3m2!1sen!2sph!4v1584126833957!5m2!1sen!2sph"
								width="500"
								height="280"
								frameborder="0"
								allowfullscreen=""
								aria-hidden="false"
								tabindex="0"
								title="Google map"
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
