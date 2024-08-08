import ArcoTop from "../Images/svgT.png";
import ArcoBotom from "../Images/ArcoBotom.svg";
import Logo from "../Images/Logo.png"
import Ayuda from "../icons/Ayuda.png"

import "../Css/Login.css"
import { Sesion } from "../Components/Login/Sesion";

import { useState } from "react";
import { CreateUser } from "../Components/Login/CreateUser";

export function Login(){

    const [Login, setLogin] = useState(true);
    const [Help, setHelp] = useState(false);

    return(
        <div className='Contenedor-Login'>
            <div className='Arco-Top'>
                <div className='Logo-Login'>
                    <div className="Logo">
                        <img src={Logo} alt="" />
                        <h1>Messa<span>Go</span></h1>
                    </div>
                </div>
                <div className="Arco">
                    <img src={ArcoTop}></img>
                </div>
            </div>

            <div className="Body-Login">
                {
                    Login ?
                    <Sesion/>
                    :
                    <CreateUser/>
                }
                <button onClick={() =>{setLogin(!Login)}} className="Btn-Create-Account">{Login ? 'Create Account':'Login'}</button>
            </div>

            <div className='Arco-below'>
                <div className="Arco">
                    <img src={ArcoBotom}/>
                </div>
                <div className="Boton-Help">
                    {
                        Help ?
                        <div className="Box-Help">
                            <h1 className="Titulo-Box-Help">Did you forget <br/> your password?</h1>
                            <div className="Btns-Help">
                                <button>Yes</button>
                                <button onClick={() =>{setHelp(false)}}>No</button>
                            </div>
                        </div>
                    :
                    null
                    }

                    <button onClick={() =>{setHelp(!Help)}} style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>HELP <img style={{width: '30px', marginBottom: '7px', marginLeft: '120px'}} src={Ayuda} alt="" /></button>
                </div>
            </div>
      </div>
    )
}