import React from "react";
import { Table } from "react-bootstrap";
import { useApiContext } from "../../context/ApiContext";
import './Reports.scss';


const Reports = () => {
    let { results } = useApiContext();
    
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Gestionado</th>
                        <th>ID Caso</th>
                        <th>Teléfono</th>
                        <th>Dni</th>
                        <th>Grupo</th>
                        <th>Orden</th>
                        <th>Llamada</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>

                    {results[0].map((nameClient) => (
                        <>
                            <tr key={nameClient.case_uuid}>
                                <td as="li" className="col client">{nameClient.last_updated}</td>
                                <td as="li" className="col client">{nameClient.case_uuid}</td>
                                <td as="li" className="col client">{nameClient.phone}</td>
                                <td as="li" className="col client">{nameClient.extra_metadata.dni}</td>
                                <td as="li" className="col client">{nameClient.extra_metadata.grupo}</td>
                                <td as="li" className="col client">{nameClient.extra_metadata.orden}</td>
                                <td as="li" className="col client">{nameClient.case_duration}</td>
                                <td as="li" className="col client">{nameClient.case_result.name}</td>
                            </tr>



                        </>
                    ))}
                    {/* <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                </tbody>



            </Table>
        </>
    )
}
export default Reports;