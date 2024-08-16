import { useState, useEffect } from 'react'


function App() {

  const [user, setUser] = useState(null)

  useEffect(() =>{
    alert("Hola")
  },[])

  return (
    <>
      <div className='Contenedor-App'>
        {
          user != null ?
          <h1>Uffff, gracias a Dios</h1>
          :
          <h1>Con Dios lo vamos a lograr</h1>
        }
      </div>

      <button onClick={() => console.log(user)}>verificar</button>
      
    </>
  )
}

export default App
