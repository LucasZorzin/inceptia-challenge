import React from "react";
import { useApiContext } from "../../context/ApiContext";
import { ListGroup } from "react-bootstrap";
import './Client.scss';

const Clients = () => {
    const { dataClient, data, setResults } = useApiContext();
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    //Get: API Inbound Case
    async function getICase() {
        await fetch(`https://admindev.inceptia.ai/api/v1/inbound-case/?client=${dataClient[0].id}&local_updated__date__gte=2021-03-01&local_updated__date__lte=${year}-${month}-${day}`, {
            headers: {
                Authorization: `JWT ${data[0]}`
            }
        })
            .then(response => response.json())
            .then(texto => {
                const allResults = texto['results']
                console.log(allResults)
                setResults([allResults])
                console.log(`${year}-${month}-${day}`)
            })
            .catch(err => console.log(err));
    }
    return (
        <section className="clients">
            <h3>CLIENTE</h3>
            <ListGroup as="ul" className="row">
                {dataClient.map((nameClient) => (
                    <ListGroup.Item key={nameClient.id} as="li" className="col client" onClick={() => getICase()}>{nameClient.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </section>
    )
}
export default Clients;