import './gesture-handler';
import * as React from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/HomeScreen';
import StoreScreen from './screens/home/StoreScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Store"
                    component={StoreScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator style={styles.BottomMenu}>
            <Tab.Screen name="홈" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="수거"/>
            <Tab.Screen name="스토어" component={storeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="마이페이지"/>
        </Tab.Navigator>
  );
}