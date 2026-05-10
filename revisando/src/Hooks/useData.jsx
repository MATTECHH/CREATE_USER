import { useEffect, useState } from "react";

export const useData =(url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json)
            } catch (err) {
                console.log(err);
            }
        }

        fetchData()
    },[url])

    return {data}
}