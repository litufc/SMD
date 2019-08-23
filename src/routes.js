import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './Pages/Home';
import Keys from './Pages/Keys';
import Resources from './Pages/Resources';
import SearchLocations from './Pages/SearchLocations';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Keys,
        Resources,
        SearchLocations,
    })
);

export default Routes;