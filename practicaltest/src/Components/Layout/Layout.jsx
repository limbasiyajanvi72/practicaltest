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
				className={`hidden md:grid ${
					toggle ? "grid-cols-[300px_1fr]" : "grid-cols-1"
				}`}
			>
				<Sidebar />
				<div className='flex flex-col'>
					<Header />
					<Outlet />
				</div>
			</div>

			<div className='block md:hidden relative'>
				{toggle && (
					<div className='fixed inset-0 bg-black opacity-10 z-10'></div>
				)}
				<div
					className={`fixed overflow-y-auto inset-y-0 left-0 transform ${
						toggle ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-300 ease-in-out z-20`}
				>
					<Sidebar />
				</div>
				<div className='relative z-10'>
					<Header />
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Layout;
