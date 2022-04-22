import React from "react";
import { useApiContext } from "../../context/ApiContext";
import './Login.scss';
import logo from '../../assets/img/ia.png';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { setData, setLogin, setValidation } = useApiContext();

    const obtenerDatos = async () => {
        // POST: Login
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginData = { 'email': email, 'password': password }
        console.log([loginData][0]['email'])
        console.log([loginData][0]['password'])
        setLogin([loginData])
        const datas = new FormData();
        datas.append('email', [loginData][0]['email']);
        datas.append('password', [loginData][0]['password']);

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
                console.log(token);
            })

            .then(() => {
                setValidation('true')
            })

            .catch(err => {
                console.log(err);
                const notify = () => toast.error("Revise los datos ingresados e intente nuevamente.")
                notify();
            });
    }

    return (
        <>
            <section id="login">
                <div className="layer"><img className="logoLogin" src={logo} alt="" /></div>

                <form name="loginForm">

                    <table>
                        <tbody className="tbody-login mt-2">
                            <tr>
                                <td><input className="input-login" type="text" name="email" id="email" placeholder="reactdev@iniceptia.ai" /></td>
                            </tr>
                            <tr>
                                <td><input className="input-login" type="password" name="password" id="password" placeholder="4eSBbHqiCTPdBCTj" /></td>
                            </tr>
                            <tr>
                                <td><input className="login" onClick={() => obtenerDatos()} type="button" name="btn1" value="LOGIN" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </section>
            <ToastContainer autoClose={2000}/>
        </>
    )
}
export default Login;