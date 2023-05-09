import React from 'react';
import './Registrarse.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from './actions';


function validate(input){
  let errors= {};
  if(!input.name){
    errors.name ="Se requiere un nombre";
  } else if(!input.email){
    errors.email = "El correo electronico debe ser completado";
  } else if(!input.phone){
    errors.phone = "El telefono debe ser completado";
  }  
 
  return errors;
}

export default function Reg () {
  const dispatch = useDispatch()
const [ errors, setErrors ] = useState({})
  const [ input, setInput ] = useState({
  name:"",
  email:"",
  pais:"",
  phone:"",
  fecData:"",
})

function handleChange(e){
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
  console.log(input)
}


useEffect(()=> {
  dispatch(getUsers());
  },[dispatch]);

    return (
      <div>
      <div className="regist">
     
        <br />
        <h1>Registrate</h1>
        
        {/* <a href="mailto:casinodiamantelq@gmail.com?Subject=Interesado%20en%20el%20curso">Contactar por correo</a> */}
      
        {/* <form onSubmit={(e) => handleSubmit(e)}> */}

        <form method='POST' action='https://formsubmit.co/casdiamantelq@gmail.com' >
          <div>
            <label for="inputName" class="form-label">Nombre:</label>
            <input class="form-control" id ="inputName"  placeholder='Nombre y apellido'
            type="text"
            value = {input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && (
            <p>{errors.name}</p>
          )}
          </div>
         <br />
          <div>
            <label for="inputEmail" class="form-label">Email:</label>
            <input class="form-control" id ="inputEmail"  placeholder='Correo electronico'
            type="text"
            value = {input.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          {errors.email && (
            <p>{errors.email}</p>
          )}
          </div> 
          <br />
          <div>
            <label for="inputPhone" class="form-label">Celular:</label>
            <input class="form-control" id ="inputPhone"  placeholder='Numero de celular'
            type="number"
            value = {input.phone}
            name="phone"
            onChange={(e) => handleChange(e)}
          />
          {errors.phone && (
            <p>{errors.phone}</p>
          )}
          </div>
          <br />
          <div>
            <label for="inputFecNac" class="form-label">Fecha Nac:</label>
            <input class="form-control" id ="inputFecNac"  placeholder='xx/xx/xxxx'
            type="date"
            value = {input.fecData}
            name="fecData"
            onChange={(e) => handleChange(e)}
          />
          </div>
          <br />
          <div>
            <label for="inputPais" class="form-label">Pais de residencia:</label>
          <br />
          Seleccione su pais:
          <br />
  <select class="form-control" id ="inputPais"
          placeholder='Pais'
          type="text" name="pais"
          onChange={(e) => handleChange(e)}
          >
    <option value="Argentina">Argentina</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Brasil">Brasil</option>
    <option value="Canada">Canada</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Ecuador">Ecuador</option>
    <option value="El Salvador">El Salvador</option>
    <option value="España">España</option>
    <option value="Estados Unidos">Estados Unidos</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Honduras">Honduras</option>
    <option value="México">México</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Perú">Perú</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Venezuela">Venezuela</option>

  </select>
          {errors.pais && (
            <p>{errors.pais}</p>
          )}
          </div> 
        <br />
          <div>
            <button class="btn btn-primary" type='submit'>Solicitar Usuario</button>
          </div>
//esto es para que no me redirija al captcha
//        <input type="hidden" name="_captcha" value="false" />
        </form>
          <div className='info'>
              Una vez completado el formulario, le enviaremos (por whatsapp o en su defecto por email) a la brevedad un usuario y clave para comenzar a jugar.
          </div>
        </div>
        <div className='cent' style={{ margin: "2%"}}>
        Para una respuesta mas rapida te invitamos a contactarnos por whatsapp:
        </div>
       <div className='cent'>
          
           <a style={{ width:"auto"}} href="https://api.whatsapp.com/send?phone=+5491176351958">  
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>   
            </a>
            </div>
        <br />
        <br />
      </div>
    );
};

