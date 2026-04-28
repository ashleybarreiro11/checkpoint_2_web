/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useState,
	type PropsWithChildren,
} from 'react';
import type { Reserva } from '../data';

// tipado del contexto
type EspacioContextType = {

	

}

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

