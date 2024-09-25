import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
const GuideScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.background} source={require('../../assets/more/reform-m.png')}/>
                <View>
                    <View style={styles.title}>
                        <View style={styles.titleText}>
                            <Text style={styles.contentText}>수거 신청 하기</Text>
                            <Text>앱 하단 수거 탭에서 수거 클릭!</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        width: '100%',
        height: 240,
        margin: 0,
        padding: 0,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#46A6FF',
        padding: '5%',
        paddingVertical: '7%',
        paddingRight: '11%',
    },
    titleText: {
        padding: '5%',
        paddingVertical: '3%',
        flexDirection: 'row',
    },
    contentText: {
        fontSize: 18,
        color: '#333',
        marginVertical: 2,
        color: 'white',
    },
});

export default GuideScreen;
