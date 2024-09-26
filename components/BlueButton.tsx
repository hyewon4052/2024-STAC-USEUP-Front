import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const BlueButton = (prop) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(prop.page)}>
                <LinearGradient
                    colors={['#36B7FF', '#5883FF']}
                    style={styles.button}
                >
                    <Text style={styles.title}>{prop.name}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 'auto',
    },
    button: {
        width: 320,
        height: 52,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
        paddingBottom: 5,
        Bottom: 10,
//         marginRight: 90`,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        width: 330,
        borderRadius: 10,
    },
});

export default BlueButton;
