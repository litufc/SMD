import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './Pages/Home';
import Keys from './Pages/Keys';
import Resources from './Pages/Resources';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Keys,
        Resources,
    })
);

export default Routes;