import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen013423Navigator from '../features/BlankScreen013423/navigator';
import BlankScreen013422Navigator from '../features/BlankScreen013422/navigator';
import BlankScreen013414Navigator from '../features/BlankScreen013414/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen013423: { screen: BlankScreen013423Navigator },
BlankScreen013422: { screen: BlankScreen013422Navigator },
BlankScreen013414: { screen: BlankScreen013414Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
