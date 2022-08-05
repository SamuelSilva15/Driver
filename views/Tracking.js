import React from 'react';
import { Text, View, Image } from 'react-native';

import { css } from '../assets/css/Css';



export default function Tracking(props) {
    return (
    <View style={[css.container, css.motorista]}>
        <Image style={css.motorista__image} source={require('../assets/img/motorista.png')}></Image>
        <Text style={css.motorista__text}>O motorista fulano está a caminho</Text>
    </View>
    );
}