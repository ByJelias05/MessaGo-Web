import { FcAddImage } from "react-icons/fc";
import sent from "../../../icons/sent.png"
import image from "../../../icons/Image.png"

export function FooterChat(){
    return(
        <div className="Contenedor-Footer-Chat">
            <button style={{cursor: 'pointer'}}><img src={image} alt="" /></button>
            <input type="text" placeholder="Write message..."/>
            <button style={{cursor: 'pointer'}}><img src={sent} alt="" /></button>
        </div>
    );
}