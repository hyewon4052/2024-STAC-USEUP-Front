import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const BlueButton = (prop) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.title}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        color: '#fff',
        textAlign: 'center',
        width: 41,
        height: 41,
        paddingRight: 0,
        paddingTop: 0,
        borderRadius: 40,
        backgroundColor: '#46A6FF',
    },
});

export default BlueButton;
