// ManageScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import DeliveryAddress from '../components/DeliveryAddress';

const ManageScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('CollectSuccess');
    }

    return (
        <View style={styles.container}>
          <DeliveryAddress

          />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default ManageScreen; // 내보내기 확인
