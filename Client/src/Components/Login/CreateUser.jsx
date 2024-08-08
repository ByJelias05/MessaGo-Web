import ArcoTop from "../../Images/ArcoTop.svg"
import icon from "../../icons/sign.ico"
import lock from "../../icons/Lock.ico"
import Enter from "../../icons/Enter.png"
import name from "../../icons/name.ico"
import Autograph from "../../icons/Autograph.ico"

import { FiAtSign } from "react-icons/fi";

import "../../Css/CreateUser.css"

export function CreateUser(){
    return(
        <div className="Contenedor-Sesion">
            <div className="DesignTop">
                 <img src={ArcoTop} alt="" /> 
            </div>
            <div className="Body-Create">
            {/* <h6 className="Title-Login">Create your messago account!</h6> */}
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="Input-Icon">
                        <input type="text" placeholder="Complete name" />
                        <img src={Autograph} style={{width: '30px', height: '30px', marginTop: '15px'}} alt="" />
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="Input-Icon User-Email">
                        <input type="text" placeholder="User iD" />
                        <img src={name} style={{width: '30px', height: '30px', marginTop: '20px'}} alt="" />
                    </div>
                    <div className="Input-Icon User-Email" >
                        <input type="text" placeholder="New Email" />
                        <img src={icon} style={{width: '30px', height: '30px', marginTop: '20px'}} alt="" />
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className="Input-Icon User-Email">
                        <input type="text" placeholder="Password" />
                        <img src={lock} style={{width: '30px', height: '30px', marginTop: '20px'}} alt="" />
                    </div>
                    <div className="Input-Icon User-Email" >
                        <input type="text" placeholder="Repeat Password" />
                    </div>
                </div>
            </div>
            <div className="BtnSesion">
                <button style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>Create <img src={Enter} style={{width: '30px'}} alt="" /></button>
            </div>
        </div>
    )
}