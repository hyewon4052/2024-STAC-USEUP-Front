import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Account = ({ props }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('마이페이지');
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.cardTitle}>
                        {props.name}님
                    </Text>
                    <View style={styles.detailSection}>
                        <Text style={styles.detailText}>
                            기본 결제수단
                        </Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.cardText}>
                        {props.number}
                    </Text>
                    <View style={styles.btnContainer}>
                        {buttons.map(( buttons, index ) => (
                            <TouchableOpacity key={props.index} style={styles.btnSection} onPress={props.buttons.onPress}>
                                <Text style={styles.btnText}>
                                    {buttons.text}
                                </Text>
                            </TouchableOpacity>
                            ))}
                       </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
    },
    subContainer: {
        flexDirection: 'column',
    },
    btnContainer: {
        flexDirection: 'row',
    },
    addBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSection: {
        backgroundColor: 'fff',
        borderRadius: 4,
        borderWidth: 1,
        width: 38,
        height: 24,
        borderColor: '#AAD6FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    detailSection: {
        marginTop: 6,
        marginLeft: 206,
        width: 47,
        height: 16,
        borderRadius: 8,
        borderWidth: 0.8,
        borderColor: '#46A6FF',
        AlignItem: 'center',
    },
    detailText: {
        fontWeight: 'bold',
        fontSize: 8,
        color: '#46A6FF',
        textAlign: 'center',
    },
    card: {
        padding: 15,
        borderRadius: 8,
        borderWidth: 1.6,
        borderColor:'#46A6FF',
        backgroundColor: '#F8FCFF',
        elevation: 2,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 25,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        marginBottom : 10,
    },
    cardText: {
        fontSize: 10,
        color: '#ADADAD',
    },
    cardText2: {
        fontSize: 10,
        color: '#000',
        marginBottom: 15,
    },
    btnText: {
        fontSize: 10,
        textAlign: 'center',
        color: '#46A6FF',
    },
    addBtnText: {
        fontSize: 20,
        color: '#fff',
        color: '#46A6FF',
    },
    addressBtnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    addBtn: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#DCF0FF',
    },
    addressBtn: {
        width: 350,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    }
});

export default Account;
