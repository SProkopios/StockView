import { View, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Icon } from '@rneui/base';


export default function Tab2() {
    const [keyword, setKeyword] = useState();

    const getPrices = async () => {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${keyword}&interval=5min&apikey=${APIKEY}`)
        const data = await response.json()
    }


    return (
        <View>
            <View style={styles.textinputContainer}> 
                <Icon style={styles.searchIcon} name="search" size={25} color="#000"/>
                <TextInput style={styles.textinput} value={keyword} onChangeText={keyword => setKeyword(keyword)}/>      
                <Button title='Search' onPress={getPrices} />
            </View>
            {/* <LineChart width={500} height={250} margin={{ top: 150, right: 30, left: 20, bottom: 5 }} data={items}>
                <XAxis dataKey="date"/>
            <Line dot={false}  type="monotone" dataKey="1. open" stroke="rgb(0,200,5)" yAxisId="100" />
            </LineChart> */}
        </View>
    )
}