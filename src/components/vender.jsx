import React from "react";
import QR from "../img/qrjuan.png"
import { Link } from "react-router-dom";

export default function Vender(id){
    return(
        <div style={{padding:"3%", display:"flex", justifyContent:"center", textAlign:"center", flexDirection:"column"}}>
            Bono vendido!
            <br />
            Ahora debe abonar a casino diamante $1000 y enviar comprobante 
            <br />
            por whatsapp a 1176351958/1170259063 para cargar credito al usuario nuevo.
            <br />
            CVU: 0000003100019762484119
            <br />
            QR:
            <br />
            <div >
            <img style={{width:"30%"}} src={QR} alt="QR" />
            </div>
            <br />
            <br />
            <div style={{display:"flex", justifyContent:"center"}}>
             <Link style={{width:"60px"}} to={"/homebonos/" + id.id} >Volver</Link>
             </div>
        </div>
    )
}