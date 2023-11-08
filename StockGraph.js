import { useEffect, useState, PureComponent } from "react";
import { getData } from "./fetching";
import { View } from "react-native";
import {formatData } from './utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// tämä näkyy "Search" tabissa.
const StockGraph = ({ ticker }) => {
    const [stockPrice, setStockPrice] = useState({});
    const keyword = "AG";
    const [showChart, setShowChart] = useState(false);

    useEffect(() => {
        getData(keyword)
        .then(data => {
            setStockPrice(data);
            console.log(formatData(data)); //consolissa näkyy millaisessa muodossa lopullinen data tulee joka pitäisi saada näkyviin LIneCharttiin
            setShowChart(true);
    })
    }, [])

    // datan muotoilu parempaan muotoon käyttämällä functiota joka löytyy utils.js
    const formattedData = formatData(stockPrice);


    const data = formattedData.map(point => ({
        x: point.x,
        y: point.y
      }));
    
    return (
        <View>    
            {showChart && (
            <LineChart
            width="95%"
            height="95%"
            data={data}
            margin={{
              top: 1,
              right: 1,
              left: 1,
              bottom: 1,
            }}
            >
            <XAxis dataKey="x" />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart>
            )}
        </View>
      ); 
}
export default StockGraph;