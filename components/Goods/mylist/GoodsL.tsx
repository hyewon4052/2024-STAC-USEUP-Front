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
    goodsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: '6%',
        marginVertical: '5%',
    },
    goodsImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        backgroundColor: '#F0F0F0',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    goodsText: {
        marginTop: 4,
        fontSize: 12,
    },
    price: {
        marginTop: 3,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
    },
});

export default Goods;



