import "../../../Css/PanelIzquierdo.css"
import { FaUserPlus } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";

import { useContext } from "react";
import { MyPanelContext } from "../PanelIzquierdo";

export function HeaderIzquierdo(){

    const [PanelMyInformation, setPanelMyInformation] = useContext(MyPanelContext);

    return(
        <div className="Contenedor-Header-Izquierdo">
             <div className="Img-User" style={{cursor: 'pointer'}} onClick={() => setPanelMyInformation(!PanelMyInformation)}>
                <img src="" alt=""  />
            </div>
            <div className="Header-Izquierdo-Btns">
                <button style={{cursor: 'pointer'}}><FaUserPlus className="Icono-Header"/></button>
                <button style={{cursor: 'pointer'}}><HiUsers className="Icono-Header"/></button>
                <button style={{cursor: 'pointer'}}><SlOptionsVertical className="Icono-Header"/></button>
            </div>
        </div>
    );
}