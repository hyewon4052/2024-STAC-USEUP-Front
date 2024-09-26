import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput, Posts } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Goods = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(props.page)}>
                <Image style={styles.goodsImage} source={props.source} />
                <Text style={styles.goodsText}>{props.title}</Text>
                <Text style={styles.goodsText}>{props.name}</Text>
                <Text style={styles.price}>{props.price}원</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 27,
        position: 'relative',
        width: width,
        height: 50,
        marginTop: 5,
    },
    textInput: {
        width: 300,
        borderWidth: 0,
        paddingTop: 11,
        paddingLeft: 0,
        color: 'black',
        fontSize: 17,
    },
    backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        width: 373.5,
        height: 60,
    },
    searchButton: {
        position: 'absolute',
        right: '12%',
        backgroundColor: 'transparent',
    },
    searchIcon: {
        width: 25, // 아이콘의 너비 설정
        height: 25, // 아이콘의 높이 설정
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '1%',
        marginTop: 20,
        marginBottom: 18,
        height: 58,
        width: '100%',
    },
    menuIcon: {
        height: 58,
        width: 58,
    },
    Item: {
        position: 'relative',
    },
    ItemHeader: {
        flexDirection: 'row',
        marginHorizontal: '7%',
    },
    ItemText: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    goodsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: '6%',
        marginVertical: '5%',
    },
    goods: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    goodsImage: {
        width: 150,
        height: 170,
        borderRadius: 8,
        backgroundColor: '#F0F0F0',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    goodsText: {
        marginTop: 4,
    },
    price: {
        marginTop: 3,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
    },
    heart: {
        position: 'absolute',
        marginTop: 13,
        right: 13,
        zIndex: 2,
        width: 25,
    },
    heartImage: {
        width: 24,
        height: 24,
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

export default Goods;



