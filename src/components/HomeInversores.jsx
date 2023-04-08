import React, { useState, useEffect } from "react";
import { getUsers, postUser, putUser } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./HomeInversores.css";
import tickets from "../img/ticket.png";
import { GiHamburgerMenu } from "react-icons/gi" 


export default function HomeInversores(id){ 
const dispatch = useDispatch();
const history = useHistory();
const users = useSelector(state => state.users);
var user = {};
const [ticket, setTiket] = useState(3);
const [input, setInput] = useState({
  name: "",
  user: "",
  password: "",
  correo: "",
  saldo: "0"
});

  function actualizarTicket(){
    if (usuario.saldo > 11){ 
      setTiket(3)
  }
  else  if (usuario.saldo === 8){
    setTiket(2)
  }
  else  if (usuario.saldo === 4){
    setTiket(1)
  } else setTiket(0)
  }

 function actualizarSaldo(){
  if (usuario.saldo > 11){
    sal.saldo = "8";
}
else  if (usuario.saldo === 8){
  sal.saldo = "4"
}
else  if (usuario.saldo === 4){
  sal.saldo = "0"
}
}

function handleChange(e){
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
}

function handleSubmit(e) {
  e.preventDefault();
 dispatch(postUser(input));
actualizarSaldo(sal)
 if(usuario.saldo > 3){
   dispatch(putUser(sal, usuario.id));
  alert("Usuario creado con exito!! ");
 setInput({
     name: "",
     user: "",
     password: "",
     correo: ""
 }) 
 history.push("/vender/" + usuario.id)
//  setInterval("location.reload()",500);
 
}
else {
 alert("No dispone de bonos!")  
}
}

function datosUser(user){

  for (let index = 0; index < users.length; index++) {
        if (users[index].id === id.id){
            user = users[index]
        }    
    }
    return user
}

const usuario = datosUser(user);
const valor = usuario.saldo
const strValor = String(valor)
 var sal = { saldo: strValor }

 useEffect(() => {
 actualizarTicket()
},)

useEffect(()=>{
  dispatch(getUsers())
},[dispatch])

return(
        
<div style={{padding:"8px"}}>
<div className="encab" >
<h7>Bienvenido/a {usuario.name}</h7>
<h7> Saldo: ${usuario.saldo}.000</h7>
</div>
<div className="cajauser">
<input type="checkbox"  id="spoiler2" /> 
  <label for="spoiler2" ><h3>< GiHamburgerMenu /></h3></label>
<div class="spoiler">
Usuario: {usuario.user}
  <br/>
  Correo: {usuario.correo}
  <br />
  <Link to="/" >Cerrar Sesion</Link>

  </div>
</div>
<br />
      <div className="invinterno">
        <br />
        <div style={{marginBottom:"-60px", zIndex:"1"}}>
      <h2 >Ganancias 2.4 </h2>
      </div>
        <img className="imgin" src="https://btcrevolution.io/assets/video-image.jpg" alt="img inversiondos" />
        <br />

        <div className="venta">
          <div style={{"text-align": "center",  border:"solid 1px", padding:"5px"}}>
        <h5>Bonos:</h5>
        <h7>Usted cuenta con {ticket} bono/s</h7>
        {function ticks(){
          if (ticket === 3){
          return(
<fragment>
        <div className="cajatarj">
           <a className="atam" > <img className="tarjta" src={tickets} alt="ticket"/></a>
           <a className="atam" > <img className="tarjta" src={tickets} alt="ticket"/></a>
           <a className="atam" > <img className="tarjta" src={tickets} alt="ticket"/></a>
        </div>
</fragment>
          )
        }
        if (ticket === 2){
          return(
<fragment>
        <div className="cajatarj">
           <a className="atam" > <img className="tarjta" src={tickets} alt="ticket"/></a>
           <a className="atam" > <img className="tarjta" src={tickets} alt="ticket"/></a>
        
        </div>
</fragment>
          )
        }
        if (ticket === 1){
          return(
<fragment>
        <div className="cajatarj">
           <a className="atam" > <img className="tarjta" src={tickets} alt="ticket"/></a>
        </div>
</fragment>
          )
        }
        if (ticket === 0){
          return(
<fragment>
        <div className="cajatarj">
        <h4>No dispone de bonos!</h4>   
        
        </div>
</fragment>
          )
        }

        
        }()}
        <div style={{"text-align": "center"}}>
        <h7>Cada bono vendido genera una cuenta al cliente comprador con un saldo de $12.000 y 3 bonos.</h7>
        <br />
        <h7>El cliente que compra el bono debe abonar $5.000 al usuario {usuario.name}.</h7>
        <br />
        <h7>Para cargar los $12.000 y los 3 bonos a la cuenta nueva, el usuario {usuario.name} debe abonar $1.000 al Casino.</h7>
        </div>

      </div>      
        <br />
<form class="row g-4" className="formul" onSubmit={(e)=> handleSubmit(e)}>
Complete los siguientes datos para vender un bono:
<div class="col-md-12" style={{"margin-top": "5px"}}>
                <label for="inputName" class="form-label">Nombre y Apellido:*</label>
                <input class="form-control" id="inputName" placeholder="Nombre y Apellido"
                type= "text"
                value = {input.name}
                name = "name"
                onChange={(e) => handleChange(e)} 
                required
               />
</div>
<div class="col-md-12"style={{"margin-top": "5px"}}>
                <label for="inputUser" class="form-label">Usuario:*</label>
                <input class="form-control" id="inputUser" placeholder="Nombre de usuario"
                type= "text"
                value = {input.user}
                name = "user"
                onChange={(e) => handleChange(e)} 
               required
               />
</div>
<div class="col-md-12" style={{"margin-top": "5px"}}>
                <label for="inputPassword" class="form-label">Contraseña:*</label>
                <input class="form-control" id="inputPassword" placeholder="Contraseña"
                type= "text"
                value = {input.password}
                name = "password"
                onChange={(e) => handleChange(e)} 
               required
               />
</div>

<div class="col-md-12" style={{"margin-top": "5px"}}>
                <label for="inputEmail4" class="form-label">Mail:*</label>
                <input class="form-control" id="inputEmail4" placeholder="Correo electronico"
                type= "text"
                value = {input.correo}
                name = "correo"
                onChange={(e) => handleChange(e)} 
               required
               />
</div>

<br />
            <div class="col-12" style={{"margin-top": "10px"}}>
            <button class="btn btn-primary" type= "submit">Vender 1 Bono</button>
            </div>
</form>
</div>
        <br />
        </div>
    </div>
)

}