import '../styles/global.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default MyApp;
