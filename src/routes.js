import { createStackNavigator } from 'react-navigation'

import Main from './screens/Main'
import Detail from './screens/Detail'

export default createStackNavigator({
	Main,
	Detail,
},
{
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#DA552F'
		},
		headerTintColor: '#FFF'
	}
})
