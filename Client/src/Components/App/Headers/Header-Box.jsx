import { useContext } from "react";
import { YouPanelContext } from "../BoxChat";

export function HeaderBox(){

    const [PanelYouInformation, setPanelYouInformation]  = useContext(YouPanelContext)

    return(
        <div className="Contenedor-HeaderBox">
           <img src="" alt="" onClick={() => {setPanelYouInformation(!PanelYouInformation)}}/>
           <div className="Nombre-Fecha-User">
                <h4>Jelias Garcia</h4>
                <h6>25/5/2024</h6>
           </div>
        </div>
    );
}