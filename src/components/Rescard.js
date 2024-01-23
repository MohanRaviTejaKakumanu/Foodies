import { CDN_URL } from "../utils/constants"


const Rescard =(props) =>{
    const {resData}= props
    const {cloudinaryImageId, name, cuisines, locality, avgRating, costForTwo} = resData?.info
    const {slaString} = resData.info.sla
    return(
        <div className="Res-card">
            <div className="image-container">
                <img className="image" src={CDN_URL+cloudinaryImageId} alt="image"></img>
                <div className="prop">
                <div>{name}</div>
                <div>
                    {cuisines.join(', ')}
                </div>
                <div>
                    {locality}
                </div>
                <div>
                    {avgRating} stars
                </div>
                <div>
                    {costForTwo}
                </div>
                <div>
                    {slaString }
                </div>
                </div>
                
            </div>
        </div>
    )
    
}

export default Rescard