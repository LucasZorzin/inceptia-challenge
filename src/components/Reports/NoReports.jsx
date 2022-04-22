import React from "react";
import './NoReports.scss';
import logo from '../../assets/img/logo-inceptia.png'


const NoReports = () => {
    return (
        <>
            
                <div className="no-reports-cliente"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg><p >Seleccione el cliente desde la barra lateral</p></div>
                <div className="no-reports-logo"><img src={logo} alt="" /></div>
            
            
                <div className="no-reports-title"><h1>React Dev Challenge</h1></div>
            
            <h4 className="lucas">BY LUCAS NAHUEL ZORZIN</h4>
            
        </>
    )
}
export default NoReports;