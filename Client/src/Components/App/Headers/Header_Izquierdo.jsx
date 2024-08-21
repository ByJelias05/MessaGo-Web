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
             <div className="Img-User" onClick={() => setPanelMyInformation(!PanelMyInformation)}>
                <img src="" alt=""  />
            </div>
            <div className="Header-Izquierdo-Btns">
                <button><FaUserPlus className="Icono-Header"/></button>
                <button><HiUsers className="Icono-Header"/></button>
                <button><SlOptionsVertical className="Icono-Header"/></button>
            </div>
        </div>
    );
}