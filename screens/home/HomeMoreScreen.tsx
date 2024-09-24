import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import Issue from '../../components/Issue'

const { width } = Dimensions.get('window');

const issueItems = [
    { id: '1', image: require('../../assets/home/trash.png'), page: 'issueBlue' },
    { id: '2', image: require('../../assets/home/trash.png'), page: 'issueRed' },
    { id: '3', image: require('../../assets/home/trash.png'), page: 'issueYellow' },
]

const HomeMoreScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.issueImages}>
                {issueItems.map((item) => {
                    const IssueComponent = item.issueComponent;
                    return (
                        <TouchableOpacity key={item.id} onPress={() => navigation.navigate(item.page)}>
                            <View style={styles.issueImage}>
                                <item.issueComponent />
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'grid',
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        alignItem: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    issueImages: {
        flexDirection: 'row',
        marginTop: '6%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    issueImage: {
        marginRight: '4.5%',
        marginBottom: '10%',
    },
});

export default HomeMoreScreen;
