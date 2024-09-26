// CollectApplyingScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MyListItem from '../components/MyListItem';
import NCBagL from '../components/Goods/mylist/NCBagL'
import ShirtistL from '../components/Goods/mylist/ShirtistL'
import JacketL from '../components/Goods/mylist/JacketL'
import SkirtL from '../components/Goods/mylist/SkirtL'
import DressesL from '../components/Goods/mylist/DressesL'
import EcoBagL from '../components/Goods/mylist/EcoBagL'

const CollectSuccessScreen = () => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('AccountInformation');
    }

    return (
        <View style={styles.container}>
            <View style={styles.accountSection}>
            <ScrollView
                style={styles.scrollView}
                showsHorizontalScrollIndicator={false} // 수평 스크롤 바 숨기기
                showsVerticalScrollIndicator={false} // 수직 스크롤 바 숨기기
                contentContainerStyle={{ paddingBottom: 10}}>

                <LinearGradient
                    colors={['#36B7FF', '#5883FF']}
                    style={styles.collectBtn}
                >
                    <View style={styles.accountContainer}>
                        <Image
                            style={styles.accountImg}
                            source={require('../assets/person.png')}
                        />
                        <Text style={styles.accountText}>
                            유즈업님
                        </Text>
                        <TouchableOpacity onPress={handlePress}>
                            <Image
                                style={styles.accountImg2}
                                source={require('../assets/Vector.png')}
                            />
                        </TouchableOpacity>
                    </View>
                        <View style={styles.pointContainer}>
                            <Text style={styles.subText}>POINT</Text>
                            <Text style={styles.subText}>130‚500</Text>
                            <Image
                                style={styles.pointImg}
                                source={require('../assets/coin.png')}
                            />
                        </View>
                    </LinearGradient>
                <View style={styles.myShopContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.myShopTitle}>
                            마이쇼핑
                        </Text>
                        <Image
                            style={styles.myShopImg}
                            source={require('../assets/shopping2.png')}
                        />
                    </View>
                    <View style={styles.detailContainer}>
                        <View style={[styles.myShopLabelSection, { borderLeftWidth: 0}]}>
                            <TouchableOpacity>
                                <Text style={styles.myShopNumber}>4</Text>
                                <Text style={styles.myShopLabel}>전체</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.myShopLabelSection}>
                            <TouchableOpacity>
                                <Text style={styles.myShopNumber}>2</Text>
                                <Text style={styles.myShopLabel}>입금/결제</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.myShopLabelSection}>
                            <TouchableOpacity>
                                <Text style={styles.myShopNumber}>2</Text>
                                <Text style={styles.myShopLabel}>배송중</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.myShopLabelSection, { borderRightWidth: 0}]}>
                            <TouchableOpacity>
                                <Text style={styles.myShopNumber}>1</Text>
                                <Text style={styles.myShopLabel}>배송완료</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={styles.myListText}>마이찜 목록</Text>
                <View style={styles.myListContainer}>
                        <View style={styles.myListSection}>
                            <NCBagL />
                        </View>
                </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
//                             <ShirtistL />
//                             <SkirtL />
//                             <EcoBagL />
//                             <JacketL />
//                             <DressesL />
    container: {
        display: 'grid',
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 31,
        backgroundColor: '#fff',
        elevation: 8,
    },
    accountContainer: {
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pointContainer: {
        flexDirection: 'row',
        height: 40,
        marginHorizontal: 15,
        borderRadius: 8,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    myShopContainer: {
        flexDirection: 'column',
        width: 'auto',
        height: 121,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#6F6F6F',     //색상 수정
        shadowOffset: { width: 0, height: 4 },  // 수평, 수직 그림자 오프셋
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 3,
        padding: 15,
        marginVertical: 30,
    },
    detailContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        textAlign: 'center',
    },
    myShopLabelSection: {
        width: 79,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#EEEEEE',
        marginBottom: 50,
    },

    myListContainer: {
        display: 'grid',
        width: 300,
//         padding: 25,
        flex: 1,
//         flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    myListSection: {
        flexDirection: 'row',
//         flexWrap: 'wrap',
    },

    accountSection: {
        elevation: 4,
    },
    myShopTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },
    accountText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        marginRight: 160,
        marginTop: 29,
        color: '#fff',
    },
    myShopItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        paddingVertical: 20,
    },
    myShopNumber:{
        fontSize: 24,
        marginTop: 5,
        fontWeight: 'bold',
        color: '#D1D2D1',
        textAlign: 'center',
    },
    myShopLabel: {
        fontSize: 14,
        color: '#D1D2D1',
        textAlign: 'center',
        marginBottom: 7,
    },
    myListText: {
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#000',
    },
    accountImg: {
        width: 47,
        height: 47,
        marginVertical: 20,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
    accountImg2: {
        width: 3,
        height: 12,
        marginTop: 19,
        marginLeft: 'auto',
    },
    pointImg: {
        width: 24,
        height: 24,
        marginHorizontal: 20,
    },
    myShopImg: {
        width: 24,
        height: 24,
    },
    collectBtn: {
        width: 'auto',
        height: 141,
        borderRadius: 12,
        marginTop: 22,
    },
    collectBtnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    subText: {
        marginLeft: 20,
        marginRight: 50,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    }
/* TODO: POINT ICON 마진 조정 */

});

export default CollectSuccessScreen; // 내보내기 확인
