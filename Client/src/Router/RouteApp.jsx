import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "../Pages/App"
import {Login} from "../Pages/Login"

export function RoutesApp(){
    return(
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={App}/>
                    <Route path="/Login" Component={Login}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}