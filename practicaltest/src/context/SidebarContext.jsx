import { Children, createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
	const [toggle, setToggle] = useState(true);

	const toggleSidebar = () => {
		setToggle(!toggle);
	};

	return (
		<SidebarContext.Provider value={{ toggle, toggleSidebar }}>
			{children}
		</SidebarContext.Provider>
	);
};
