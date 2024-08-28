import Aceptar from "../../../icons/Aceptar.png"
import Rechazar from "../../../icons/Rechazar.png"
import Foto from "../../../Images/Foto2x2.jpeg"
import "../../../Css/USers.css"

export function AcceptUser(){
    return(
        <div className="Contenedor-Accept-User">
            <div className="Foto-Nombre">
                <img src={Foto} alt="" />
                <h3>Jelias Garcia</h3>
            </div>
            <div className="Btns-Accept-User">
                <button><img src={Aceptar} alt="" /></button>
                <button><img src={Rechazar} alt="" /></button>
            </div>
        </div>
    );
}