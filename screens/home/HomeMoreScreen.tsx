import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import Issue from '../../components/Issue'

const { width } = Dimensions.get('window');

const issueItems = [
    { id: '1', image: require('../../assets/home/trash.png'), page: 'IssueBlue' },
    { id: '2', image: require('../../assets/home/consumption.png'), page: 'IssueYellow' },
    { id: '3', image: require('../../assets/home/clothes.png'), page: 'IssueRed' },
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
                            <View>
                                <Image source={item.image} style={styles.issueImage} />
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
//         paddingHorizontal: 50,
    margin: 'auto',
        backgroundColor: 'white',
        justifyItem: 'space-around',
    },
    issueImages: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    issueImage: {
        marginHorizontal: '2%',
        marginBottom: '10%',
        width: 140,
        height: 170,
    },
});

export default HomeMoreScreen;
