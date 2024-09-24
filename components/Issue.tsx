import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Issue = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <Image source={props.source} style={styles.Issue}/>
        </View>
    );
};

const styles = StyleSheet.create({
    Issue: {
        width: 140,
        height: 170,
    },
});

export default Issue;
