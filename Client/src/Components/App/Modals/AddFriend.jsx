import { useContext } from "react";
import "../../../Css/Modal.css"
import { CgClose } from "react-icons/cg";
import { ModalContext } from "../../../Pages/App";
import icon from "../../../icons/SendB.png"
import Foto from "../../../Images/Foto2x2.jpeg"
import { AcceptUser } from "../Users/AcceptUsers";

export function AddFriend(){

    const [Modal, setModal] = useContext(ModalContext);

    return(
        <div className="SombraModal">
            <div className="Modal">
                <div className="Header-Modal">
                    <CgClose className="Icono" onClick={() => {setModal(null)}}/>
                    <h1>Add new friends</h1>
                </div>
                <div className="Body-Modal">
                    <div className="SearchUser">
                        <input type="text" placeholder="Name ID"/>
                        <button className="Btn-Search">Search</button>
                        <div className="UserFound">
                            <div className="Foto-Nombre">
                                <img src={Foto} alt="" />
                                <h3>Jelias Garcia</h3>
                            </div>
                            <button><img src={icon} alt="" /></button>
                        </div>
                    </div>
                    <div className="ListUsers">
                        <AcceptUser/>
                        <AcceptUser/>
                        <AcceptUser/>
                    </div>
                </div>
            </div>
        </div>
    );
}