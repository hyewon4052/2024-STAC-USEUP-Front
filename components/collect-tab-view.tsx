import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, StatusBar, Image, Dimensions, Animated, TouchableOpacity, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import KitComponent from './KitComponent';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const FirstRoute = () => {
    const tabBarHeight = useBottomTabBarHeight();
    const windowHeight = Dimensions.get('window').height;

    return(
        <ScrollView
            style={{ flex : 1}}
            contentContainerStyle={{ paddingBottom: tabBarHeight, margin: 0 }}
            showsVerticalScrollIndicator={false}>
            <KitComponent
                title="NC 다이노스 유니폼 백팩"
                date="08/22"
                iconSource={require('../assets/shopping3.png')}
            />
            <KitComponent
                title="01 키트"
                date="08/22"
                iconSource={require('../assets/calendar3.png')}
            />
            <KitComponent
                title="02 키트"
                date="08/22"
                iconSource={require('../assets/calendar3.png')}
            />
        </ScrollView>
    );
};

const SecondRoute = () => {
    const tabBarHeight = useBottomTabBarHeight();  // 탭 바의 높이 가져오기
    const windowHeight = Dimensions.get('window').height;

    return(
            <ScrollView
                style={{ flex : 1}}
                contentContainerStyle={{ paddingBottom: tabBarHeight, margin: 0 }}
                showsVerticalScrollIndicator={false}>
                <KitComponent
                    title="01 키트"
                    date="08/22"
                    iconSource={require('../assets/check2.png')}
                />
                <KitComponent
                    title="두산 베어스 유니폼"
                    date="08/22"
                    iconSource={require('../assets/shopping3.png')}
                />
                <KitComponent
                    title="02 키트"
                    date="08/22"
                    iconSource={require('../assets/check2.png')}
                />
                <KitComponent
                    title="03 키트"
                    date="08/23"
                    iconSource={require('../assets/check2.png')}
                />
            </ScrollView>
    );
};

export default function CollectTabView() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: '진행중'},
        {key: 'second', title: '완료'},
    ]);

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            renderLabel={({ route, focused }) => (
                <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
                    {route.title}
                </Text>
            )}
            pressColor="transparent"
        />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: Dimensions.get('window').width }}
            style={styles.container}
            renderTabBar={renderTabBar}
            swipeEnabled={true}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
        padding: 16,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    tabBar: {
        backgroundColor: 'transparent',
    },
    indicator: {
        backgroundColor: '#46A6FF',
    },
    tabLabel: {
        color: '#B9BBB9',
        fontWeight: 'bold',
    },
    tabLabelFocused: {
        color: '#46A6FF',
    },
    button: {
        backgroundColor: '#46A6FF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    additionalText: {
        marginTop: 10,
        color: 'black',
    },
    completedText: {
        color: 'black',
    },
});