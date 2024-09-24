import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const IssueBlueScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={styles.texts}>
                    <Text style={styles.title}>지금 보고있는 상품이 궁금하신가요?</Text>
                    <Text style={styles.content}>예) 상품의 재질이 궁금해요</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InquiryDetail')}>
                    <Text style={styles.buttonText}>상품 문의하기</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    texts: {
        marginTop: 25,
        marginBottom: 25,
        marginLeft: 35,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#2E2E2E',
    },
    content: {
        fontSize: 16,
        marginVertical: 3,
        color: '#8B8B8B',
    },
    button: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#A3D3FF',
        marginVertical: 3,
        padding: 10,
        paddingBottom: 13,
        width: 340,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#46A6FF',
        alignSelf: 'center',
        fontSize: 16,
    },
});

export default IssueBlueScreen;
