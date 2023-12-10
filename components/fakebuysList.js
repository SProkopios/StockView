import { Alert, View } from 'react-native';
import styles from '../utils/styles';
import { useState, useEffect } from 'react';
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../utils/firebase-conf';
import { FlatList } from 'react-native';
import { ListItem } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';





export default function FakebuysList({ navigation }) {
  const [fakebuys, setFakebuys] = useState([]);
  const fakebuysCollectionRef = collection(db, "fakebuys");
  const [update, setUpdate] = useState(false);
  const route = useRoute();
  const fromSearch = route.params?.fromSearch || false; //if no value, it will set value as false
  const nav = useNavigation();



  //Getting data from Firebase for Flatlist
  useEffect(() => {
    const getFakebuys = async () => {
      //getting data from firebase
      const data = await getDocs(fakebuysCollectionRef);
      //setting data to fakebuys 
      setFakebuys(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getFakebuys();
  },[]);


  //Activated if user bought stock from Search screen or deleted item
  useEffect(() => {
    const getFakebuys = async () => {
      const data = await getDocs(fakebuysCollectionRef);
      await setFakebuys(data.docs.map((doc) => ({...doc.data(), id: doc.id })));

      //if user fakebought from search screen, this is activated
      if (fromSearch) {
        navigation.setParams( { fromSearch: false } );
        Alert.alert("Stock bought succefully!!")
      } 
    }
    getFakebuys();
  },[update, fromSearch, navigation]);


  //Deleting item from firebase using id
  const deleteBuy = async (id) => {
    const buyDoc = doc(db, "fakebuys", id);
    await deleteDoc(buyDoc);
    //updating to refresh tab
    await setUpdate((prevUpdate) => !prevUpdate);
    Alert.alert("Stock deleted succefully!")
  };


  //navigating to search tab if ticker is pressed
  const toSearch = (ticker) => {
    nav.navigate("Search", {fromList: ticker});
  }


  return (
    <View>
      <View style={{ width: '99%', height: '90%' }}>
        <FlatList
          keyExtractor={(item, id) => id.toString()}
          renderItem={({item}) => 
          <TouchableOpacity onLongPress={() => deleteBuy(item.id)} onPress={() => toSearch(item.ticker)}>
          <ListItem bottomDivider >
            <ListItem.Content style={styles.fakebuys} >
              <ListItem.Title >Ticker: {item.ticker} </ListItem.Title>
              <ListItem.Subtitle>Buying price: {item.price} USD</ListItem.Subtitle>
                </ListItem.Content>
          </ListItem>
          </TouchableOpacity>}
          data={fakebuys}
        />
      </View>
    </View>
  );
}