import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MyListItem = ({ imageSource, title, productName, price, width, height, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
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
