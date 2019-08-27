import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './Pages/Home';
import Keys from './Pages/Keys';
import Resources from './Pages/Resources';
import SearchLocations from './Pages/SearchLocations';
import Profile from './Pages/Profile';
import Weeks from './Pages/Weeks';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Keys,
        Resources,
        SearchLocations,
        Profile,
        Weeks
    })
);

export default Routes;