import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import { Login } from "../pages";

const Stact = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stact.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stact.Screen name="Login" component={Login}/>
            </Stact.Navigator>
        </NavigationContainer>
    );
}

export default Routes;