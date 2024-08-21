import { useState, useEffect } from 'react'
import Cookie from "universal-cookie";
import { PanelIzquierdo } from '../Components/App/PanelIzquierdo';
import { BoxChat } from '../Components/App/BoxChat';

import "../Css/App.css"


function App() {


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
      <div className=''>
        {
          typeof user == "object" ?
          <div className='Contenedor-App'>
            <PanelIzquierdo/>
            <BoxChat/>
          </div>
          :
          <a href="/Login">Inicar sesion</a>
        }
      </div>
      
    </>
  )
}

export default App
