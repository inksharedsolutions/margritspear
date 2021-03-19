import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/banner2';
import styles from './css/about-the-author.module.scss';

const Author = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Author</title>
			</Helmet>
			<Banner2 pagetitle="About the Author" />
			<div className="main-nonhome">
				<div className="container">
					<div className="row">
						<div className={`col-lg-6 ${styles.aboutTheAuthorImg}`}>
							<img src="../author.jpg" alt="Author" />
						</div>
						<div className={`col-lg-6 ${styles.aboutTheAuthorContents}`}>
							<h2 className="title">
								<span>Margrit</span> <span>Spear</span>
							</h2>
							<p>
								Margrit Spear holds a Ph.D. in Counseling Psychology from the University of Humanistic
								Studies in San Diego. She is a California licensed Marriage, Family and Child Counselor,
								former druggist, researcher, life coach and author of the book: Life-Changing Explosion
								of Consciousness, Introduction to Holographic Psychology. She is currently president of
								LACCRS, an independent research group that has vested 50 years in examining the
								interrelationship between mind, body and spirit. Born in Switzerland, she has a
								multi-cultural background and enjoys diverse approaches in the field of psychology,
								philosophy and religion. Professional Experiences include: research and development for
								the National Institute for Mental Health for the homeless population, the
								schizophrenics, drug addicts and alcoholics, crisis counselor, academic and
								psychological counselor for a local college, lecturer for multiple school projects,
								developed self-esteem program for students and administrators, private practice, owned
								and operated retail business, staff trainer, artist and poet. Papers have been published
								for the University of Science and Philosophy, for the Association for Humanistic
								Psychology and for LACCRS, a non for profit organization established in 1961.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Author;
