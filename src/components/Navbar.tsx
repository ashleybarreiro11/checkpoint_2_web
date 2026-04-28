import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <Link to="/">Espacios Disponibles</Link>
            <Link to="/resumen">Resumen</Link>
        </nav>
    );
};

export default Navbar