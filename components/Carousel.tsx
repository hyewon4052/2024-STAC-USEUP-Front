import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const carouselItems = [
    { id: '1', image: require('../assets/home/reform.png'), page: 'ReformScreen' },
    { id: '2', image: require('../assets/home/new-clothes.png'), page: 'StoreScreen' },
];

const Carousel = () => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    // 이전 아이템으로 이동하는 함수
    const goToPrevious = () => {
        if (currentIndex > 0) {
            flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
            setCurrentIndex(currentIndex - 1);
        }
    };

    // 다음 아이템으로 이동하는 함수
    const goToNext = () => {
        if (currentIndex < carouselItems.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <View style={styles.carousel}>

            <FlatList
                ref={flatListRef}
                data={carouselItems}
                horizontal
                pagingEnabled
                resizeMode="cover"
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Image source={item.image} style={styles.carouselImage} />
                    </TouchableOpacity>
                )}
                onMomentumScrollEnd={(event) => {
                    // 스크롤이 끝났을 때 현재 페이지 인덱스를 업데이트
                    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(newIndex);
                }}
            />

            {currentIndex > 0 && (
                <TouchableOpacity style={styles.arrowLeft} onPress={goToPrevious}>
                    <Image source={require('../assets/arrow-L-W.png')} style={styles.arrowImage} />
                </TouchableOpacity>
            )}

            {currentIndex < carouselItems.length - 1 && (
                <TouchableOpacity style={styles.arrowRight} onPress={goToNext}>
                   <Image source={require('../assets/arrow-R-W.png')} style={styles.arrowImage} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        width: width,
        position: 'relative',
        alignItems: 'center',
    },
    carouselImage: {
        width: width,
        height: 225,
    },
    arrowLeft: {
        position: 'absolute',
        left: 10,
        top: '50%',
        zIndex: 1,
    },
    arrowRight: {
        position: 'absolute',
        right: 10,
        top: '50%',
        zIndex: 1,
    },
    arrowImage: {
        width: 44,
        height: 44,
    },
});

export default Carousel;
