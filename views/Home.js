import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import React, { useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { css } from '../assets/css/Css';
import config from '../config/index.json';


export default function Home(props) {

    const mapEl = useRef(null);
    const [origin, setOrigin]=useState(null);
    const [destination, setDestination]=useState(null);
    const [distancia, setDistancia]=useState(null);
    const [price, setPrice]=useState(null);
    const [address, setAddress]=useState(null);

    useEffect(() => {
        (async function(){
          const { status, permissions} = await Location.requestForegroundPermissionsAsync(Permissions);
          if (status === 'granted'){
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            })
          } else {
            throw new Error('Localização permissão não concedida');
          }
        })();
      }, [])

    return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={css.container}>
        <MapView 
        style={css.map}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        ref={mapEl}
        >

          {destination &&
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleApi}
            strokeWidt={3}
            onReady={result=>{
              setDistancia(result.distance);
              setPrice(result.distance*2);
              mapEl.current.fitToCoordinates(
                result.coordinates, {
                  edgePadding: {
                    top: 100,
                    bottom: 100,
                    left: 100,
                    right: 100
                  }
                }
              )
            }}
            />
          }
          
        </MapView>

      <View style={css.search}>
        <GooglePlacesAutocomplete
          placeholder='Para onde vamos?'
          onPress={(data, details = null) => {
            setAddress(data.description);
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.000922,
              longitudeDelta: 0.000421,
            });
            console.log(destination);
          }}
          query={{
            key: config.googleApi,
            language: 'pt-br',
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{
            listView:{backgroundColor: '#fff', zIndex: 10},
            container:{position: 'absolute', width: '100%'}
          }}
        />
        {distancia &&
        <View style={css.distance} >
          <Text style={css.distance__text}>Distância: {distancia.toFixed(2).replace('.', ',')} km</Text>
          <TouchableOpacity style={css.price}  onPress={() => props.navigation.navigate('Checkout', {price: distancia.toFixed(2), address: address})}>
            <Text style={css.price__text}>
                <MaterialIcons name="payment" size={24} color = 'white'/> 
                <Text>Pagar: R${price.toFixed(2).replace('.', ',')}</Text>
                </Text>
          </TouchableOpacity>
        </View>
      }
    </View>
    </KeyboardAvoidingView>
    );
}