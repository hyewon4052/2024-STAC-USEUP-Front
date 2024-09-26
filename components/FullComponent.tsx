import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import KitComponent from './KitComponent';

const FullComponent = ({ title, date, iconSource }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (iconSource === require('../assets/shopping3.png')) {
            navigation.navigate('Purchase', {
                title: title,
                date: date,
                iconSource: iconSource,
            });
        } else if (iconSource === require('../assets/calendar3.png')) {
            navigation.navigate('Apply', {
                title: title,
                date: date,
                iconSource: iconSource,
            });
        } else if (iconSource === require('../assets/check3.png')) {
            navigation.navigate('Success', {
                title: title,
                date: date,
                iconSource: iconSource,
            });
        }
    };

    // 키트 데이터
    const kits = [
        { title: "NC 다이노스 유니폼 백팩", date: "08/22", icon: require('../assets/shopping3.png') },
        { title: "01 키트", date: "08/22", icon: require('../assets/calendar3.png') },
        { title: "02 키트", date: "08/22", icon: require('../assets/calendar3.png') },
        { title: "03 키트", date: "08/23", icon: require('../assets/check2.png') },
        { title: "04 키트", date: "08/24", icon: require('../assets/check3.png') },
    ];

    // 해당 iconSource에 맞는 키트만 필터링
    const filteredKits = kits.filter(kit => kit.icon === iconSource);

    return (
        <View>
            <View style={styles.card}>
                <LinearGradient colors={['#FFFFFF', '#F3F3F3']} style={styles.iconContainer}>
                    <Image source={iconSource} style={styles.icon} resizeMode="contain" />
                </LinearGradient>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>날짜: {date}</Text>
                    <View style={styles.infoContainer}>
                        {iconSource === require('../assets/shopping3.png') ? (
                            <View style={styles.infoContainer2}>
                                <View style={styles.infoItem}>
                                    <Text style={styles.subTitle}>위치</Text>
                                    <Text style={styles.infoText}>서울시 강남구</Text>
                                </View>
                                <View style={styles.infoItem}>
                                    <Text style={styles.subTitle}>상세주소</Text>
                                    <Text style={styles.infoText}>유즈아파트 101동 401호</Text>
                                </View>
                            </View>
                        ) : (
                            <View style={styles.infoContainer2}>
                                <View style={styles.infoItem}>
                                    <Text style={styles.subTitle}>수거하러 갈 위치</Text>
                                    <Text style={styles.infoText}>서울시 강남구</Text>
                                </View>
                                <View style={styles.infoItem}>
                                    <Text style={styles.subTitle}>상세주소</Text>
                                    <Text style={styles.infoText}>유즈아파트 101동 401호</Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </View>
            <View style={styles.nextContainer}>
                <Text style={styles.nextKit}>다음 상품</Text>
                <ScrollView>
                    {filteredKits.map((kit, index) => (
                        <KitComponent
                            key={index}
                            title={kit.title}
                            date={kit.date}
                            iconSource={kit.icon}
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {

        padding: 20,
        marginRight: -50,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#ADADAD',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4,
        marginTop: 20,
        marginBottom: 10,
    },
    iconContainer: {
        width: 88,
        height: 88,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    infoContainer2: {
        flexDirection: 'row',
        marginTop: 30,
    },
    nextContainer: {
        marginTop: 10,
        padding: 10,
    },
    icon: {
        width: 80,
        height: 80,
    },
    title: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 3,
        marginTop: -80,
        marginLeft: 110,
    },
    nextKit: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    date: {
        fontSize: 12,
        color: '#ADADAD',
        marginBottom: 30,
        marginLeft: 110,
    },
    infoContainer: {},
    infoItem: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 25,
        paddingRight: 40,
    },
    subTitle: {
        fontSize: 14,
        color: '#000000',
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 14,
        color: '#6B6B6B',
        marginTop: 10,
    },
});

export default FullComponent;
