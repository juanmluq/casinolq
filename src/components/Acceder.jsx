import React, { useState, useEffect } from "react";
import "./Acceder.css"
import { getUsers } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export default function Acceder(){
    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector(state => state.users)
    const [ input, setInput ] = useState({
        user: "",
        password: ""
    })

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

function handleSubmit(e){
    e.preventDefault();
    console.log(users[0])
    for (let index = 0; index < users.length; index++) {
        if(users[index].user === input.user && users[index].password === input.password){ 
            var id= users[index].id;
            index = users.length;
            history.push("/homebonos/" + id)
        }else if(index === users.length - 1)
        alert("usuario o contraseña invalida!")
    }
    setInput({
        user:"",
        password:""
    })
}

      useEffect(()=>{
        dispatch(getUsers())
      }, [dispatch]);

return(
    <div className="acceder">    
    <div >
      <h1 >Iniciar sesión</h1>
      <form className="formul" onSubmit={(e) => handleSubmit(e)}>
        <input className="inp" type='user' name='user' placeholder='Usuario' required 
        onChange={(e) => handleChange(e)}/>
        <input className="inp" type='password' name='password' placeholder='Contraseña' required 
        onChange={(e) => handleChange(e)} />
        <input type="submit" value='Ingresar' />
      </form>
      </div> 
    </div>
)

}
