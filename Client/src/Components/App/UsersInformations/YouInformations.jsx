import { useContext, useRef, useEffect } from "react";
import { MyPanelContext } from "../PanelIzquierdo";
import { IoClose } from "react-icons/io5";
import { YouPanelContext } from "../BoxChat";

export function YouInformations(){

    const You_Information = useRef(null)

    const [PanelYouInformation, setPanelYouInformation] = useContext(YouPanelContext);

    useEffect(() =>{
        You_Information.current.classList.toggle("Ver-You-Information")
    },[PanelYouInformation])

    return(
        <div className="Contenedor-You-Information" ref={You_Information}>
            <div className="Header-You-Information">
                <IoClose className="Icon-Close" style={{cursor: 'pointer'}} onClick={() =>{setPanelYouInformation(!PanelYouInformation)}}/>
                <h3 className="Title-Information">Info. Contact</h3>
            </div>

            <div className="Body-You-Information">
                <div className="You-Information-Photo">
                    <img src="" alt="" className="MyPhoto"/>
                    <div style={{textAlign: 'center'}}>
                        <h3>Jelias Octavio Garcia</h3>
                    </div>
                </div>
                <div className="You-Information-User">
                    <div>
                        <h1>Information</h1>
                        <h3>...</h3> 
                    </div>
                </div>
                <div className="Btn-Block">
                    <button style={{cursor: 'pointer'}}>BLOCK</button>
                </div>
            </div>
           
            <div className="Footer-You-Information">
                
            </div>
        </div>
    );
}