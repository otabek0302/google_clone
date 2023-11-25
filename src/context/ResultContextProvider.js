import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseURL = "https://google.serper.dev/" // here we will put our base URL

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const getResults = async (type) => {
        setLoading(true);

        const res = await fetch(`${baseURL}${type}`, {
            method: "POST",
            headers: {
                "X-API-KEY": process.env.REACT_APP_API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "q": searchTerm,
                "num": 40
            }),
            redirect: "follow"
        })

        const data = await res.json();

        setResults(data)
        setLoading(false);
    }
    return (
        <ResultContext.Provider value={{ getResults, results, setSearchTerm, searchTerm, loading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultsContext = () => useContext(ResultContext);
