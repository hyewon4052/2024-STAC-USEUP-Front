import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
const GuideScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.background} source={require('../../assets/more/guide-back.png')}/>
                <View style={styles.header}>
                    <View>
                        <Image style={styles.content} source={require('../../assets/more/good.png')}/>
                        <Text style={styles.content}>이용 가이드</Text>
                        <Text style={styles.title}>헌옷 수거하고{"\n"}새옷 받기!</Text>
                    </View>
                    <Image source={require('../../assets/more/hand.png')}/>
                </View>
                <View>
                    <Image style={styles.step} source={require('../../assets/more/step1.png')}/>
                    <View style={styles.guide}>
                        <View style={styles.guideWhite}>
                            <Text style={styles.guideWhiteText}>수거 신청 하기</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.texts}>
                                <Text style={styles.number}>1</Text>
                                <Text>앱 하단 수거 탭에서 수거 클릭!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>2</Text>
                                <Text>수거 신청 클릭!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>3</Text>
                                <Text>수거 위치, 상세주소, 수거 키트 수 입력 및 선택!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>4</Text>
                                <Text>수거 신청 클릭!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>5</Text>
                                <Text>앱 하단 수거 탭의 진행 중인 수거에서 수거 예정일을 확인할 수 있어요!</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Image style={styles.step} source={require('../../assets/more/step2.png')}/>
                    <View style={styles.guide}>
                        <View style={styles.guideBlue}>
                            <Text style={styles.guideBlueText}>옷 구매 하기</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.texts}>
                                <Text style={styles.number}>1</Text>
                                <Text>앱 하단 수거 탭에서 수거 클릭!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>2</Text>
                                <Text>수거 신청 클릭!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>3</Text>
                                <Text>수거 위치, 상세주소, 수거 키트 수 입력 및 선택!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>4</Text>
                                <Text>수거 신청 클릭!</Text>
                            </View>
                            <View style={styles.texts}>
                                <Text style={styles.number}>5</Text>
                                <Text>앱 하단 수거 탭의 진행 중인 수거에서 수거 예정일을 확인할 수 있어요!</Text>
                            </View>
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
        height: '25%',
        margin: 0,
        padding: 0,
    },
    header: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: '4%',
        marginTop: '9%',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    content: {
        fontSize: 18,
        color: '#333',
        marginVertical: 3,
        color: 'white',
    },
    step: {
        alignSelf: 'center',
        marginTop: '10%',
    },
    guide: {
        borderRadius: 15,
        elevation: 2.5,
        backgroundColor: 'white',
        margin: '5%',
        overflow: 'hidden',
    },
    guideWhite: {
        padding: '6%',
    },
    guideWhiteText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#58AFFF',
        alignSelf: 'center',
    },
    guideBlue: {
        padding: '6%',
        backgroundColor: '#58AFFF',
    },
    guideBlueText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    textContainer: {
        padding: '5%',
        paddingVertical: '7%',
        paddingRight: '11%',
    },
    texts: {
        padding: '5%',
        paddingVertical: '3%',
        flexDirection: 'row',
    },
    number: {
        fontSize: 13,
        height: 20,
        width: 20,
        borderRadius: 20,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: '#58AFFF',
        paddingLeft: 6.2,
        paddingTop: 0.5,
        marginTop: 2.5,
        marginRight: 10,
    },
});

export default GuideScreen;
