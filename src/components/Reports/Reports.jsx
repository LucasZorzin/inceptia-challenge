import React from "react";
import { Table } from "react-bootstrap";
import { useApiContext } from "../../context/ApiContext";
import './Reports.scss';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Reports = () => {
    let { results, setFromDate, setDate } = useApiContext();
    const dates = () => {
        const fromDates = document.getElementById('fromDate').value;
        const toDate = document.getElementById('toDate').value;
        if ((fromDates.length != 0) && (toDate.length != 0)) {
            setFromDate([fromDates.substring(0, 4), fromDates.substring(5, 7), fromDates.substring(8, 10)])
            setDate([toDate.substring(0, 4), toDate.substring(5, 7), toDate.substring(8, 10)])
        }
        else {
            const notify = () => toast.error('Por favor ingrese una fecha "desde" y una fecha "hasta"')
            notify();
        }
    }

    return (
        <section className="dashboard">
            <div className="section-line"><h4>REPORTES</h4></div>
            <div className="banner"></div>
            <div className="date">
                <input name="fromDate" id="fromDate" className="fromDate" type="date"></input>
                <input name="toDate" id="toDate" className="toDate" type="date"></input>
                <input id="date-filter" onClick={() => dates()} type="button" name="btn1" value="FILTER" />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className="titulos-tabla">
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
                                <td as="li" className="col client gestionado">{nameClient.last_updated}</td>
                                <td as="li" className="col client">{nameClient.case_uuid}</td>
                                <td as="li" className="col client">{nameClient.phone}</td>
                                <td as="li" className="col client dni">{nameClient.extra_metadata.dni}</td>
                                <td as="li" className="col client">{nameClient.extra_metadata.grupo}</td>
                                <td as="li" className="col client">{nameClient.extra_metadata.orden}</td>
                                <td as="li" className="col client">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-telephone-forward mx-3" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                    {nameClient.case_duration}</td>
                                <td as="li" className="col client estado">{nameClient.case_result.name}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>
            <ToastContainer autoClose={2000} />
        </section>
    )
}
export default Reports;