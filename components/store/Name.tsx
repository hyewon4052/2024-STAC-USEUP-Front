import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Name = (props) => {
    const navigation = useNavigation();
    const [tab, setTab] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView>

            <View style={styles.title}>
                <Text style={styles.seller}>{props.seller}</Text>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.price}>{props.price}원</Text>
            </View>

            <View style={styles.state}>
                <View>
                    <Text style={styles.setUp}>사이즈</Text>
                    <Text style={styles.setUp}>상품 상태</Text>
                    <Text style={styles.setUp}>배송</Text>
                </View>

                <View>
                    <Text style={styles.data}>{props.size}</Text>
                    <Text style={styles.data}>{props.state}</Text>
                    <View style={styles.delivery}>
                        <Text style={styles.deliver}>{props.deliver}</Text>
                        <Text style={styles.data}> {props.percent}</Text>
                    </View>
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
        marginBottom: 10,
    },
    title: {
        marginVertical: 20,
        marginLeft: 30,
    },
    seller: {
        fontSize: 14,
        color: '#8B8B8B',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 3,
        color: '#2E2E2E',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#46A6FF',
    },
    state: {
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between',
    },
    setUp: {
        color: '#B9B9B9',
    },
    data: {
        color: '#000',
        textAlign: 'right',
    },
    delivery: {
        flexDirection: 'row',
    },
    deliver: {
        color: '#46A6FF',
    },
});

export default Name;