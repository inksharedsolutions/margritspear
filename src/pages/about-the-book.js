import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/banner2';
import styles from './css/about-the-book.module.scss';
import { DiscussionEmbed } from 'disqus-react';

const Book = (props) => {
	const slug = props.location.href;
	const disqusConfig = {
		shortname: 'margrit-spear',
		config: { identifier: 12, slug }
	};

	return (
		<Layout>
			<Helmet>
				<title>About the Book</title>
			</Helmet>
			<Banner2 pagetitle="About the Book" />
			<div className="main-nonhome">
				<div className="container">
					<div className="row">
						<div className={`col-lg-6 ${styles.aboutTheBookImg}`}>
							<img src="../book1.jpg" alt="Book" />
						</div>
						<div className={`col-lg-6 ${styles.aboutTheBookContents}`}>
							<h2 className="title">
								Life-Changing Explosion of Consciousness: Introduction to Holographic Psychology
							</h2>
							<p>
								Holographic Psychology is the birth of a revolutionary course of understanding that all
								comprehension and associated behavior is being subjectively determined and manifested as
								part of the individual’s psychological dynamics. It presents a giant leap in awareness,
								recognizing that all language is a symbolic means that reflects people, places, or
								things based on the person’s own accepted worldview.
							</p>
							<p>
								Holographic Psychology is surely one of the most important discoveries, revealing that
								the self-image is part of a process of human perception that evolves through three
								different realities.
							</p>
							<p>
								The principles of Holographic Psychology hold a viable model for world peace and provide
								an end to relationship issues or being a victim of any sort.
							</p>
							<p>
								Holographic Psychology holds the key to a healthier, happier life as it exposes newfound
								freedom. The principles are based on the person’s potential and not his or her
								pathology.
							</p>

							<ul className={`${styles.booklinks}`}>
								<li>
									<b>Ebook:</b>
								</li>
								<li>
									<a
										href="https://www.amazon.com/Life-Changing-Explosion-Consciousness-Introduction-Holographic-ebook/dp/B07GC8RRC1/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Amazon
									</a>
								</li>
								<li>
									<a
										href="https://www.barnesandnoble.com/w/life-changing-explosion-of-consciousness-margrit-spear/1119625585?ean=9781643451398"
										target="_blank"
										rel="noopener noreferrer"
									>
										Barnes &amp; Noble
									</a>
								</li>
							</ul>

							<ul className={`${styles.booklinks}`}>
								<li>
									<b>Paperback:</b>
								</li>
								<li>
									<a
										href="https://www.amazon.com/Life-Changing-Explosion-Consciousness-Introduction-Holographic/dp/1643451383/"
										target="_blank"
										rel="noopener noreferrer"
									>
										Amazon
									</a>
								</li>
								<li>
									<a
										href="https://www.barnesandnoble.com/w/life-changing-explosion-of-consciousness-margrit-spear/1119625585"
										target="_blank"
										rel="noopener noreferrer"
									>
										Barnes &amp; Noble
									</a>
								</li>
								<li>
									<a
										href="https://www.booksamillion.com/p/Life-Changing-Explosion-Consciousness/Margrit-Spear/9781643451381"
										target="_blank"
										rel="noopener noreferrer"
									>
										Books-A-Million
									</a>
								</li>
							</ul>
						</div>
						<div className={`col-lg-12 ${styles.commentSection}`}>
							<div id="disqus_thread">
								<DiscussionEmbed {...disqusConfig} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Book;
