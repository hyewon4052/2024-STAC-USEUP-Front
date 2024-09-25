// CollectApplyingScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CollectSuccessScreen = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('홈');
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainSection}>
                <Image
                    style={styles.mainImg}
                    source={require('../assets/coin.png')}
                />
                <Text style={styles.mainText}>
                    성공적으로 수거신청이 {'\n'}
                    완료 됐습니다!
                </Text>
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
                <LinearGradient
                    colors={['#36B7FF', '#5883FF']}
                    style={styles.collectBtn}
                >
                    <Text style = {styles.collectBtnText}>완료</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 35,
        justifyContent: 'space-between',
    },
    btnContainer: {
        marginTop: 57,
    },
    mainSection: {
        alignItems: 'center',
        flex: 1,
        marginTop: '70%',
    },
    mainText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 46,
        textAlign: 'center',
    },
    mainImg: {
        width: 70,
        height: 70,
        marginBottom: 20,
    },
    collectBtn: {
        width: 'auto',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    },
    collectBtnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },

});

export default CollectSuccessScreen; // 내보내기 확인
