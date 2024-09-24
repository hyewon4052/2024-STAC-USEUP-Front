import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const GoodsFooter = () => {
    const navigation = useNavigation();
    const [tab, setTab] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../../assets/store/heart.png')} style={styles.heart}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                <Text style={styles.Button}>장바구니 담기</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        borderTopWidth: 2,
        borderTopColor: '#EFEFEF',
        height: 85,
        backgroundColor: '#fff'
    },
    Button: {
        backgroundColor: 'black',
        width: 290,
        fontSize: 18,
        borderRadius: 4,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 14,
        paddingVertical: 12,
    },
    heart: {
        width: 34,
        height: 32,
        marginTop: 7,
    },
});

export default GoodsFooter;