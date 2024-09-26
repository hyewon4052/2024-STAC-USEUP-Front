import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput, Posts } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import NCBag from '../../components/store/NCBag'

const MyListItem = ({ imageSource, title, productName, price, width, height, page }) => {
    const navigation = useNavigation();
    const [tab, setTab] = useState(0);

    return (
        <TouchableOpacity onPress={() => navigation.navigate(page)}>
            <View style={styles.kitContainer}>
                <Image
                    style={[styles.myListImg, { width: width, height: height }]}
                    source={imageSource}
                />
            </View>
                <Text style={styles.myListTitle}>
                    {title}{'\n'}
                    {productName}
                </Text>
                <Text style={styles.myListTitle2}>
                    {price}
                </Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    kitContainer: {
        width: 100,
        height: 100,
        borderRadius: 4.46,
        paddingTop: 10,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        marginRight: 6,
//         marginBottom: 20,
    },
    myListImg: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 4.46,
    },
    myListTitle: {
        fontSize: 10,
//         marginRight:'auto',
    },
    myListTitle2: {
        fontSize: 10,
        fontWeight: 'bold',
        marginRight:'auto',
        color: '#000',
        marginBottom: 12,
    },
});

export default MyListItem;
