const ALPHA_KEY = "";
const FINN_KEY = "";

//
export const getData = async (keyword) => {
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${keyword}&token=${FINN_KEY}`);
    const data = await response.json();
    const secondResponse = await fetch(`https://finnhub.io/api/v1/search?q=${keyword}&token=${FINN_KEY}`);
    const secondData = await secondResponse.json();
    return {"response":{data, secondData}};
}

//Fetching news using alphavantage
export const getNews = async() => {
    const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=economy_macro&apikey=${ALPHA_KEY}`)
    const data = await response.json();
    //Too long response so this will slice it smaller
    const littleData = data.feed.slice(0, 7);
    return littleData;
}

