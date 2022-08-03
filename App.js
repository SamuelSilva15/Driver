import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { css } from './assets/css/Css';
import config from './config/index.json';


export default function App() {

    const mapEl = useRef(null);
    const [origin, setOrigin]=useState(null);
    const [destination, setDestination]=useState(null);
    const [distancia, setDistancia]=useState(null);

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
      <View style={css.container}>
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
          styles={{listView:{height: 100}}}
        />
        <View>
        {distancia &&
          <Text>Distância: {distancia}m</Text>
        }
      </View>
    </View>
    </View>
    );
}