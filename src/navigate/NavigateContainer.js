import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Intro from '../screen/Intro';
import ListStore from '../screen/ListStore';
import ListProduct from '../screen/ListProduct';

const Stack = createNativeStackNavigator();

const NavigateContainer = () => {
	return (
		<NavigateContainer>
			<Stack.Navigator>
				<Stack.Screen name="intro" component={Intro} />
				<Stack.Screen name="list-store" component={ListStore} />
				<Stack.Screen name="list-product" component={ListProduct} />
			</Stack.Navigator>
		</NavigateContainer>
	);
};

export default NavigateContainer;
