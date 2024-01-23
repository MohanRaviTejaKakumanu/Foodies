import React  from "react"
import ReactDOM  from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js"

const Applayout = () =>{
    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}
const add = ReactDOM.createRoot(document.querySelector('#root'))
add.render(<Applayout/>)