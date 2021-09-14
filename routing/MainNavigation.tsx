import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { CardStyleInterpolators } from '@react-navigation/stack';

import { MainStack, Routes } from './routes';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#e1e1e1',
    },
};

const MainNavigation = (): React.ReactElement => {
    return (
        <NavigationContainer theme={Theme}>
            <MainStack.Navigator
                initialRouteName={Routes.Home}
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <MainStack.Screen
                    name={Routes.Home}
                    component={Home}
                    options={{
                        headerTitleAlign: 'center',
                        title: 'Launchpads',
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#292929',
                        },
                    }}
                />
                <MainStack.Screen
                    name={Routes.Details}
                    component={Details}
                    options={{
                        headerTitleAlign: 'center',
                        title: 'Launch Details',
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#292929',
                        },
                    }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
export default MainNavigation;
