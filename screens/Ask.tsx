// CollectApplyingScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', title: 'BEAR MAN', date: '2024-07-21' },
  { id: '2', title: 'BEAR MAN', date: '2024-07-21' },
];

const AskScreen = ({ item }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('CollectSuccess');
    }

    const renderItem = ({ item }) => (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    <Text style={styles.subText}>옷 재질에 대해 문의합니다.</Text>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btnSection}>
                            <Text style={styles.btnText}>
                                재질
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSection}>
                            <Text style={styles.btnText}>
                                업체
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePress}>
                            <Text style={styles.moreButton}>더보기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#ADADAD',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 5,
    },
    contentContainer: {
        flex: 1,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 25,
    },
    btnSection: {
        backgroundColor: '#DDEFFF',
        borderRadius: 4,
        width: 38,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    btnText: {
        fontSize: 10,
        textAlign: 'center',
        color: '#46A6FF',
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
        marginBottom: 3,
        marginLeft: 170,
        flexDirection: 'flex-end',
    },

});

export default AskScreen; // 내보내기 확인
