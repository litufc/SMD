import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Pages/Home';
import Keys from './Pages/Keys';
import Resources from './Pages/Resources';
import Search from './Pages/Search';
import Profile from './Pages/Profile';
import Weeks from './Pages/Weeks';
import Admin from './Pages/Admin';

const Routes = createAppContainer(
    createStackNavigator({
        Home,
        Keys,
        Resources,
        Search,
        Profile,
        Weeks,
        Admin
    }, {
        headerMode: 'none',
        navigationOptions: {headerVisible: false,}
    })
);

export default Routes;