/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useState,
	type PropsWithChildren,
} from 'react';
import type { initialReservas, Reserva, Space } from '../data';

interface Filters {
	type: string;
	available: string;
}

// tipado del contexto
interface AppContextType {
	space: Reserva [];
	filters: Filters; 
	setFilter: (key: key of filters, value: string) => void;
};

//crear el contexto
export const AppContext = createContext<AppContextType | undefined>(undefined);

//provider
export function AppContextProvider({ children }: PropsWithChildren) {
	const [espaciosContext, setEspaciosContext] = useState("");
	const [reservaContext, setReservaContext] = useState("");
	const [filterContext, setFilterContext] = useState<Filters>({type:"", available:""});


	return <AppContext.Provider value={{espaciosContext, setEspaciosContext, reservaContext, setReservaContext, filterContext, setFilterContext}}>{children}</AppContext.Provider>;
};

/*export type AppContextValue = {
	message: string;
	setMessage: (value: string) => void;
	resetMessage: () => void;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);

const defaultMessage = 'Context API ready';

export function AppContextProvider({ children }: PropsWithChildren) {
	const [espaciosContext, setEspaciosContext] = useState("");
	const [reservaContext, setReservaContext] = useState("");
	const [reservaContext, setReservaContext] = useState("");

	const value = {
		message,
		setMessage,
		resetMessage: () => setMessage(defaultMessage),
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
/*

