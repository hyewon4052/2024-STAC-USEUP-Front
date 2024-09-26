import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/native';

const GuideScreen = () => {
    const navigation = useNavigation();

    const youtubeLink = () => {
        const youtubeURL = 'https://www.youtube.com/watch?v=8RaUxT-t0MQ';
        Linking.openURL(youtubeURL).catch(err => console.error("Failed to open URL", err));
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.cover} source={require('../../assets/more/reform-m.png')}/>
                <Image style={styles.background} source={require('../../assets/more/coin.png')}/>
                <TouchableOpacity onPress={youtubeLink}>
                    <Image style={styles.step} source={require('../../assets/more/shortcut.png')}/>
                    <Image style={styles.background} source={require('../../assets/video.png')}/>
                    <Text style={styles.click}>클릭하면 영상으로 이동합니다</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cover: {
        width: '100%',
        height: 240,
        margin: 0,
        padding: 0,
    },
    background: {
        width: 350,
        height: 200,
        marginTop: 20,
        padding: 0,
        marginHorizontal: "7.5%",
    },
    step: {
        alignSelf: 'center',
        marginTop: '10%',
        width: 74,
        height: 30,
    },
    youtubeLink: {
    },
    video: {
        width: '100%',
        height: 300, // 적절한 높이 설정
    },
    click: {
        fontSize: 12,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 130,
        width: 200,
        color: '#46A6FF',
    },
});

export default GuideScreen;
