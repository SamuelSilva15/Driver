import React from 'react';
import { Text, View } from 'react-native';

import { css } from '../assets/css/Css';



export default function Tracking(props) {
    return (
    <View style={css.container}>
        <Text>Seu pagamento foi aprovado.</Text>
    </View>
    );
}