import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import config from '../config';
import { WebView } from 'react-native-webview';

import { css } from '../assets/css/Css';


export default function Checkout(props) {

    const [url, setUrl] = useState(null);

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
            setUrl(json);
            console.log(url);
        }
        sendServer();
    }, []);

    async function stateChange(state){
        console.log(state);
    }

    return (
        <View style={css.container}>
            {url && 
            <WebView
            style={css.checkoutmp}
            originWhitelist={['*']}
            source={{uri: url}}
            startInLoadingState={true}
            onNavigationStateChange={state=>stateChange(state)}
            />
            }
        </View>
    );
}