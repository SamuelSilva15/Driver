import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import config from '../config';

import { css } from '../assets/css/Css';


export default function Checkout(props) {

    useEffect(() => {
        async function sendServer(){
            let response = await fetch(config.urlRoot, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    price: props.route.params.price,
                    address: props.route.params.address
                })
            });
            let json = await response.json();
            console.log(json);
        }
        sendServer();
    }, []);
    console.log(props);

    return (
        <View style={css.container}>
            <Text>O valor da corrida é: {props.route.params.price}.</Text>
            <Text>Seu Destino é: {props.route.params.address}.</Text>
        </View>
    );
}