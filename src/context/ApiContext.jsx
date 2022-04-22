import React, { useState, createContext, useContext } from "react";
const ApiContext = createContext([]);
export const useApiContext = () => useContext(ApiContext);

const UseContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [dataClient, setDataClient] = useState([]);
    const [results, setResults] = useState([]);
    const [login, setLogin] = useState([]);
    const [validation, setValidation] = useState('');

    const currentDate = new Date();
    const currentDay = JSON.stringify(currentDate.getDate());
    const currentMonth = JSON.stringify(currentDate.getMonth() + 1);
    const currentYear = JSON.stringify(currentDate.getFullYear());
    const [date, setDate] = useState([currentYear, currentMonth, currentDay]);
    const [fromDate, setFromDate] = useState(['2021', '03', '01']);

    const [filterValidation,setFilterValidation] = useState('');

    return (
        <>
            <ApiContext.Provider value={{ data, setData, dataClient, setDataClient, results, setResults, login, setLogin, validation, setValidation, fromDate, setFromDate, date, setDate,filterValidation,setFilterValidation }}>
                {children}
            </ApiContext.Provider>
        </>
    )
}

export default UseContextProvider;