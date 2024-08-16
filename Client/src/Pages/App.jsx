import { useState, useEffect } from 'react'


function App() {

  const [user, setUser] = useState(null)

  useEffect(() =>{
  
    const data = JSON.parse(sessionStorage.getItem("AuthData"))
    setUser(data)
   
  
  },[])

  return (
    <>
      <div className='Contenedor-App'>
        {
          user == "Usuario encontrado" ?
          <h1>Uffff, gracias a Dios</h1>
          :
          <h1>Con Dios lo vamos a lograr</h1>
        }
      </div>

      <button>verificar</button>
      
    </>
  )
}

export default App
