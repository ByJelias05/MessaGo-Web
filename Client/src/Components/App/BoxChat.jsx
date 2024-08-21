import { FooterChat } from "./Footers/FooterChat";
import { HeaderBox } from "./Headers/Header-Box";
import "../../Css/BoxChat.css"
import { createContext, useState } from "react";
import { YouInformations } from "./UsersInformations/YouInformations";

export const YouPanelContext = createContext(); 

export function BoxChat(){

    const [PanelYouInformation, setPanelYouInformation] = useState(false);

    return(
        <YouPanelContext.Provider value={[PanelYouInformation, setPanelYouInformation]}>
            <div className="Contenedor-Box-Chat">
                <div className="Header-Body-Footer">
                    <div className="Header-Chat">
                        <HeaderBox/>
                    </div>

                    <div className="Body-Chat">
                        
                    </div>

                    <div className="Footer-Chat">
                        <FooterChat/>
                    </div>
                </div>
                <YouInformations/>
            </div>
        </YouPanelContext.Provider>
    );
}