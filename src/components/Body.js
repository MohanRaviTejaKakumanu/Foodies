import Rescard from "./Rescard.js"
import resList from "../utils/mockData.js"

const Body = () =>{
    return(
        <div className="Res-container">
            {
                resList.map((restaurant) => <Rescard key = {restaurant.info.id}resData = {restaurant}/>)
            }
            
        </div>
    )
}

export default Body