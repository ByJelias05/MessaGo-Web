import { useState, useEffect } from 'react'
import Cookie from "universal-cookie";




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
            <h1>Logeado</h1>
          </div>
          :
          <a href="/Login">Inicar sesion</a>
        }
      </div>

      <button onClick={() => console.log(user)}>verificar</button>
      
    </>
  )
}

export default App
