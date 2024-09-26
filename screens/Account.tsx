// ManageScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, Button, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const ManageScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleLeave = () => {
        Alert.alert(
            "회원 탈퇴",
            "정말로 회원 탈퇴 하시겠습니까?",
            [
                {
                    text: "취소",
                    style: "cancel"
                },
                {
                    text: "확인",
                    onPress: () => {
                        // 회원 탈퇴 로직 추가
                        Alert.alert("회원 탈퇴가 확인되었습니다.");
                    }
                }
            ],
            { cancelable: false }
        );
    }
    const handleLogOut = () => {
        Alert.alert(
            "로그 아웃 되었습니다.",
            "",
            [
                {
                    text: "확인",
                    onPress: () => {
                        navigation.navigate('홈'); // 확인 버튼 클릭 시 홈으로 이동
                    }
                }
            ]
        );
    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 14, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.btnContainer} onPress={handleLogOut}>
                  <Image
                      source={require('../assets/logOut.png')}
                      style={styles.imageIcon}>
                  </Image>
                  <Text style={styles.text}>로그 아웃</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.btnContainer} onPress={handleLeave}>
                <Image
                      source={require('../assets/leave.png')}
                      style={styles.imageIcon}>
                </Image>
                <Text style={[styles.text, { color: '#FF3131'}]}>회원 탈퇴</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
//         flexDirection: ''
        backgroundColor: '#fff',
        padding: 35,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageIcon: {
        width: 24,
        height: 24,
        marginRight: 6,
    },
    text: {
        flexDirection: 'row',
        fontSize: 14,
        color: '#000',
    },
});

export default ManageScreen; // 내보내기 확인
