import React from 'react';
import Clients from '../../components/Clients/Clients';
import Reports from '../../components/Reports/Reports';
import Login from '../Refresh/Refresh';
import { useApiContext } from "../../context/ApiContext";
import ReportsFail from '../Reports/ReportsFail';
import './Panel.scss'

function Panel() {
    const { dataClient, results } = useApiContext();
    return (
        <>
            {
                dataClient.length === 0 ? <Login /> :
                    <section className='p-5 panel'>
                        <Clients />
                        {results.length > 0 ? <Reports /> : <ReportsFail />
                        }
                    </section>
            }
        </>
    );
}

export default Panel;
