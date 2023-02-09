import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './screen/home';
import Profile from './screen/profile';
const screens = {
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);