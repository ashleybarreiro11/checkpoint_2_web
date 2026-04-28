import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Resumen = () => {
    const { resumenContext } = useContext(AppContext);
    return <h1>Resumen</h1>;
};

export default Resumen;