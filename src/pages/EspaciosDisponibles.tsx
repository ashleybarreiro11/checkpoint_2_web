import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const EspaciosDisponibles = () => {
    const { espaciosContext } = useContext(AppContext);
    return <h1>Espacios Disponibles</h1>;
};

export default EspaciosDisponibles;