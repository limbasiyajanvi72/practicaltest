import React, { useContext } from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Header from "../Global/Header/Header";
import { Outlet } from "react-router-dom";
import { SidebarContext, SidebarProvider } from "../../context/SidebarContext";

function Layout() {
	const { toggle, toggleSidebar } = useContext(SidebarContext);
	return (
		<>
			<div
				className={`grid ${
					toggle ? "grid-cols-[300px_1fr]" : "grid-cols-1"
				}`}
			>
				<Sidebar />
				<div className='flex flex-col'>
					<Header />
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Layout;
