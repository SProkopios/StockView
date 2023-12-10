import { View, TextInput, Button, Text } from 'react-native';
import React, { useEffect, useState } from "react";
import styles from "../utils/styles";
import { Icon } from '@rneui/base';
import { getData } from '../utils/fetching';
import {db} from '../utils/firebase-conf';
import {collection, addDoc} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


export default function Search() {
    const [keyword, setKeyword] = useState();
    const [data, setData] = useState();
    const fakebuysCollectionRef = collection(db, "fakebuys");
    const navigation = useNavigation();
    const route = useRoute();
    const { fromList } = route.params ?? { fromList: null };

    
    //activated when navigated from fakebuyslist with ticker symbol
    useEffect(() => {
        if (fromList !== null) {
            const holdTicker = fromList;
            navigation.setParams( { fromList: null } );
            settingKeyword(holdTicker);
            getPrices();
        }
    },[fromList, navigation]);



    //setting keyword with await for useEffect
    const settingKeyword = async (word) => {
        await setKeyword(word);
        getPrices();
    };


    //getting price data with symbol from fetching.js
    const getPrices = async () => {
        const fetchResponse = await getData(keyword);
        await setData(fetchResponse);
    };


    //"fakebuying" and navigating to fakebuylist
    const fakeBuy = async () => {
        await addDoc(fakebuysCollectionRef, { ticker: data.response.secondData.result[0].symbol, price: data.response.data.c });
        navigation.navigate("Fakebuys", {fromSearch: true});
    };


    return (
        <View>
            <View style={styles.textinputContainer}> 
                <Icon style={styles.searchIcon} name="search" size={25} color="#000"/>
                <TextInput style={styles.textinput} value={keyword} placeholder='Search with ticker symbol E.g(AAPL)' onChangeText={keyword => setKeyword(keyword)}/>      
                <Button title='Search' onPress={getPrices} />
            </View>
            {data && (
                <View style={styles.pricePage}>
                    <Text style={styles.tickername}>{data.response.secondData.result[0].description}</Text>
                    <Text style={styles.ticker}>Ticker: {data.response.secondData.result[0].symbol}</Text>
                    <Text>{data.response.secondData.result[0].type}</Text>
                    <Text style={styles.price}>{data.response.data.c}</Text>
                    <Text>(in USD)</Text>
                    <Button onPress={fakeBuy} title="Fake buy"/>
                </View>
            )}
        </View>
    )
}