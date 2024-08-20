import { HeaderIzquierdo } from "./Headers/Header_Izquierdo";
import "../../Css/PanelIzquierdo.css"
import { Filtro } from "./Filtros/Filtro";
import { Friend } from "./Friends/Friend";

export function PanelIzquierdo(){
    return(
        <div className="Contenedor-Panel-Izquierdo">
            <div className="Header-Izquierdo">
                <HeaderIzquierdo/>
            </div>
            <div className="Contenedor-Users-Filtro">
                <div className="Filtro">
                    <Filtro/>
                </div>
                <div className="Users">
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                    <Friend/>
                </div>
            </div>
        </div>
    );
}