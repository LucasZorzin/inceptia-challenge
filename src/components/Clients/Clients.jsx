import React, { useEffect } from "react";
import { useApiContext } from "../../context/ApiContext";
import { ListGroup } from "react-bootstrap";
import './Client.scss';
import logo from '../../assets/img/ia.png'

const Clients = () => {
    const { setDataClient, dataClient, data, setResults, fromDate, date } = useApiContext();
    const refresh = document.getElementById('login');
    refresh.style.display = "none";
    async function getClients() {
        await fetch('https://admindev.inceptia.ai/api/v1/clients/', {
            headers: {
                Authorization: `JWT ${data[0]}`
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
    useEffect(() => {
        getClients()
    }, [])


    //Get: API Inbound Case
    async function getICase() {
        await fetch(`https://admindev.inceptia.ai/api/v1/inbound-case/?client=${dataClient[0].id}&local_updated__date__gte=${fromDate[0]}-${fromDate[1]}-${fromDate[2]}&local_updated__date__lte=${date[0]}-${date[1]}-${date[2]}`, {
            headers: {
                Authorization: `JWT ${data[0]}`
            }
        })
            .then(response => response.json())
            .then(texto => {
                const allResults = texto['results']
                setResults([allResults])
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getICase()
    }, [date])


    return (
        <section className="clients">
            <img className="clients__logo" src={logo} alt="" />
            <h3>CLIENTE</h3>
            <ListGroup as="ul" className="row">
                {dataClient.map((nameClient) => (
                    <>
                        <ListGroup.Item key={nameClient.id} as="li" className="col client" onClick={() => getICase()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace clients-icon" viewBox="0 0 16 16">
                                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                            </svg>
                            {nameClient.name}
                        </ListGroup.Item>
                    </>
                ))}
            </ListGroup>
            <svg onClick={()=>window.location.reload()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right logout" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
        </section>
    )
}
export default Clients;