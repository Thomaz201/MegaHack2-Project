import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/index';
import FirstPage from './pages/firstpage/index';
import Register from './pages/register/index';
import CardRegister from './pages/cardregister/index';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='FirstPage' component={FirstPage} />
        <AppStack.Screen name='Register' component={Register} />
        <AppStack.Screen name='CardRegister' component={CardRegister} />
        <AppStack.Screen name='Home' component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
