import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { WithLocalpng } from 'react-native-png';
import BlueButton from '../../components/BlueButton'

const { width } = Dimensions.get('window');

const BasketScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Item}>
                <View style={styles.goods}>
                    <View>
                        <TouchableOpacity>
                            <TouchableOpacity style={styles.heart}>
                                <Image source={require('../../assets/store/heart.png')} style={styles.heartImage}/>
                            </TouchableOpacity>
                                <Image source={require('../../assets/store/NCdinosBag/NCdinos-bag.png')} style={styles.goodsImage}/>
                                <Text style={styles.goodsText}>BEAR MAN</Text>
                                <Text style={styles.goodsText}>NC 다이노스 유니폼 백팩</Text>
                                <Text style={styles.price}>00,000 원</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <TouchableOpacity style={styles.heart}>
                                <Image source={require('../../assets/store/heart.png')} style={styles.heartImage}/>
                            </TouchableOpacity>
                                <Image source={require('../../assets/store/shirtist/shirtist.png')} style={styles.goodsImage}/>
                                <Text style={styles.goodsText}>SHIRTIST</Text>
                                <Text style={styles.goodsText}>제품명</Text>
                                <Text style={styles.price}>00,000 원</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <TouchableOpacity style={styles.heart}>
                                <Image source={require('../../assets/store/heart.png')} style={styles.heartImage}/>
                            </TouchableOpacity>
                                <Image source={require('../../assets/store/NCdinosBag/NCdinos-bag.png')} style={styles.goodsImage}/>
                                <Text style={styles.goodsText}>BEAR MAN</Text>
                                <Text style={styles.goodsText}>제품명</Text>
                                <Text style={styles.price}>00,000 원</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <TouchableOpacity style={styles.heart}>
                                <Image source={require('../../assets/store/heart.png')} style={styles.heartImage}/>
                            </TouchableOpacity>
                                <Image source={require('../../assets/store/shirtist/shirtist.png')} style={styles.goodsImage}/>
                                <Text style={styles.goodsText}>SHIRTIST</Text>
                                <Text style={styles.goodsText}>제품명</Text>
                                <Text style={styles.price}>00,000 원</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <BlueButton
                name='구매 하기'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    Item: {
        position: 'relative',
    },
    goods: {
        marginTop: '4%',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    goodsImage: {
        width: 170,
        height: 170,
        borderRadius: 8,
        backgroundColor: '#F0F0F0',
        justifyContent: 'space-around',
    },
    heart: {
        position: 'absolute',
        marginTop: 13,
        right: 13,
        zIndex: 2,
    },
    heartImage: {
        width: 24,
        height: 24,
    },
    goodsText: {
        marginTop: 4,
    },
    price: {
        marginTop: 3,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
    },
});

export default BasketScreen;
