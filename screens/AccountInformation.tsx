import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const AccountInformationScreen = ({ title, date, iconSource, onPress }) => {
    const navigation = useNavigation();

    const handleAddress = () => {
        navigation.navigate('Address');
    }
    const handleManage = () => {
        navigation.navigate('Manage')
    }
    const handleAsk = () => {
        navigation.navigate('Ask')
    }
    const handleAccount = () => {
        navigation.navigate('Account')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.manageContainer} onPress={handleAddress}>
                <Text>주소 관리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.manageContainer} onPress={handleManage}>
                <Text>계좌 관리</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.manageContainer} onPress={handleAsk}>
                <Text>문의 내역</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.manageContainer} onPress={handleAccount}>
                <Text>계정 관리</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        fontSize: 16,
        flexDirection: 'column',
        padding: 30,
        borderRadius: 10,
        color: '#FFF',
    },
    manageContainer: {
        marginBottom: 24,
    },
});

export default AccountInformationScreen;