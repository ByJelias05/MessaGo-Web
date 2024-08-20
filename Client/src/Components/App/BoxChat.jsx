import { FooterChat } from "./Footers/FooterChat";
import { HeaderBox } from "./Headers/Header-Box";
import "../../Css/BoxChat.css"

export function BoxChat(){
    return(
        <div className="Contenedor-Box-Chat">
            <div className="Header-Chat">
                <HeaderBox/>
            </div>

            <div className="Body-Chat">
                
            </div>

            <div className="Footer-Chat">
                <FooterChat/>
            </div>
        </div>
    );
}