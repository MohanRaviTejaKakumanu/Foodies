import { LOGO_URL } from "../utils/constants"

const Header = () =>{
    return(
        <div className="head">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"></img>
            </div>
            <div className="navigator">
                <div>Home</div>
                <div>Contact Us</div>
                <div>Help</div>
                <div>Cart</div>
            </div>
        </div>
    )
}

export default Header