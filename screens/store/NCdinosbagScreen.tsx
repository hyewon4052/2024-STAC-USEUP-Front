import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { WithLocalpng } from 'react-native-png';
import TabScreen from '../../components/TabScreen';
import Info from '../../components/store/Info';
import Inquiry from '../../components/store/Inquiry';
import GoodsCarousel from '../../components/store/GoodsCarousel';

const { width } = Dimensions.get('window');

const carouselItems = [
    { id: '1', image: require('../../assets/store/NCdinos-bag/NCdinos-bag.png') },
    { id: '2', image: require('../../assets/store/NCdinos-bag/NCdinos-bag.png') },
];

const NCdinosbag = () => {
    const navigation = useNavigation();
    const [tab, setTab] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView>
                <GoodsCarousel images={[require('../../assets/store/NCdinos-bag/NCdinos-bag.png'), require('../../assets/store/NCdinos-bag/NCdinos-bag.png')]} />

                <TabScreen
                    contents={[
                        <View>
                            <Info />
                        </View>,
                        <View>
                            <Inquiry />
                        </View>,
                    ]}
                >
                </TabScreen>

            </ScrollView>

            <View style={styles.footer}>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    carousel: {
        width: width,
        backgroundColor: '#F0F0F0',
        height: 398,
    },
    carouselImage: {
        width: width,
        height: 334,
        marginVertical: '7%',
//         marginHorizontal: '6%',
        justifyContent: 'space-around',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        backgroundColor: 'gray'
    },
    footerButton: {
        alignItems: 'center',
    },
    footerIcon: {
        alignItems: 'center',
        flex: 1,
        width: 25,
    },
    footerText: {
        fontSize: 12,
        color: '#000',
    },
});

export default NCdinosbag;