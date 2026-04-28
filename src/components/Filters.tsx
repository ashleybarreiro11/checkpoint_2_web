import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function Filters () {
    const {filterContext} = useContext(AppContext)!;

    return (
        <div>
            <label>
                Tipo
                <select
                    value={filterContext.type}
                    onChange={(e) => filterContext("type", e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="">meeting room</option>
                        <option value="">private office</option>
                        <option value="">shared desk</option>
                        <option value="">creative room</option>
                </select>
            </label>

             <label>
                Disponibilidad
                <select
                    value={filterContext.available}
                    onChange={(e) => filterContext("available", e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="">disponible</option>
                        <option value="">no disponible</option>
                </select>
            </label>
        </div>
    )
}