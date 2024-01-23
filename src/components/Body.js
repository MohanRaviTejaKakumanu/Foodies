import Rescard from "./Rescard.js"
import resList from "../utils/mockData.js"

const Body = () =>{
    return(
        <div className="Res-container">
            <Rescard resData = {resList[0]}/>
            <Rescard resData = {resList[1]}/>
            <Rescard resData = {resList[2]}/>
            <Rescard resData = {resList[3]}/>
            <Rescard resData = {resList[4]}/>
            <Rescard resData = {resList[5]}/>
            <Rescard resData = {resList[6]}/>
            <Rescard resData = {resList[7]}/>
            <Rescard resData = {resList[8]}/>
            <Rescard resData = {resList[9]}/>
            <Rescard resData = {resList[10]}/>
            <Rescard resData = {resList[11]}/>
            <Rescard resData = {resList[12]}/>
            <Rescard resData = {resList[13]}/>
            <Rescard resData = {resList[14]}/>
            <Rescard resData = {resList[15]}/>
            <Rescard resData = {resList[16]}/>
            <Rescard resData = {resList[17]}/>
            <Rescard resData = {resList[18]}/>
            <Rescard resData = {resList[19]}/>   
        </div>
    )
}

export default Body