# Driver

Driver é um projeto feito com base em um tutorial, que simula o Uber.

*React Native Maps:*
</br> - importação: import MapView from 'react-native-maps';
</br> - instalação: npm install react-native-maps

*React Native MapsDirections:*
</br> - importação: import MapViewDirections from 'react-native-maps-directions';
</br> - instalação: npm install react-native-maps-directions

*Place AutoComplete*: responsável por buscar e marcar lugares utilizando o mapa do google.
</br> - importação: import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
</br> - instalação: npm install react-native-google-places-autocomplete --save    
</br>  **Importações necessárias para utilizar o auto complete**    {
</br>  - import * as Location from 'expo-location';
</br>  - import * as Permissions from 'expo-permissions';  }

**<h1>Tela de inicio:</h1>**

![WhatsApp Image 2022-08-05 at 20 56 42](https://user-images.githubusercontent.com/80695387/183224839-5b484968-3ecd-4ba8-b3e3-1f20cc6a3320.jpeg)

**<h1>Auto Complete:</h1>**

![image](https://user-images.githubusercontent.com/80695387/183225086-2b882ae2-1502-4f6b-90cb-780060533504.png)

**<h1>Distância e preço:</h1>**

![image](https://user-images.githubusercontent.com/80695387/183225126-7a48b054-5f10-4161-a3d1-16c8eb75f557.png)

O Aplicativo também utiliza uma API que é disponibilizada pelo mercado pago: https://www.mercadopago.com.br/developers/pt. Basta cadastrar-se. 
 -- Depois de escolhido o destino, o usuário pode pagar a viagem utilizando o mercadopago, e toda a validação é feita por este.
 
 ![image](https://user-images.githubusercontent.com/80695387/183225570-eaa1748f-d1b8-4c5c-957d-a9c8a5736a07.png)
 
 
Se aprovado, o usuário é encaminhado para esta tela:

![image](https://user-images.githubusercontent.com/80695387/183225586-8f50f91e-558c-4d32-a846-82319fa4fff8.png)






