import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const IssueBlueScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>NOTICE</Text>
                        <Text style={styles.text}>업체에서 수거 옷을 기반으로{'\n'}업사이클링한 제품입니다.</Text>
                        <Image source={require('../../assets/store/NCdinos-bag/NCdinos-bag.png')} style={styles.Images}/>
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
    background: {
        width: '100%',
        margin: 0,
        padding: 0,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000',
    },
    content: {
        fontSize: 14,
        marginVertical: 3,
    },
    textContainer: {
        padding: '8%',
        marginTop: '8%',
    },
    text: {
        paddingVertical: '3%',
        flexDirection: 'row',
        marginVertical: 5,
    },
    Images: {
        width: '100%',
        height: 334,
    },
});

export default IssueBlueScreen;
