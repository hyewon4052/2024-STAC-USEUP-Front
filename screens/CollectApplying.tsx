// CollectApplyingScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CollectApplyingScreen = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('CollectSuccess');
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainSection}>
                <Image
                    style={styles.mainImg}
                    source={require('../assets/coin.png')}
                />
                <Text style={styles.mainText}>
                    상자‚ 봉투에 잘 담은 후 {'\n'}
                    테이핑하여 밀봉해주세요!
                </Text>
            </View>
            <View>
                <Text style={styles.subText}>
                    수거하러 갈 위치
                </Text>
                <TextInput style={styles.TextInput} placeholder= '서울시 강남구'></TextInput>
                <Text style={styles.subText}>
                    상세주소
                </Text>
                <TextInput style={styles.TextInput} placeholder= '유즈아파트 401호'></TextInput>

                <Text style={styles.subText}>
                    수거하러 갈 키트
                </Text>
                <View style={styles.smallBtnContainer}>
                    <TouchableOpacity style={styles.smallBtn}>
                        <Text style={styles.smallText}>1개</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallBtn}>
                        <Text style={styles.smallText}>2개</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.smallBtn}>
                        <Text style={styles.smallText}>3개</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
                <LinearGradient
                    colors={['#36B7FF', '#5883FF']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.collectBtn}
                >
                    <Text style = {styles.collectBtnText}>수거신청</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 35,
    },
    btnContainer: {
//         marginHorizontal: 30,
    },
    smallBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
//         marginRight: 6,
        marginTop: 16,
    },
    mainSection: {
        alignItems: 'center',
    },
    mainText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 46,
    },
    mainImg: {
        width: 70,
        height: 70,
        marginBottom: 20,
    },
    subText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    smallText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#46A6FF',
    },
    collectBtnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    TextInput: {
        placeholderTextColor: '#B9B9B9',
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginBottom: 25,
        keyboardType: 'default',
    },
    collectBtn: {
        width: 'auto',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    },
    smallBtn: {
        flex: 1,
        width: 77,
        height: 36,
        borderRadius: 8,
        backgroundColor: 'rgba(224, 232, 255, 0.61)',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
    },
});

export default CollectApplyingScreen; // 내보내기 확인
