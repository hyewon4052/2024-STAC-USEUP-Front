// CollectApplyScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import KitComponent from '../components/KitComponent';
import { useNavigation } from '@react-navigation/native';

//컴포넌트화
const CollectApplyScreen = ({ route }) => {
    const navigation = useNavigation();
    const { title, date, iconSource } = route.params; // KitComponent에서 전달된 파라미터 받기

    const handlePress = (title, date, iconSource) => {
        navigation.navigate('CollectApply', { title, date, iconSource });
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.topSection}>
                    <LinearGradient
                        colors={['#FFFFFF', '#F3F3F3']}
                        style={styles.iconContainer}
                    >
                        <Image source={iconSource} style={styles.icon} resizeMode="contain" />
                    </LinearGradient>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.date}>신청 날짜: {date}</Text>
                    </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.subtitleContainer}>
                    <Text style={styles.title}>수거하러 갈 위치</Text>
                    <Text style={styles.address}>서울시 강남구</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.title}>상세주소</Text>
                    <Text style={styles.address}>유즈아파트 101동 401호</Text>
                </View>
            </View>
                <Text style={styles.nextKit}>다음 키트</Text>
            <View style={styles.subSection}>
                <KitComponent
                    title="02 키트"
                    date="08/22"
                    iconSource={require('../assets/calendar3.png')}
                    onPress={handlePress}
                />
                <KitComponent
                    title="03 키트"
                    date="08/22"
                    iconSource={require('../assets/calendar3.png')}
                    onPress={handlePress}
                />
                <KitComponent
                    title="04 키트"
                    date="08/22"
                    iconSource={require('../assets/calendar3.png')}
                    onPress={handlePress}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        margin: 25,
        paddingHorizontal: 9,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    iconContainer: {
        width: 88,
        height: 88,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    titleContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    subtitleContainer: {
        marginBottom: 25,
    },
    topSection: {
        flexDirection: 'row',
//         padding: 20,
        alignItems: 'center',
    },
    subSection: {
        marginHorizontal: 25,
    },
    nextKit: {
        marginLeft: 25,
        fontSize: 18,
        fontWeight: 'bold',
        color : '#000',
    },
    icon: {
        width: 66,
        height: 63,
    },
    title: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    date: {
        fontSize: 12,
        color: '#ADADAD',
        marginTop: -5,
    },
    address: {
        fontSize: 14,
        color: '#ADADAD',
    },
    separator: {
        height: 1,
        padding: 10,    //수정
    },

});

export default CollectApplyScreen;
