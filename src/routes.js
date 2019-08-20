import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './Pages/Home';
import Keys from './Pages/Keys';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        Keys,
    })
);

export default Routes;