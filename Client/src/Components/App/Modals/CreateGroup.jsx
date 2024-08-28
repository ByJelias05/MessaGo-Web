import { useContext, useState } from "react";
import "../../../Css/Modal.css"
import { CgClose } from "react-icons/cg";
import { ModalContext } from "../../../Pages/App";
import Grupo1 from "../../../Images/Grupo1.jpg"
import Grupo2 from "../../../Images/Grupo2.jpg"
import Grupo3 from "../../../Images/Grupo3.jpg"
import { AddFriendGroup } from "../Users/AddFriendGroup";


export function CreateGroup(){

    const [Modal, setModal] = useContext(ModalContext);


    return(
        <div className="SombraModal">
            <div className="Modal">
                <div className="Header-Modal">
                    <CgClose className="Icono" onClick={() => {setModal(null)}}/>
                    <h1>Create new group</h1>
                </div>
                <div className="Body-Modal-Group">
                    <div className="InfoGroup">
                        <form action="">
                            <div className="Box-Image-Group" onClick={() => document.querySelector(".Image-Group").click()}>
                                <h4>picture</h4>
                                <input type="file" className="Image-Group" hidden/>
                            </div>
                            <div className="Images-Grop">
                                <img src={Grupo1} alt="" />
                                <img src={Grupo2} alt="" />
                                <img src={Grupo3} alt="" />
                            </div>
                            <input type="text" placeholder="Name group"/>
                        </form>
                    </div>
                    <div className="ListFriends">
                        <div className="Friends">
                            <h1>My friends</h1>
                            <AddFriendGroup/>
                        </div>
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
}