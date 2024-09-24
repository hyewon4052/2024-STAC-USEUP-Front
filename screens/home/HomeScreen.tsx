import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderLogo from '../../components/HeaderLogo'
import Carousel from '../../components/Carousel'
import Issue from '../../components/Issue'

const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const issueItems = [
    { id: '1', image: require('../../assets/home/trash.png'), page: 'IssueBlue' },
    { id: '2', image: require('../../assets/home/clothes.png'), page: 'IssueRed' },
    { id: '3', image: require('../../assets/home/consumption.png'), page: 'IssueYellow' },
]

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView>

                <HeaderLogo
                    source={require('../../assets/home/bell.png')}
                />

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
                                        <Issue
                                            source={item.image}
                                        />
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
        width: 350,
        height: 210,
        marginVertical: '3%',
    },
});

export default HomeScreen;