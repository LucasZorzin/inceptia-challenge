import React, { useState, useEffect, createContext, useContext } from "react";
const ApiContext = createContext([]);
export const useApiContext = () => useContext(ApiContext);

const UseContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [dataClient, setDataClient] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        let dataKey = [];
        // 1) POST: LOGIN (POR DEFECTO le doy valores predeterminados, así se accede al panel de reportes directamente)
        const fetchData = async () => {
            const datas = new FormData();
            datas.append('email', 'reactdev@iniceptia.ai');
            datas.append('password', '4eSBbHqiCTPdBCTj');

            await fetch('https://admindev.inceptia.ai/api/v1/login/', {
                method: 'POST',
                body: datas
            })
                .then(response => {
                    if (response.ok) {
                        return response.text()
                    } else {
                        throw new Error("API Call ERROR");
                    }
                })
                .then(texto => {
                    const token = JSON.parse(texto)['token'];
                    setData([token]);
                    dataKey.push(token);
                    console.log(token);
                })

                // Get: API Clients
                .then(() => {
                    getClients()
                })

                .catch(err => console.log(err));
        }

        async function getClients() {
            await fetch('https://admindev.inceptia.ai/api/v1/clients/', {
                headers: {
                    Authorization: `JWT ${dataKey[0]}`
                }
            })
                .then(response => response.json())
                .then((texto) => {
                    for (let i = 0; i < texto.length; i++) {
                        const clientID = (texto)[i]['id'];
                        const clientName = (texto)[i]['name'];
                        setDataClient([{ "name": clientName, "id": clientID }]);
                    }
                })
        }

        fetchData();

    }, [])

    return (
        <>
            <ApiContext.Provider value={{ data, dataClient, results, setResults }}>
                {children}
            </ApiContext.Provider>
        </>
    )
}

export default UseContextProvider;