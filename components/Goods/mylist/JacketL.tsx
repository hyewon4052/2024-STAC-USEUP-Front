import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import Goods from '../../Goods/mylist/GoodsL'

const { width } = Dimensions.get('window');

const JacketL = () => {
    return (
        <Goods
            source={require('../../../assets/store/jacket/jacket.png')}
            title='BEAR MAN'
            name='NC다이노스 유니폼 백팩'
            price='00,000'
            page='Jacket'
        />
    );
};

JacketL.displayName = 'Jacket';

export default JacketL;



