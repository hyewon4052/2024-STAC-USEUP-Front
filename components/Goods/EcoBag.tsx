import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import Goods from '../Goods/Goods'

const { width } = Dimensions.get('window');

const EcoBag = () => {
    return (
        <Goods
            source={require('../../assets/store/ecoBag/ecobag.png')}
            title='BEAR MAN'
            name='NC다이노스 유니폼 백팩'
            price='00,000'
            page='NCBag'
        />
    );
};
EcoBag.displayName = 'EcoBag';
export default EcoBag;



