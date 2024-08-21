import { HeaderIzquierdo } from "./Headers/Header_Izquierdo";
import "../../Css/PanelIzquierdo.css"
import { Filtro } from "./Filtros/Filtro";
import { Friend } from "./Friends/Friend";
import { MyInformations } from "./UsersInformations/MyInformations";

import { createContext, useState } from "react";

export const MyPanelContext = createContext();

export function PanelIzquierdo(){

    const [PanelMyInformation, setPanelMyInformation] = useState(false);

    return(
        <MyPanelContext.Provider value={[PanelMyInformation, setPanelMyInformation]}>
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
                <MyInformations/>
            </div>
        </MyPanelContext.Provider>
    );
}