import Aceptar from "../../../icons/Aceptar.png"
import Rechazar from "../../../icons/Rechazar.png"
import Foto from "../../../Images/Foto2x2.jpeg"
import "../../../Css/USers.css"
import { useState } from "react";

export function AddFriendGroup(){

    const [StatusFriend, setStatusFriend] = useState(false);

    const Clase = StatusFriend != false ? "Delete" : "Add";

    return(
        <div className="Contenedor-Accept-User">
            <div className="Foto-Nombre">
                <img src={Foto} alt="" />
                <h3>Jelias Garcia</h3>
            </div>
            <div className="Btn-Add-User-Group">
                <button className={`Btn-User-Group ${Clase}`} onClick={() => {setStatusFriend(!StatusFriend)}}>{Clase}</button>
            </div>
        </div>
    );
}