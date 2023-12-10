import { Text, View, FlatList, Touchable, TouchableOpacity, Linking } from 'react-native';
import styles from '../utils/styles';
import { useEffect, useState } from 'react';
import { getNews } from '../utils/fetching';
import { ListItem } from '@rneui/themed';
import { Image } from 'react-native';


export default function Frontpage() {
  const[news, setNews] = useState();

  //fetching news
  useEffect(() => {
    getNews()
    .then(data => {
      setNews(data);
    })
 }, []);
  

 //when pressing news, this opens link to that news to browser
  const itemPress = (url) => {
    Linking.openURL(url);
  };


    return (
      <View style={styles.container}>
        <Text style={styles.title}>News</Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
          <TouchableOpacity onPress={() => itemPress(item.url)}>
          <ListItem bottomDivider >
            <ListItem.Content style={styles.content}>
              <Image source={{ uri:item.banner_image}} style={styles.banner_image}/>
              <ListItem.Title style={styles.newsTitle} onClick={item.url}>{item.title}</ListItem.Title>
                {/* <ListItem.Subtitle style={styles.newsLink}>{item.url}</ListItem.Subtitle> */}
                </ListItem.Content>
          </ListItem>
          </TouchableOpacity>}
          data={news}
        />
      </View>
    );
  }
  

  