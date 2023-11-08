import { useEffect, useState, PureComponent } from "react";
import { getData } from "./fetching";
import { View } from "react-native";
import {formatData } from './utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const StockGraph = ({ ticker }) => {
    const [stockPrice, setStockPrice] = useState({});
    const keyword = "AG";
    const [showChart, setShowChart] = useState(false);


    useEffect(() => {
        getData(keyword)
        .then(data => {
            setStockPrice(data)
            console.log(formatData(data)) //consolissa näkyy millaisessa muodossa lopullinen data tulee joka pitäisi saada näkyviin LIneCharttiin
            setShowChart(true);
    })
    }, [])


    const formattedData = formatData(stockPrice);


    
    return (
        <View>    
            {showChart && (
            <ResponsiveContainer width="95%" height="95%">
                <LineChart
                    width={50}
                    height={50}
                    data={formattedData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            )}
        </View>
      );
      
}
export default StockGraph;