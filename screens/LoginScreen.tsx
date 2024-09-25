import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const GuideScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.content}>
                    <Image source={require('../assets/Logo.png')} style={styles.logo}/>
                    <View style={styles.Wrap}>
                        <TextInput
                            style={styles.textInputContent}
                            placeholder='이메일 작성하기'
                            maxLength={1000}
                            spellCheck={false}
                            placeholderTextColor='#D2CFCF'
                        />
                    </View>
                    <View style={styles.Wrap}>
                        <TextInput
                            style={styles.textInputContent}
                            placeholder='비밀번호 작성하기'
                            maxLength={1000}
                            spellCheck={false}
                            placeholderTextColor='#D2CFCF'
                        />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>로그인</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'white',
    },
    content: {
        marginTop: '300',
    },
    Wrap: {
        marginBottom: 20,
    },
    logo: {
        width: 160,
        height: 38,
        justifyItem: 'center',
        margin: 'auto',
        marginBottom: 53,
    },
    textInputContent: {
        borderWidth: 2,
        borderColor: '#46A6FF',
        borderRadius: 5,
        width: 300,
        height: 52,
        paddingLeft: 20,
        fontSize: 16,
        margin: 'auto',
    },
    button:{
        backgroundColor: '#46A6FF',
        width: 210,
        height: 58,
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#fff',
        justifyItem: 'center',
        borderRadius: 33,
        elevation: 2.5,
        margin: 'auto',
    },
    buttonText:{
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop: 13,
        textAlign: 'center',
    }
});

export default GuideScreen;
