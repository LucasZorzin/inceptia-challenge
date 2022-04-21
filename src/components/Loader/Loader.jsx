import React from "react";
import './Loader.scss'
import ia from '../../assets/img/ia.png'

const Loader = () => {
    window.onload = () => {
        setTimeout(() => {
            const contenedor = document.getElementById('loader');
            contenedor.style.visibility = 'hidden';
        }, 370);
    }
    return (
        <>
            <div id="loader">
                <img className="loader__logo" src={ia} alt="IA React Dev Challenge" />
            </div>
        </>
    )
}
export default Loader;