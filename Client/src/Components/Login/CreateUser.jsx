import ArcoTop from "../../Images/ArcoTop.svg"
import icon from "../../icons/sign.ico"
import lock from "../../icons/Lock.ico"
import Enter from "../../icons/Enter.png"

import { FiAtSign } from "react-icons/fi";

import "../../Css/CreateUser.css"

export function CreateUser(){
    return(
        <div className="Contenedor-Sesion">
            <div className="DesignTop">
                 <img src={ArcoTop} alt="" /> 
            </div>
            <div className="Body-Create">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="Input-Icon">
                        <input type="text" placeholder="Name" />
                        <img src={icon} style={{width: '40px', height: '40px', marginTop: '10px'}} alt="" />
                    </div>
                    <div className="Input-Icon">
                        <input type="text" placeholder="Last Name" />
                        <img src={lock} style={{width: '30px', height: '30px', marginTop: '20px'}} alt="" />
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="Input-Icon">
                        <input type="text" placeholder="User iD" />
                        <img src={icon} style={{width: '40px', height: '40px', marginTop: '10px'}} alt="" />
                    </div>
                    <div className="Input-Icon">
                        <input type="text" placeholder="New Email" />
                        <img src={lock} style={{width: '30px', height: '30px', marginTop: '20px'}} alt="" />
                    </div>
                </div>
            </div>
            <div className="BtnSesion">
                <button style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>Login <img src={Enter} style={{width: '30px'}} alt="" /></button>
            </div>
        </div>
    )
}