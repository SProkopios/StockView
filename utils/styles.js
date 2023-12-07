import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      color: "black",
      width: '98%',
      height: '100%',
      backgroundColor: 'grey'
    },
    title: {
      fontSize: 25,
      fontFamily: 'serif',
      fontWeight: '700',
      color: 'black',
      padding: 10,
    },
    textinput: {
      borderWidth: 1,
      width: '75%',
      borderRadius: 5,
    },
    textinputContainer: {
      flexDirection: 'row'
    },
    newsTitle: {
      color: "black",
      fontSize: 16,
      fontWeight: '700'
      
    },
    newsLink: {
      color: "blue",
      fontSize: 12,
    },
    banner_image: {
      width: 60,
      height: 60,
      marginRight: 10
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    price: {
      marginTop: 90,
      fontSize: 48,
      color: "green",
      fontWeight: '600',
      padding: 15,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: 'green',

    },
    pricePage: {
      justifyContent: 'center',
      marginTop: 25,
      alignItems: 'center'

    },
    tickername: {
      fontSize: 22,
      fontWeight: '700',
      fontFamily: 'serif',
    },
    ticker: {
      fontSize: 17,
      fontWeight: '600',
    },
    fakebuys: {
      flexDirection: 'row',
      justifyContent: 'space-between'
      

    }
  });

  export default styles;