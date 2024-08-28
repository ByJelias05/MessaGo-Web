import "../../../Css/Messages.css"
import foto from "../../../Images/Foto2x2.jpeg"
import icon from "../../../icons/Double Tick.png"

export function YouMessages(){
    return(
        <div className="Contenedor-You-Messages">
            <div className="You-Message">
                <div className="Foto">
                    <img src={foto} alt="" />
                </div>
                <div className="Nombre">
                    <h3>Jelias Garcia</h3>
                </div>
                <div className="Text">
                    <h3>Encantado de conocerte</h3>
                </div>
                <div className="Hora-Status">
                    <div className="Hora">
                        <span>5:00pm</span>
                    </div>

                </div>
               
            </div>
        </div>
    );
}