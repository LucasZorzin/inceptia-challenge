import React from "react";
import { useApiContext } from "../../context/ApiContext";
import './Refresh.scss'

const Login = () => {
    const { dataClient } = useApiContext();
    return (
        <>
            {
                dataClient.length === 0 ?
                    <section id="refresh">
                        <h4>ERROR AL INGRESAR</h4>
                        <h6>Intente nuevamente en unos segundos</h6>
                        <button onClick={() => window.location.reload()}>RETRY</button>
                    </section> :
                    <div id="refresh"><h3>Cargando...</h3></div>
            }
        </>
    )
}
export default Login;