import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './Pages/Home';
import Keys from './Pages/Keys';
import Resources from './Pages/Resources';
import SearchLocations from './Pages/SearchLocations';
import Profile from './Pages/Profile';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Keys,
        Resources,
        SearchLocations,
        Profile
    })
);

export default Routes;