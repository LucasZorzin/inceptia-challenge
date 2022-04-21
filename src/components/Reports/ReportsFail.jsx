import React from "react";
import { Table } from "react-bootstrap";
import { useApiContext } from "../../context/ApiContext";
import './Reports.scss';


const ReportsFail = () => {
    let { dataClient } = useApiContext();
    let dataClientes = ['cliente']
    dataClientes.push(dataClient)
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
                  

                </tbody>



            </Table>
        </>
    )
}
export default ReportsFail;