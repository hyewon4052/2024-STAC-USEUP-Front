import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DeliveryAddress from '../components/DeliveryAddress';
import BlueButton from '../components/BlueButton';

const MoneyManageScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('마이페이지');
    }

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.subText}>
                은행명
            </Text>
            <TextInput style={styles.TextInput} placeholder= 'ex) 우리은랭, 카카오뱅크...'></TextInput>
            <Text style={styles.subText}>
                계좌번호 (12자)
            </Text>
            <TextInput style={styles.TextInput} placeholder= '123412341234'></TextInput>
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
        marginTop: 475,
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

export default MoneyManageScreen; // 내보내기 확인
