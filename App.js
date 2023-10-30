import DataProvider from './src/data/DataProvider';
import NavigateContainer from './src/navigate/NavigateContainer';

export default function App() {
	return (
		<DataProvider>
			<NavigateContainer />
		</DataProvider>
	);
}
