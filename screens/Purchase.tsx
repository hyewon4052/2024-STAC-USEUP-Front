import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PurchaseComponent from '../components/PurchaseComponent';

const PurchaseScreen = () => {
        const navigation = useNavigation();

    return (
        <View style={styles.Container}>

        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: 100,
        height: 100,
        borderRadius: 4.46,
        paddingTop: 10,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        marginRight: 6,
    },
    titleContainer: {
        margin: 30,
        fontWeight: 'bold',
        fontSize: 20,

    },
});

export default PurchaseScreen;
