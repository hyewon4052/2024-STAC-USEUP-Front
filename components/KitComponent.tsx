import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const KitComponent = ({ title, date, iconSource, onPress }) => {
    const formattedTitle = title.length > 7 ? title.substring(0,7) + '...' : title;

    const handlePress = () => {
        if (iconSource === require('../assets/shopping3.png')) {
            onPress(title, date, iconSource); // 수정된 부분
        } else {
            Alert.alert('알림', '이 아이콘은 이동할 수 없습니다.');
        }
    };

    return (
        <View style={styles.card}>
            <LinearGradient colors={['#FFFFFF', '#F3F3F3']} style={styles.iconContainer}>
                <Image source={iconSource} style={styles.icon} resizeMode="contain" />
            </LinearGradient>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{formattedTitle}</Text>
                <Text style={styles.date}>신청 날짜 : {date}</Text>
                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.moreButton}>더보기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    iconContainer: {
        width: 88,
        height: 88,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    icon: {
        marginTop: 10,
        width: 66,
        height: 63,
    },
    contentContainer: {
        flex: 1,
    },
    topSection: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    detailsContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#F3F3F3',
    },
    title: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 3,
    },
    date: {
        fontSize: 12,
        color: '#ADADAD',
        marginBottom: 15,
    },
    moreButton: {
        color: '#D3CFCF',
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        fontSize: 16,
        color: 'blue',
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

export default KitComponent;