import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PurchaseComponent = ({ title, date, iconSource, onPress }) => {
    const formattedTitle = title.length > 7 ? title.substring(0,7) + '...' : title;

    return (
        <View style={styles.Container}>
            <View style={styles.card}>
                <View style={styles.contentContainer}>
                    <Image source={iconSource} style={styles.icon} resizeMode="contain" />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{formattedTitle}</Text>
                        <Text style={styles.date}>날짜 : {date}</Text>
                    </View>
                    <View style={styles.addContainer}>
                        <TouchableOpacity onPress={onPress}>
                            <Text style={styles.moreButton}>더보기</Text>
                        </TouchableOpacity>
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
//         backgroundColor: '#F0F0F0',
        alignItems: 'center',
        marginRight: 6,
    },
    titleContainer: {
        margin: 30,
        fontWeight: 'bold',
        fontSize: 20,

    },
    card: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 290,
        height: 45,
//         backgroundColor: "#000",
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 150,
        marginTop: 40,
//         width: '100%',
    },
    textContainer: {
        marginLeft: 13,
        marginTop: 13,
    },
    addContainer: {
        marginHorizontal: 10,
    },
    title: {
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
    moreButton: {
        color: '#D3CFCF',
        marginTop: 5,
        marginLeft: 10,
        alignSelf: 'flex-end',
    },
    icon: {
        width: 50,
        height: 50,
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
