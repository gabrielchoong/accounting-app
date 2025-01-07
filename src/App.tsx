import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Invoice from "./pages/Invoice.tsx";
import Print from "./pages/Print.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/invoice"} element={<Invoice/>}/>
                <Route path={"/print"} element={<Print/>}/>
            </Routes>
        </Router>
    );
}

export default App;
