import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PurchaseComponent = ({ title, date, iconSource, onPress }) => {

    const navigation = useNavigation();

        const handlePress = () => {
            if (iconSource === require('../assets/shopping3.png')) {
                navigation.navigate('Purchase',{
                    title: title,
                    date: date,
                    iconSource: iconSource,
                    onPress: onPress,
                });
            }
            else if(iconSource === require('../assets/calendar3.png')) {
                navigation.navigate('Apply',{
                    title: title,
                    date: date,
                    iconSource: iconSource,
                    onPress: onPress,
                });
            }
            else if(iconSource === require('../assets/check3.png')) {
                navigation.navigate('Success',{
                    title: title,
                    date: date,
                    iconSource: iconSource,
                    onPress: onPress,
                });
            }
        };
    return (
        <View style={styles.Container}>
            <View style={styles.card}>
                <View style={styles.contentContainer}>
                    <Image source={iconSource} style={styles.icon} resizeMode="contain" />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.date}>신청 날짜 : {date}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: 100,
        height: 100,
        borderRadius: 4.46,
        paddingTop: 10,
        alignItems: 'center',
        marginRight: 6,
    },
    titleContainer: {
        margin: 30,
        fontWeight: 'bold',
        fontSize: 20,
    },
    card: {
        backgroundColor: 'fff',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 310,
        height: 273,
//         backgroundColor: "#000",
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 150,
        marginTop: 40,
    },
    textContainer: {
        marginLeft: 13,
        marginTop: 13,
    },
    moreButton: {
        left: 80,
        color: 'D3CFCF',
    },
    title: {
        width: 120,
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 3,
    },
    date: {
        fontSize: 12,
        color: '#ADADAD',
        marginBottom: 15,
    },
    icon: {
        width: 50,
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOpacity: 0.06,
        shadowRadius: 7,
        shadowOffset: { width: 0, height: 4 },
        elevation: 7,
        borderRadius: 8,
        marginVertical: 30,
    }
});

export default PurchaseComponent;