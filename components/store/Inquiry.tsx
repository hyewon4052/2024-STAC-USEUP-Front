import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const IssueBlueScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>지금 보고있는 상품이 궁금하신가요?</Text>
                <Text>예) 상품의 재질이 궁금해요</Text>
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
    header: {
        position: 'absolute',
        padding: '4%',
        width: '100%',
        marginLeft: '4%',
        marginTop: '7%',
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
});

export default IssueBlueScreen;
