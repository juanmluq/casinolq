import axios from "axios";

export function getUsers(){
    return async function(dispatch){
        var json = await axios.get("https://backcasino-production.up.railway.app/usuarios");
        return dispatch({
            type: "GET_USERS",
            payload: json.data
        })
    }
}

export function postUser(payload){
    return async function(dispatch){
        const response = await axios.post("https://backcasino-production.up.railway.app/usuario", payload);
        return response
    }
}

export function putUser(payload, id){
    return async function(dispatch){
        const respons = await axios.put("https://backcasino-production.up.railway.app/usuarios/" + id , payload);
        return respons
    }
}
