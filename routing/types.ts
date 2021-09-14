import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Routes, StackParamList } from './routes';

export type MainNavigationProp<RouteName extends keyof StackParamList = Routes> =
    StackNavigationProp<StackParamList, RouteName>;

export type MainRoutesProp<RouteName extends keyof StackParamList = Routes> = RouteProp<
    StackParamList,
    RouteName
>;
