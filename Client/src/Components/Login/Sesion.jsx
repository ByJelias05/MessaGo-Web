import ArcoTop from "../../Images/ArcoTop.svg"
import icon from "../../icons/sign.ico"
import lock from "../../icons/Lock.ico"
import Enter from "../../icons/Enter.png"

import { FiAtSign } from "react-icons/fi";

import axios from "axios"
import { useState, } from "react";

import "../../Css/Sesion.css"

export function Sesion(){

    const [Email, setEmail] = useState("");
    const [PassWord, setPassWord] = useState("")

    const IniciarSesion = () =>{
        
        axios.post(`http://localhost:3001/Login/${Email}/${PassWord}`).then(
            (response) =>{
               
                if(response.data.statu){
                    sessionStorage.setItem("AuthData", JSON.stringify(response.data.ms))
                    //alert(response.data)  
                    window.location.href = "http://localhost:5173/Messago"  ; 
                }
                
                alert(response.data.ms)
                
            }
        )
    }

    return(
        <div className="Contenedor-Sesion">
            <div className="DesignTop">
                 <img src={ArcoTop} alt="" /> 
            </div>
            <div className="Body">
                <div className="Input-Icon">
                    <input type="text" onChange={(e) =>{setEmail(e.currentTarget.value)}} placeholder="Email" />
                    <img src={icon} style={{width: '40px', height: '40px', marginTop: '10px'}} alt="" />
                </div>
                <div className="Input-Icon">
                    <input type="text" onChange={(e) =>{setPassWord(e.currentTarget.value)}} placeholder="Password" />
                    <img src={lock} style={{width: '30px', height: '30px', marginTop: '20px'}} alt="" />
                </div>
                <div className="VerContraseña" style={{marginTop: '10px', display: 'flex'}}>
                    <input type="checkbox" name="SeePass" id="SeePass" />
                    <label htmlFor="SeePass" id="SeePass">  Ver contraseña</label>
                   
                </div>
            </div>
            <div className="BtnSesion">
                <button onClick={IniciarSesion} style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>Login <img src={Enter} style={{width: '30px'}} alt="" /></button>
            </div>
        </div>
    )
}