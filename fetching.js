const APIKEY = "";


export const getData = async (keyword) => {

    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${keyword}&interval=5min&apikey=${APIKEY}`);
    const data = await response.json();
    return data;
}