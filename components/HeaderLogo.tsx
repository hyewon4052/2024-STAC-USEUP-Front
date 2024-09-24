import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

const HeaderLogo = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/Logo.png')} style={styles.Logo}/>
                <TouchableOpacity style={styles.bellButton} onPress={() => navigation.navigate(props.page)}>
                    <Image source={props.source} style={styles.bellIcon}/>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: '8%',
        marginVertical: '5%',
        marginTop: '6%',
    },
    Logo: {
        width: 125,
        height: 30,
    },
    bellButton: {
        marginLeft: 'auto',
    },
    bellIcon: {
        width: 24,
        height: 24,
    },
});

export default HeaderLogo;