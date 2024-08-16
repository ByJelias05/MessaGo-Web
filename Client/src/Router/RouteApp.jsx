import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "../Pages/App"
import {Login} from "../Pages/Login"

export function RoutesApp(){
    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Login}/>
                    <Route path="/Messago" Component={App}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}