import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';
import TabScreen from '../../components/TabScreen';
import Info from '../../components/store/Info';
import Inquiry from '../../components/store/Inquiry';
import GoodsCarousel from '../../components/store/GoodsCarousel';
import Name from '../../components/store/Name';
import GoodsFooter from '../../components/store/GoodsFooter';

const { width } = Dimensions.get('window');

const NCdinosbag = () => {
    const navigation = useNavigation();
    const [tab, setTab] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.Wrap}>
                <GoodsCarousel images={[require('../../assets/store/dress/dresses.png'), require('../../assets/store/dress/dresses.png')]} />

                <Name
                    seller='BEARMAN'
                    name='NC다이노스 유니폼 백팩'
                    price='28,000'

                    size='L'
                    state='약간 사용감 있음'
                    deliver='7/23(화) 도착'
                    percent='확률 90%'
                />

                <TabScreen
                    contents={[
                        <View>
                            <Info />
                            <Image source={require('../../assets/store/dress/dresses.png')} style={styles.Images}/>
                        </View>,
                        <View>
                            <Inquiry />
                        </View>,
                    ]}
                >
                </TabScreen>
            </ScrollView>
            <GoodsFooter />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Wrap: {
        marginBottom: 85,
    },
    Images: {
        width: 300,
        height: 334,
        margin: 'auto',
        marginVertical: 60,
    },
});

export default NCdinosbag;