import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const IssueBlueScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>NOTICE</Text>
                <Text style={styles.text}>업체에서 수거한 옷을 기반으로</Text>
                <Text style={styles.text}>업사이클링한 제품입니다.</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10,
        color: '#8B8B8B',
        alignSelf: 'center',
    },
    text: {
        flexDirection: 'row',
        marginVertical: 2,
        alignSelf: 'center',
    },
});

export default IssueBlueScreen;
