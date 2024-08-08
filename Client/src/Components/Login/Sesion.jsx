import ArcoTop from "../../Images/ArcoTop.svg"
import icon from "../../icons/sign.ico"
import lock from "../../icons/Lock.ico"
import Enter from "../../icons/Enter.png"

import { FiAtSign } from "react-icons/fi";

import "../../Css/Sesion.css"

export function Sesion(){
    return(
        <div className="Contenedor-Sesion">
            <div className="DesignTop">
                 <img src={ArcoTop} alt="" /> 
            </div>
            <div className="Body">
                <div className="Input-Icon">
                    <input type="text" placeholder="Email" />
                    <img src={icon} style={{width: '40px', height: '40px', marginTop: '10px'}} alt="" />
                </div>
                <div className="Input-Icon">
                    <input type="text" placeholder="Password" />
                    <img src={lock} style={{width: '30px', height: '30px', marginTop: '20px'}} alt="" />
                </div>
                <div className="VerContraseña" style={{marginTop: '10px', display: 'flex'}}>
                    <input type="checkbox" name="SeePass" id="SeePass" />
                    <label htmlFor="SeePass" id="SeePass">  Ver contraseña</label>
                   
                </div>
            </div>
            <div className="BtnSesion">
                <button style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>Login <img src={Enter} style={{width: '30px'}} alt="" /></button>
            </div>
        </div>
    )
}