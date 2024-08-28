import { useState, useEffect } from 'react'
import Cookie from "universal-cookie";
import { PanelIzquierdo } from '../Components/App/PanelIzquierdo';
import { BoxChat } from '../Components/App/BoxChat';

import { AddFriend } from "../Components/App//Modals/AddFriend";
import { CreateGroup } from "../Components/App//Modals/CreateGroup";

import { createContext } from 'react';

import "../Css/App.css"

export const ModalContext = createContext();

function App() {

  const Modales = {
    AddFriend: AddFriend,
    CreateGroup: CreateGroup
}

  const [Modal, setModal] = useState(null);

  const ModalActual = Modales[Modal]; 

  const [user, setUser] = useState()

  useEffect(() =>{
    const cookie = new Cookie();
    const token = cookie.get("AuthData")
   

    fetch("http://localhost:3001/Messago", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.json())
    .then(data => {setUser(data)})


  })

  return (
    <>
      <ModalContext.Provider value={[Modal, setModal]}>
        <div className=''>
          {
            typeof user == "object" ?
              <div className='Contenedor-App'>
                <PanelIzquierdo/>
                <BoxChat/>
                {
                  Modal != null ?
                  <ModalActual/>
                  :
                  null
                }
              </div>
            :
            <a href="/Login">Inicar sesion</a>
          }
        </div>
      </ModalContext.Provider>
      
    </>
  )
}

export default App
