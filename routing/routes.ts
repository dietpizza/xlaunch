import { createStackNavigator } from '@react-navigation/stack';

import { LaunchDetails } from '../screens/Home';

export enum Routes {
    Home = 'Home',
    Details = 'Details',
}

export type StackParamList = {
    [Routes.Home]: undefined;
    [Routes.Details]: LaunchDetails;
};

export const MainStack = createStackNavigator<StackParamList>();
