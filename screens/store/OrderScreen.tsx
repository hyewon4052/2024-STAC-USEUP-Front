import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import BlueButton from '../../components/BlueButton'
import PlusButton from '../../components/PlusButton'
import Account from '../../components/store/Account'

const { width } = Dimensions.get('window');

const InquiryDetail = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.Wrap}>
                <Text style={styles.title}>배송지</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='제목을 입력해주세요.'
                    maxLength={30}
                    spellCheck={false}
                    placeholderTextColor='#BFBFBF'
                />
            </View>
            <View style={styles.Wrap}>
                <Text style={styles.title}>할인 혜택</Text>
                <View style={styles.point}>
                    <TextInput
                        style={styles.textInputContent}
                        placeholder='현재 보유 포인트 : 000,000'
                        maxLength={1000}
                        spellCheck={false}
                        placeholderTextColor='#BFBFBF'
                    />
                    <TouchableOpacity>
                        <Text style={styles.all}>모두 사용</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.Wrap}>
            </View>
            <View>
                <Text style={styles.title}>결제금액</Text>
                <Text style={styles.content}>사진을 업로드해주세요.</Text>
            </View>

            <BlueButton
                name='결제하기'
                page='Payment'
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'grid',
        flex: 1,
        padding: 40,
        backgroundColor: 'white',
        alignItem: 'center',
    },
    Wrap: {
        marginBottom: 30,
    },
    point: {
        flexDirection: 'row',
    },
    all: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        width: 103,
        height: 60,
        paddingTop: 14,
        borderRadius: 4,
        marginLeft: 10,
        backgroundColor: '#46A6FF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'black',
    },
    content: {
        fontSize: 14,
        marginBottom: 8,
        color: '#AAAAAA',
    },
    account: {
        borderWidth: 2,
        borderColor: '#46A6FF',
        borderRadius: 8,
        backgroundColor: '#F8FCFF',
        height: 121,
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#BFBFBF',
        width: 335,
    },
    textInputPlus: {
        borderBottomWidth: 1,
        borderColor: '#BFBFBF',
        width: 290,
    },
    textInputContent: {
        borderWidth: 1,
        borderColor: '#B3B3B3',
        borderRadius: 4,
        width: 220,
        height: 60,
        paddingLeft: 10,
        paddingBottom: 12,
    },
});

export default InquiryDetail;
