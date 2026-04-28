_import { AppContext } from "../context/AppContext";

export function Filters () {
    const [filter, setFilter] = useReserva;

    return (
        <div>
            <label>
                Tipo
                <select
                    value={filter.type}
                    onChange={(e) => setFilter("type", e.target.value)}
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
                    value={filter.available}
                    onChange={(e) => setFilter("available", e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="">disponible</option>
                        <option value="">no disponible</option>
                </select>
            </label>
        </div>
    )
}