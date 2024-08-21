import { useContext, useRef, useEffect } from "react";
import { MyPanelContext } from "../PanelIzquierdo";
import { IoClose } from "react-icons/io5";

export function MyInformations(){

    const My_Information = useRef(null)

    const [PanelMyInformation, setPanelMyInformation] = useContext(MyPanelContext);

    useEffect(() =>{
        My_Information.current.classList.toggle("Ver-My-Information")
    },[PanelMyInformation])

    return(
        <div className="Contenedor-My-Information" ref={My_Information}>
            <div className="Header-My-Information">
                <IoClose className="Icon-Close" onClick={() =>{setPanelMyInformation(!PanelMyInformation)}}/>
                <h3 className="Title-Information">My Perfil</h3>
            </div>

            <div className="Body-My-Information">
                <div className="My-Information-Photo">
                    <img src="" alt="" className="MyPhoto"/>
                </div>
                <div className="My-Information-User">
                    <div>
                        <h1>You Name</h1>
                        <h3>Jelias Octavio Garcia</h3>
                    </div>
                    <div>
                        <h1>You Information</h1>
                        <h3>...</h3>
                    </div>
                </div>
            </div>

            <div className="Footer-My-Information">

            </div>
        </div>
    );
}