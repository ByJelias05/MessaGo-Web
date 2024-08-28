import "../../../Css/Messages.css"
import foto from "../../../Images/Foto2x2.jpeg"
import icon from "../../../icons/Double Tick.png"

export function MyMessages(){
    return(
        <div className="Contenedor-My-Messages">
            <div className="My-Message">
                <div className="Foto">
                    <img src={foto} alt="" />
                </div>
                <div className="Text">
                    <h3>ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</h3>
                </div>
                <div className="Hora-Status">
                    <div className="Hora">
                        <span>5:00pm</span>
                    </div>
                    <div className="Status">
                        <img src={icon} alt="" />
                    </div>
                </div>
               
            </div>
        </div>
    );
}