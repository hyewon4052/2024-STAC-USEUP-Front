import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Account = ({ name, number, buttons }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.cardTitle}>
                        {name}님
                    </Text>
                    <View style={styles.detailSection}>
                        <Text style={styles.detailText}>
                            기본 결제수단
                        </Text>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.cardText}>
                        {number}
                    </Text>
                    <View style={styles.btnContainer}>
                        {buttons.map((button, index) => (
                            <TouchableOpacity key={index} style={styles.btnSection} onPress={button.onPress}>
                                <Text style={styles.btnText}>
                                    {button.text}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
    },
    subContainer: {
        flexDirection: 'column',
    },
    btnContainer: {
        flexDirection: 'row',
    },
    btnSection: {
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        width: 38,
        height: 24,
        borderColor: '#AAD6FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    detailSection: {
        marginTop: 6,
        marginLeft: 206,
        width: 47,
        height: 16,
        borderRadius: 8,
        borderWidth: 0.8,
        borderColor: '#46A6FF',
        alignItems: 'center',
    },
    detailText: {
        fontWeight: 'bold',
        fontSize: 8,
        color: '#46A6FF',
        textAlign: 'center',
    },
    card: {
        padding: 15,
        borderRadius: 8,
        borderWidth: 1.6,
        borderColor:'#46A6FF',
        backgroundColor: '#F8FCFF',
        elevation: 2,
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 25,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
    },
    cardText: {
        fontSize: 10,
        color: '#ADADAD',
    },
    btnText: {
        fontSize: 10,
        textAlign: 'center',
        color: '#46A6FF',
    },
});

export default Account;
