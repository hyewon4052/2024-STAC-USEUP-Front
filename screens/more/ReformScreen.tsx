import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const GuideScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.cover} source={require('../../assets/more/reform-m.png')}/>
                <Image style={styles.background} source={require('../../assets/more/coin.png')}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cover: {
        width: '100%',
        height: 240,
        margin: 0,
        padding: 0,
    },
    background: {
        width: 350,
        height: 200,
        marginTop: 20,
        padding: 0,
        marginHorizontal: "7.5%",
    },
    title: {
        marginBottom: 10,
        padding: '5%',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingVertical: 20,
        flexDirection: 'row',
        color: '#46A6FF',
    },
    contentText: {
        fontSize: 18,
        marginVertical: 2,
        color: '#46A6FF',
    },
    video: {
        width: '100%',
        height: 300, // 적절한 높이 설정
    },
});

export default GuideScreen;
