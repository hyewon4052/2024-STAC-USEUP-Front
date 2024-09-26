import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import BlueButton from '../../components/BlueButton'
import PlusButton from '../../components/PlusButton'

const { width } = Dimensions.get('window');


const InquiryDetail = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.Wrap}>
                <Text style={styles.title}>제목</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='제목을 입력해주세요.'
                    maxLength={30}
                    spellCheck={false}
                    placeholderTextColor='#BFBFBF'
                />
            </View>
            <View style={styles.Wrap}>
                <Text style={styles.title}>카테고리</Text>
                <View style={styles.plus}>
                    <TextInput
                        style={styles.textInputPlus}
                        placeholder='카테고리를 입력해주세요.'
                        maxLength={50}
                        spellCheck={false}
                        placeholderTextColor='#BFBFBF'
                    />
                    <PlusButton />
                </View>
            </View>
            <View style={styles.Wrap}>
                <Text style={styles.title}>내용</Text>
                <TextInput
                    style={styles.textInputContent}
                    placeholder='내용을 작성해주세요. (최대 1,000자)'
                    maxLength={1000}
                    spellCheck={false}
                    placeholderTextColor='#BFBFBF'
                />
            </View>
            <View>
                <Text style={styles.title}>사진 (선택, 최대 3장)</Text>
                <Text style={styles.content}>사진을 업로드해주세요.</Text>
                <TouchableOpacity>
                    <Image style={styles.picture} source={require('../../assets/store/picture.png')}/>
                </TouchableOpacity>
            </View>

            <BlueButton
                name='작성 완료'
                page='Ask'
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
    plus: {
        flexDirection: 'row',
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
        borderRadius: 5,
        height: 148,
        paddingLeft: 10,
        paddingBottom: 120,
    },
    picture: {
        marginTop: 8,
        width: 100,
        height: 100,
    },
});

export default InquiryDetail;
