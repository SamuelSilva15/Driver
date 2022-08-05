import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    map: {
        height: '60%',
      },
    

    search: {
        height: '40%',
        backgroundColor: 'black',

      },

      distance: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      },

      distance__text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 15,
        padding: 7,
        backgroundColor: '#00CED1',
      },

      price: {
        fontSize: 20,
        backgroundColor: '#00CED1',
        padding: 7,
        borderRadius: 10,
        marginTop: 50,
      },

      price__text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
      },

      checkoutmp: {
        flex: 1,
        marginTop: 30
      },

      motorista: {
        alignItems: 'center',
        backgroundColor: '#222'
      },

      motorista__image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20
      }, 

      motorista__text: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fff'
      }
  });

export {css};