import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput, Posts } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import HeaderLogo from '../../components/HeaderLogo'
import Carousel from '../../components/Carousel'
import NCBag from '../../components/store/NCBag'

const { width } = Dimensions.get('window');

const categoryImages = {
     신상품: require('../../assets/store/all.png'),
     Hot: require('../../assets/store/hot.png'),
     Top: require('../../assets/store/top.png'),
     Bottom: require('../../assets/store/bottom.png'),
     Bag: require('../../assets/store/bag.png'),
};

const posts = {
    신상품: [
      { id: '1', image: require('../../assets/store/NCdinos-bag.png'), title: 'BEAR MAN', name: 'NC다이노스 유니폼 백팩', price: '00,000 원' },
      { id: '2', image: require('../../assets/store/shirtist.png'), title: 'SHIRTIST', name: '바지', price: '00,000 원' },
      { id: '3', image: require('../../assets/store/NCdinos-bag.png'), title: 'BEAR MAN', name: 'NC다이노스 유니폼 백팩', price: '00,000 원' },
      { id: '4', image: require('../../assets/store/shirtist.png'), title: 'SHIRTIST', name: '바지', price: '00,000 원' },
    ],
    Hot: [
      { id: '1', image: require('../../assets/store/NCdinos-bag.png'), title: 'BEAR MAN', name: 'NC다이노스 유니폼 백팩', price: '00,000 원' },
      { id: '2', image: require('../../assets/store/shirtist.png'), title: 'SHIRTIST', name: '바지', price: '00,000 원' },
    ],
    Top: [
      { id: '1', image: require('../../assets/store/shirtist.png'), title: 'SHIRTIST', name: '바지', price: '00,000 원' },
      { id: '2', image: require('../../assets/store/NCdinos-bag.png'), title: 'BEAR MAN', name: 'NC다이노스 유니폼 백팩', price: '00,000 원' },
    ],
    Bottom: [
      { id: '1', image: require('../../assets/store/NCdinos-bag.png'), title: 'BEAR MAN', name: 'NC다이노스 유니폼 백팩', price: '00,000 원' },
      { id: '2', image: require('../../assets/store/shirtist.png'), title: 'SHIRTIST', name: '바지', price: '00,000 원' },
    ],
    Bag: [
      { id: '1', image: require('../../assets/store/shirtist.png'), title: 'SHIRTIST', name: '바지', price: '00,000 원' },
      { id: '2', image: require('../../assets/store/NCdinos-bag.png'), title: 'BEAR MAN', name: 'NC다이노스 유니폼 백팩', price: '00,000 원' },
    ],
};

const StoreScreen = () => {
    const navigation = useNavigation();
    const [selectedCategory, setSelectedCategory] = useState<string>('신상품');
    const [heartStates, setHeartStates] = useState<{ [key: string]: boolean }>({});

    const toggleHeart = (id: string) => {
        setHeartStates(prevState => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <View style={styles.container}>
            <ScrollView>

                <HeaderLogo
                    source={require('../../assets/store/basket.png')}
                />

                <View style={styles.search}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="와이드 팬츠 검색해보세요!"
                        maxLength={20}
                        spellCheck={false}
                        placeholderTextColor="#A9A9A9"
                    />
                    <Image
                        source={require('../../assets/store/search.png')}
                        style={styles.backgroundImage}
                    />
                    <TouchableOpacity style={styles.searchButton}>
                        <Image
                            source={require('../../assets/store/search-btn.png')}
                            style={styles.searchIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Carousel />

                <View style={styles.menu}>
                    {Object.keys(categoryImages).map((category) => (
                        <TouchableOpacity
                            key={category}
                            onPress={() => setSelectedCategory(category)}
                            style={[
                                selectedCategory === category,
                            ]}>
                            <Image
                                source={categoryImages[category]}
                                style={ styles.menuIcon }
                            />
                        </TouchableOpacity>))}
                </View>

                <View style={styles.Item}>
                    <View style={styles.ItemHeader}>
                        <Text style={styles.ItemText}>{selectedCategory}</Text>
                    </View>
                    <View style={styles.goodsContainer}>
                        <ScrollView contentContainerStyle={styles.goods}>
                            {posts[selectedCategory].map((item) => (
                                <View key={item.id}>
                                    <TouchableOpacity
                                        style={styles.heart}
                                        onPress={() => toggleHeart(item.id)} // 하트 눌렀을 때 상태 변경
                                    >
                                        <Image
                                            source={heartStates[item.id]
                                                ? require('../../assets/store/heart-color.png') // 색 있는 하트
                                                : require('../../assets/store/heart.png') // 빈 하트
                                            }
                                            style={styles.heartImage}
                                        />
                                </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigation.navigate('NCBag')}>
                                        <Image style={styles.goodsImage} source={item.image} />
                                        <Text style={styles.goodsText}>{item.title}</Text>
                                        <Text style={styles.goodsText}>{item.name}</Text>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
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
    search: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 27,
        position: 'relative',
        width: width,
        height: 50,
        marginTop: 5,
    },
    textInput: {
        width: 300,
        borderWidth: 0,
        paddingTop: 11,
        paddingLeft: 0,
        color: 'black',
        fontSize: 17,
    },
    backgroundImage: {
        position: 'absolute',
        zIndex: -1,
        width: 373.5,
        height: 60,
    },
    searchButton: {
        position: 'absolute',
        right: '12%',
        backgroundColor: 'transparent',
    },
    searchIcon: {
        width: 25, // 아이콘의 너비 설정
        height: 25, // 아이콘의 높이 설정
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '1%',
        marginTop: 20,
        marginBottom: 18,
        height: 58,
        width: '100%',
    },
    menuIcon: {
        height: 58,
        width: 58,
    },
    Item: {
        position: 'relative',
    },
    ItemHeader: {
        flexDirection: 'row',
        marginHorizontal: '7%',
    },
    ItemText: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    goodsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginHorizontal: '6%',
        marginVertical: '5%',
    },
    goods: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    goodsImage: {
        width: 150,
        height: 170,
        borderRadius: 8,
        backgroundColor: '#F0F0F0',
        justifyContent: 'space-around',
        flexDirection: 'row',
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
    heart: {
        position: 'absolute',
        marginTop: 13,
        right: 13,
        zIndex: 2,
        width: 25,
    },
    heartImage: {
        width: 24,
        height: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        backgroundColor: 'white'
    },
    footerButton: {
        alignItems: 'center',
    },
    footerIcon: {
        alignItems: 'center',
        flex: 1,
        width: 25,
    },
    footerText: {
        fontSize: 12,
        color: '#000',
    },
});

export default StoreScreen;



