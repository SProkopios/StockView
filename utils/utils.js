
const formatData = (stockPrice) => {
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


