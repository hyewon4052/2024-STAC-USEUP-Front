import './gesture-handler';
import * as React from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* 홈 탭 */
import HomeScreen from './screens/home/HomeScreen';
import HomeMoreScreen from './screens/home/HomeMoreScreen';
import IssueBlueScreen from './screens/more/IssueBlueScreen';
import IssueRedScreen from './screens/more/IssueRedScreen';
import IssueYellowScreen from './screens/more/IssueYellowScreen';
import ReformScreen from './screens/more/ReformScreen';
import GuideScreen from './screens/more/GuideScreen';
/* 스토어 탭 */
import StoreScreen from './screens/store/StoreScreen';
import BasketScreen from './screens/store/BasketScreen';
import NCdinosbagScreen from './screens/store/NCdinosbagScreen';

import { RootStackParamList } from './types';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeMore"
                    component={HomeMoreScreen}
                    options={{
                        headerTitle: () => <HeaderTitle/>,
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="IssueBlue"
                    component={IssueBlueScreen}
                    options={{
                        headerTitle: () => <HeaderTitle/>,
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="IssueRed"
                    component={IssueRedScreen}
                    options={{
                        headerTitle: () => <HeaderTitle/>,
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="IssueYellow"
                    component={IssueYellowScreen}
                    options={{
                        headerTitle: () => <HeaderTitle/>,
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="Reform"
                    component={ReformScreen}
                    options={{
                        headerTitle: () => <HeaderTitle/>,
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="Store"
                    component={StoreScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Basket"
                    component={BasketScreen}
                    options={{
                        headerTitle: '장바구니',
                        headerTitleAlign: 'center',
                        headerTitleStyle: styles.title,
                    }}
                />
                <Stack.Screen
                    name="NCBag"
                    component={NCdinosbagScreen}
                    options={{
                        headerTitle: '',
                        headerStyle: {
                          backgroundColor: 'transparent',
                        },
                        headerTransparent: true,
                        headerLeft: undefined,
                      }}
                />
                <Stack.Screen
                    name="Guide"
                    component={GuideScreen}
                    options={{
                        headerTitle: '유즈업 이용 가이드',
                        headerTitleAlign: 'center',
                        headerTitleStyle: styles.title,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator style={styles.BottomMenu}>
            <Tab.Screen name="홈" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="수거" component={HomeScreen}/>
            <Tab.Screen name="스토어" component={StoreScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="마이페이지" component={StoreScreen}/>
        </Tab.Navigator>
  );
}

const HeaderTitle = () => (
    <Text style={styles.title}>환경 이슈</Text>
);
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});