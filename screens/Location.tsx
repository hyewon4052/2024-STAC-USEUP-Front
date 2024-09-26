// AddressScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DeliveryAddress from '../components/DeliveryAddress';
import BlueButton from '../components/BlueButton';

const LocationScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Address');
    }

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.subText}>
                전화번호 (-) 추가
            </Text>
            <TextInput style={styles.TextInput} placeholder= '010-1234-5678'></TextInput>
            <Text style={styles.subText}>
                위치
            </Text>
            <TextInput style={styles.TextInput} placeholder= '서울시 강남구'></TextInput>
            <Text style={styles.subText}>
                상세주소
            </Text>
            <TextInput style={styles.TextInput} placeholder= '유즈아파트 401호'></TextInput>
            <TouchableOpacity style={styles.addressBtnContainer} onPress={handlePress}>
                <LinearGradient
                    colors={['#36B7FF', '#5883FF']}
                    style={styles.addressBtn}
                >
                    <Text style = {styles.addressBtnText}>완료</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 35,
    },
    subText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
//         marginBottom: 10,
    },
    TextInput: {
        placeholderTextColor: '#B9B9B9',
        paddingBottom: -20,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginBottom: 25,
    },
    addressBtnContainer: {
        marginTop: 400,
    },
    addressBtn: {
        width: 350,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    },
    addressBtnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
});

export default LocationScreen; // 내보내기 확인
