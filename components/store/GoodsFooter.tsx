import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const GoodsFooter = (props) => {
    const navigation = useNavigation();
    const [heartStates, setHeartStates] = useState<{ [key: string]: boolean }>({});

    const toggleHeart = (componentName: string) => {
        setHeartStates(prevState => ({
            ...prevState,
            [componentName]: !prevState[componentName],
        }));
    };


    return (
        <View style={styles.container}>
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => toggleHeart(props.displayName)} // 하트 눌렀을 때 상태 변경
                >
                    <Image
                        source={heartStates[props.displayName]
                            ? require('../../assets/store/heart-color.png') // 색 있는 하트
                            : require('../../assets/store/heart.png') // 빈 하트
                        }
                        style={styles.heart}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Alert.alert(
                        "장바구니 추가",  // 제목
                        "해당 제품이 장바구니에 추가되었습니다.",  // 내용
                        [
                            { text: "계속 쇼핑하기", style: "cancel" },
                            { text: "구매하러 가기", onPress: () => navigation.navigate('Order') },
                        ],
                        { cancelable: false }
                    );
                }} >
                    <Text style={styles.Button}>장바구니 담기</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 16,
        borderTopWidth: 2,
        borderTopColor: '#EFEFEF',
        height: 85,
        backgroundColor: '#fff'
    },
    Button: {
        backgroundColor: 'black',
        width: 290,
        fontSize: 18,
        borderRadius: 4,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 14,
        paddingVertical: 12,
    },
    heart: {
        width: 34,
        height: 32,
        marginTop: 7,
    },
});

export default GoodsFooter;