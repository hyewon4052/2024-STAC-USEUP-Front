import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PurchaseComponent from '../components/PurchaseComponent';
import KitComponent from '../components/KitComponent';
import FullComponent from '../components/FullComponent';

const ApplyScreen = ({ route }) => {
    const { title, date, iconSource, onPress } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <FullComponent
                title={title}
                date={date}
                iconSource={iconSource}
                onPress={onPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        width: 310,
        height: 273,
        borderRadius: 4.46,
        paddingTop: 10,
//         backgroundColor: '#F0F0F0',
        alignItems: 'center',
        marginHorizontal: 25,
    },
    titleContainer: {
        margin: 30,
        fontWeight: 'bold',
        fontSize: 20,

    },
});

export default ApplyScreen;
