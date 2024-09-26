// ManageScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DeliveryAddress from '../components/DeliveryAddress';
import BlueButton from '../components/BlueButton';

const ManageScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('CollectSuccess');
    }
    const handleAdd = () => {
        navigation.navigate('MoneyManage');
    }

    return (
        <View style={styles.container}>
          <DeliveryAddress
            name='OO뱅크'
            number='100********574'
            buttons={[
                { text: '변경', onPress: () => navigation.navigate(Address) } // 변경 버튼 추가
            ]}
          />
            <View style={styles.addBtnContainer}>
                <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
                    <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtn: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#DCF0FF',
    },
    addBtnText: {
        fontSize: 20,
        color: '#fff',
        color: '#46A6FF',
    },
});

export default ManageScreen; // 내보내기 확인
