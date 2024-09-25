import './gesture-handler';
import * as React from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
/* 홈 탭 */
import HomeScreen from './screens/home/HomeScreen';
import HomeMoreScreen from './screens/home/HomeMoreScreen';
import IssueBlueScreen from './screens/more/IssueBlueScreen';
import IssueRedScreen from './screens/more/IssueRedScreen';
import IssueYellowScreen from './screens/more/IssueYellowScreen';
import ReformScreen from './screens/more/ReformScreen';
import GuideScreen from './screens/more/GuideScreen';
/* 수거 탭 */
import Collect from './screens/Collect';
import CollectApply from './screens/CollectApply';
import CollectApplying from './screens/CollectApplying';
import CollectSuccess from './screens/CollectSuccess';
/* 스토어 탭 */
import StoreScreen from './screens/store/StoreScreen';
import BasketScreen from './screens/store/BasketScreen';
import NCdinosbagScreen from './screens/store/NCdinosbagScreen';
import InquiryDetailScreen from './screens/store/InquiryDetailScreen';
import OrderScreen from './screens/store/OrderScreen';
import PaymentScreen from './screens/store/PaymentScreen';
/* 마이페이지 탭 */
import MyPage from './screens/MyPage';
import AccountInformation from './screens/AccountInformation';
import Address from './screens/Address';
import Manage from './screens/Manage';
import Ask from './screens/Ask';
import Account from './screens/Account';
import AllActivity from './screens/AllActivity';
import Location from './screens/Location';

