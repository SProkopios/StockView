export const formatData = (stockPrice) => {
    const formattedData = [];

    if (stockPrice['Time Series (5min)']) {
        Object.entries(
            stockPrice['Time Series (5min)']
        ).map(
            ([key, value]) => {
               formattedData.push({
                x :  key,
                y: parseFloat(value["1. open"])
               }) 
            }
        )
    }
    return formattedData;
}


            //  <LineChart width={400} height={400} data={formattedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            //      <XAxis dataKey="x" />
            //      <Tooltip />
            //      <CartesianGrid stroke="#f5f5f5" />
            //      <Line type="monotone" dataKey="y" stroke="#ff7300" yAxisId={0} />
            //  </LineChart>