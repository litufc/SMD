import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from './Pages/Home';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
    })
);

export default Routes;