import { RootStackParamList } from './types';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//fetch api
const getFromApi = () => {
  fetch('http://10.0.2.2:3000/ping')
    .then(response => {
      console.log('Response:', response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // 응답 헤더 확인
      const contentType = response.headers.get('Content-Type');
      console.log('Content-Type:', contentType);
      return response.json();
    })
    .then(data => {
      Alert.alert('Success', '호출 성공');
      console.log('Data:', data);
    })
    .catch(error => {
      Alert.alert('Error', error.message || 'Request failed!');
      console.error('Error:', error);
    });
};

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"
                    screenOptions={{
                      contentStyle: { backgroundColor: '#ffffff' }, // Add this line for all stack screens
                    }}>

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
                            headerTitle: '직접 리폼하기',
                            headerTitleAlign: 'center',
                            headerTitleStyle: styles.title,
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
                    <Stack.Screen
                        name="Collect"
                        component={TabNavigator} // Tab Navigator를 Stack.Navigator의 첫 번째 화면으로 설정
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '수거'
                        }} // 헤더를 숨기려면 이 옵션을 설정
                    />
                    <Stack.Screen
                        name="CollectApply"
                        component={CollectApply}
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '수거신청',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
                    />
                    <Stack.Screen
                        name="AllActivity" // 변경된 부분
                        component={AllActivity} // 변경된 부분
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '수거',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
                    />
                    <Stack.Screen
                        name="CollectApplying" // 변경된 부분
                        component={CollectApplying} // 변경된 부분
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '수거신청',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
                    />
                    <Stack.Screen
                        name="CollectSuccess"
                        component={CollectSuccess} //
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '수거 완료',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
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
                        name="InquiryDetail"
                        component={InquiryDetailScreen}
                        options={{
                            headerTitle: '문의하기',
                            headerTitleAlign: 'center',
                            headerTitleStyle: styles.title,
                        }}
                    />
                    <Stack.Screen
                        name="Order"
                        component={OrderScreen}
                        options={{
                            headerTitle: '주문하기',
                            headerTitleAlign: 'center',
                            headerTitleStyle: styles.title,
                        }}
                    />
                    <Stack.Screen
                        name="Payment"
                        component={PaymentScreen}
                        options={{
                            headerTitle: '주문 완료',
                            headerTitleAlign: 'center',
                            headerTitleStyle: styles.title,
                        }}
                    />
                    <Stack.Screen
                        name="AccountInformation"
                        component={AccountInformation} //
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '계정 정보',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
                    />
                    <Stack.Screen
                        name="Address"
                        component={Address} //
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '주소 관리',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
                    />
                    <Stack.Screen
                        name="Location"
                        component={Location} //
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '주소 추가',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
                    />
                    <Stack.Screen
                        name="Manage"
                        component={Manage} //
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '계좌 관리',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },                        }}
                    />
                    <Stack.Screen
                        name="Ask"
                        component={Ask}
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '문의 내역',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Account"
                        component={Account} //
                        options={{
                            headerShown: true,
                            headerTitleAlign: 'center',
                            title: '계정 관리',
                            headerStyle: {
                                  elevation: 4, // Android 그림자 높이
                                  shadowColor: '#000', // iOS 그림자 색상
                                  shadowOpacity: 0.25, // iOS 그림자 투명도
                                  shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                                  shadowRadius: 4, // iOS 그림자 반경
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

function TabNavigator() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconSource;

                    //비활성화된 탭
                    if (route.name == '홈') {
                        iconSource = require('./assets/home.png');
                    }
                    else if (route.name == '수거') {
                        iconSource = require('./assets/shop.png');
                    }
                    else if (route.name == '스토어') {
                        iconSource = require('./assets/store.png');
                    }
                    else if (route.name == '마이페이지') {
                        iconSource = require('./assets/mypage.png');
                    }

                    // 버튼을 누를때 활성화됨
                    return (
                        <Image
                            source={iconSource}
                            style={[styles.tabIcon, {tintColor: focused ? '#46A6FF' : '#D1D2D1'}]}
                        />
                    );
                },
                tabBarActiveTintColor: '#46A6FF', // 활성화된 탭의 텍스트 색상
                tabBarInactiveTintColor: '#D1D2D1',  // 비활성화된 탭의 텍스트 색상
                tabBarLabelStyle: { fontSize: 12}, // 탭 텍스트 크기 조정
                tabBarStyle: { backgroundColor: '#ffffff', paddingHorizontal: 15, paddingVertical: 30, paddingBottom: 15, height: 70},
                contentStyle: { backgroundColor: '#ffffff' },
            })}
            >
            <Tab.Screen name="홈" component={HomeScreen}
                options={{
                headerShown:false,
                tabBarButton: (props) => (
                <TouchableOpacity
                    {...props}
                    onPress={() => {
                        navigation.navigate('홈');
                        navigation.setOptions({ title: '홈'});
                    }}
                />
                ),
            }} />
            <Tab.Screen name="수거" component={Collect}
                options={{
                headerShown: true,
                headerTitle: '수거',
                headerTitleAlign: 'center',
                headerStyle: {
                      elevation: 4, // Android 그림자 높이
                      shadowColor: '#000', // iOS 그림자 색상
                      shadowOpacity: 0.25, // iOS 그림자 투명도
                      shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                      shadowRadius: 4, // iOS 그림자 반경
                },
                tabBarButton: (props) => (
                    <TouchableOpacity
                        {...props}
                        onPress={() => {
                            navigation.navigate('수거');
                            navigation.setOptions({ title: '수거'});
                        }}
                    />
                ),
            }} />
            <Tab.Screen name="스토어" component={StoreScreen}
                options={{
                headerShown:false,
                tabBarButton: (props) => (
                    <TouchableOpacity
                        {...props}
                        onPress={() => {
                            navigation.navigate('스토어');
                            navigation.setOptions({ title: '스토어'});
                        }}
                    />
                ),
            }} />
            <Tab.Screen name="마이페이지" component={MyPage}
                options={{
                headerShown: true,
                headerTitle: '마이페이지',
                headerTitleAlign: 'center',
                headerStyle: {
                      elevation: 4, // Android 그림자 높이
                      shadowColor: '#000', // iOS 그림자 색상
                      shadowOpacity: 0.25, // iOS 그림자 투명도
                      shadowOffset: { width: 0, height: 2 }, // iOS 그림자 오프셋
                      shadowRadius: 4, // iOS 그림자 반경
                },
                tabBarButton: (props) => (
                    <TouchableOpacity
                        {...props}
                        onPress={() => {
                            navigation.navigate('마이페이지');
                            navigation.setOptions({ title: '마이페이지'});
                        }}
                    />
                ),
        }} />
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
    container: {
        flex : 1,
        backgroundColor: '#ffffff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
    },
    tabIcon: {
        width: 24,
        height: 24,
        marginTop: 5,
        marginBottom: 30, // 아이콘을 탭 바 상단으로 밀어 올림
    },
});