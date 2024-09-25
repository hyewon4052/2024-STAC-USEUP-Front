import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import CollectTabView from '../components/collect-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ActivityHistory from '../components/ActivityHistory';
import PurchaseComponent from '../components/PurchaseComponent';

// 화면 높이 가져오기
const { height } = Dimensions.get('window');

const AllActivityScreen = () => {
    const purchaseData = [
        {
           title: "NC 다이노스 유니폼 백팩", // 여기서 title을 정의
           date : "08/22", // 여기서 date를 정의
           iconSource : require('../assets/shopping2.png'),
        },
        {
           title: "02 키트", // 여기서 title을 정의
           date : "08/22", // 여기서 date를 정의
           iconSource : require('../assets/calendar2.png'),
        },
        {
           title: "03 키트", // 여기서 title을 정의
           date : "08/22", // 여기서 date를 정의
           iconSource : require('../assets/calendar2.png'),
        },
        {
           title: "01 키트", // 여기서 title을 정의
           date : "07/13", // 여기서 date를 정의
           iconSource : require('../assets/check3.png'),
        },
        {
           title: "02 키트", // 여기서 title을 정의
           date : "07/13", // 여기서 date를 정의
           iconSource : require('../assets/check3.png'),
        },
        {
           title: "03 키트", // 여기서 title을 정의
           date : "07/13", // 여기서 date를 정의
           iconSource : require('../assets/check3.png'),
        },
        {
           title: "04 키트", // 여기서 title을 정의
           date : "08/23", // 여기서 date를 정의
           iconSource : require('../assets/check3.png'),
        },
    ];

    const sortedPurchaseData = purchaseData.sort((a, b) => {
        const date1 = new Date(`2023-${a.date}`);
        const date2 = new Date(`2023-${b.date}`);

        return date2 - date1;
    });
      return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false} // 수평 스크롤 바 숨기기
                showsVerticalScrollIndicator={false} // 수직 스크롤 바 숨기기
            >
                <Text style={styles.titleText}>모든 활동내역</Text>
                <ActivityHistory/>
                <View style={styles.subContainer}>
                    {sortedPurchaseData.map(( item, index ) => (
                        <PurchaseComponent
                            key={index}
                            title={item.title}
                            date={item.date}
                            iconSource={item.iconSource}
                        />
                    ))}
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
    subContainer: {
        marginVertical: 80,
    },
    titleText: {
        margin : 25,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default AllActivityScreen;