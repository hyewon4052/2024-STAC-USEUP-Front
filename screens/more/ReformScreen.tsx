import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput, Posts } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const IssueBlueScreen = () => {
    return (
        <View style={styles.container}>
              <Text style={styles.title}>한국은 옷 쓰레기 수출 '세계 5위'</Text>
              <Text style={styles.content}>우리나라는 매년 30만 톤 이상의 중고 의류를 수출하는 전 세계 5위 수출대국이다. 지난해 기준 인도와 말레이시아에 각각 약 7만 톤을 수출했고, 그 외 필리핀 태국 파키스탄 등 아시아 국가에 주로 수출하고 있다. 아프리카 대륙 나이지리아로 보내는 양도 2만 톤가량 된다. 외화 획득에 기여한다는 긍정적인 시각도 있지만 이런 식의 지구적 떠넘기기를 자랑스러워해야 하는 것인지 모르겠다.
              {"\n"}{"\n"}재사용된다고 해서 모든 소비가 좋은 것은 아니다. 우리가 봐야 할 숫자는 소비총량이다. 재사용이 물질 소비와 쓰레기 발생량의 총량을 줄이지 못한다면 재사용과 재활용의 의미는 매우 제한적이다. 버려진 옷들은 저소득 국가에서 재사용되겠지만 곧바로 쓰레기로 나올 테니 결국 전 세계적으로 의류 소비량과 쓰레기 발생량은 계속 증가하고 있다.
              {"\n"}출처: 홍수열 자원순환사회경제연구소장</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        color: '#333',
    },
});

export default IssueBlueScreen;
