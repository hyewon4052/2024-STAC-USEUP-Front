import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

const issueItems = [
    { id: '1', issueComponent: IssueTrash, page: 'issueBlue' },
    { id: '2', issueComponent: IssueClothes, page: 'issueRed' },
    { id: '3', issueComponent: IssueConsumption, page: 'issueYellow' },
]

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image source={require('../../assets/Logo.png')}/>
                    <TouchableOpacity style={styles.bellButton}>
                        <Image source={require('../../assets/home/bell.png')} style={styles.bellIcon}/>
                    </TouchableOpacity>
                </View>

                <Text style={styles.greeting}>안녕하세요. 하영님!</Text>

                <Carousel />

                <View style={styles.issue}>
                    <View style={styles.issueHeader}>
                        <Text style={styles.issueText}>환경이슈</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeMore')}>
                            <Text style={styles.more}>더보기 ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.issueImages}>
                        <FlatList
                            data={issueItems}
                            horizontal
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
                                    <View style={styles.issueImage}>
                                        <item.issueComponent />
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>

                <View style={styles.guide}>
                    <Text style={styles.guideText}>유즈업 가이드</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Guide')}>
                        <Image source={require('../../assets/home/guide.png')} style={styles.guideImage}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="홈" component={HomeScreen} options={{headerShown:false}} />
            <Tab.Screen name="수거" component={Collect} options={{headerShown:false}}/>
            <Tab.Screen name="스토어" component={ShopScreen} options={{headerShown:false}}/>
            <Tab.Screen name="마이페이지" component={MyPageScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '8%',
        marginVertical: '5%',
    },
    bellButton: {
        marginLeft: 'auto',
    },
    bellIcon: {
        width: 24,
        height: 24,
    },
    greeting: {
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: '8%',
        marginBottom: '4%',
        color: 'black'
    },
    issue: {
        marginTop: '8%',
        marginHorizontal: '8%',
    },
    issueHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    issueText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    more: {
        fontSize: 14,
    },
    issueImages: {
        flexDirection: 'row',
        marginTop: '6%',
    },
    issueImage: {
        marginRight: 13,
    },
    guide: {
        marginTop: '8%',
        marginHorizontal: '8%',
    },
    guideText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    guideImage: {
        width: '100%',
        marginTop: '3%',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        backgroundColor: 'white'
    },
    footerButton: {
        alignItems: 'center',
    },
    footerIcon: {
        alignItems: 'center',
        flex: 1,
        width: 25,
    },
    footerText: {
        fontSize: 12,
        color: '#000',
    },
});

export default HomeScreen;