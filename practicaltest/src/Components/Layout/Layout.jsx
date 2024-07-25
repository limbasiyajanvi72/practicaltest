import React from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Header from "../Global/Header/Header";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../context/SidebarContext";

function Layout() {
	return (
		<SidebarProvider>
			<div className='grid grid-cols-[300px_1fr]'>
				<Sidebar />
				<div>
					<Header />
					<Outlet />
				</div>
			</div>
		</SidebarProvider>
	);
}

export default Layout;
