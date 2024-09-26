import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import CollectTabView from '../components/collect-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import ActivityHistory from '../components/ActivityHistory';
import PurchaseComponent from '../components/PurchaseComponent';

const PurchaseSuccessScreen = () => {
//     const purchaseData = [
//         { title: "NC 다이노스 ..", date: "08/22", iconSource: require('../assets/calendar3.png') },
//         { title: "NC 다이노스 ..", date: "08/22", iconSource: require('../assets/calendar3.png') },
//         { title: "NC 다이노스 ..", date: "08/22", iconSource: require('../assets/calendar3.png') },
//         { title: "NC 다이노스 ..", date: "08/22", iconSource: require('../assets/calendar3.png') },
//         { title: "NC 다이노스 ..", date: "08/22", iconSource: require('../assets/calendar3.png') },
//         { title: "NC 다이노스 ..", date: "08/22", iconSource: require('../assets/calendar3.png') },
//     ];
      return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false} // 수평 스크롤 바 숨기기
                showsVerticalScrollIndicator={false} // 수직 스크롤 바 숨기기
            >
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>구매내역</Text>
                        <Text style={{ marginVertical: 350, marginLeft: 90, fontSize: 30}}>
                            개발 준비 중입니다. {'\n'}
                        </Text>
                </View>
            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    titleText: {
        marginLeft : 25,
        marginTop: 20,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default PurchaseSuccessScreen;