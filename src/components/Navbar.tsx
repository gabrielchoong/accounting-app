import "../assets/css/Navbar.css"
import {useNavigate} from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    return (
        <nav className={"navbar"}>
            <div className={"navbar-links"}>
                <button className={"nav-button"} onClick={() => navigate("/")}>Home</button>
                <button className={"nav-button"} onClick={() => navigate("/invoice")}>Invoice</button>
                <button className={"nav-button"} onClick={() => navigate("/print")}>Print</button>
            </div>
        </nav>
    )
}

export default Navbar;