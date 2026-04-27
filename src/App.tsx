import { Routes, Route } from "react-router-dom";
import EspaciosDisponibles from "./pages/EspaciosDisponibles";
import Resumen from "./pages/Resumen";


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<EspaciosDisponibles/>}/>
			<Route path="/resumen" element={<Resumen/>}/>
		</Routes>
	);
};

export default App;