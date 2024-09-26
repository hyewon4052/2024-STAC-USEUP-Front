import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const GoodsCarousel = ({ images }) => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    // 이전 아이템으로 이동
    const goToPrevious = () => {
        if (currentIndex > 0) {
            flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
            setCurrentIndex(currentIndex - 1);
        }
    };

    // 다음 아이템으로 이동
    const goToNext = () => {
        if (currentIndex < images.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <View style={styles.carousel}>
            <FlatList
                ref={flatListRef}
                data={images.map((image, index) => ({ id: index.toString(), image }))}
                horizontal
                pagingEnabled
                resizeMode="cover"
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image source={item.image} style={styles.carouselImage} />
                )}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(newIndex);
                }}
                keyExtractor={(item) => item.id}
            />

            {currentIndex > 0 && (
                <TouchableOpacity style={styles.arrowLeft} onPress={goToPrevious}>
                    <Image source={require('../../assets/arrow-L-B.png')} style={styles.arrowImage} />
                </TouchableOpacity>
            )}

            {currentIndex < images.length - 1 && (
                <TouchableOpacity style={styles.arrowRight} onPress={goToNext}>
                   <Image source={require('../../assets/arrow-R-B.png')} style={styles.arrowImage} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        width: width,
        backgroundColor: '#F0F0F0',
        height: 398,
    },
    carouselImage: {
        width: width,
        height: 334,
        margin: 'auto',
        marginHorizenal: 5,
        justifyContent: 'space-around',
    },
    arrowLeft: {
        position: 'absolute',
        left: 0,
        top: '45%',
        zIndex: 1,
    },
    arrowRight: {
        position: 'absolute',
        right: 0,
        top: '45%',
        zIndex: 1,
    },
    arrowImage: {
        width: 60,
        height: 60,
    },
});

export default GoodsCarousel;
