import React from 'react';
import Clients from '../../components/Clients/Clients';
import Reports from '../../components/Reports/Reports';
import Login from '../Login/Login';
import { useApiContext } from "../../context/ApiContext";
import NoReports from '../Reports/NoReports';
import './Panel.scss';

function Panel() {
    const { results, validation } = useApiContext();
    
    return (
        <>
            <Login />
            {validation === 'true' &&
            <div className='p-5 panel'>
                    <Clients />
                    {results.length > 0 ? <Reports /> : <NoReports />}
            </div>
            }
        </>
    );
}

export default Panel;
