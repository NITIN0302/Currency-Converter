import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {

        async function fetchData(){
            const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
            const val = await response.json();
            setData(val[currency]);
        }
        fetchData();
    }, [currency])
    return data
}

export default useCurrencyInfo;