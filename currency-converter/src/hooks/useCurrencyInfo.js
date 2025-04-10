import { useState, useEffect } from 'react'

function useCurencyInfo(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)    
.then(res => res.json())
.then(res => setData(res[currency]))
.catch(err => console.log(err))
    }, [currency])
    console.log(data);
    return data;
}

export default useCurencyInfo;