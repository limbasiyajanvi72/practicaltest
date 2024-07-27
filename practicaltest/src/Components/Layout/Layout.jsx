// import React, { useContext } from "react";
// import Sidebar from "../Global/Sidebar/Sidebar";
// import Header from "../Global/Header/Header";
// import { Outlet } from "react-router-dom";
// import { SidebarContext	 } from "../../context/SidebarContext";

// function Layout() {
// 	const { toggle, toggleSidebar } = useContext(SidebarContext);
// 	const closeSidebar=(e)=>{
// 		e.preventDefault();
// 		if(toggle){
// 			toggleSidebar();
// 		}
// 	}

// 	return (
// 		<>
// 			<div className='hidden md:flex'>
// 				{toggle && (
// 					<div className='fixed inset-y-0 left-0  z-[99] overflow-y-auto'>
// 						<Sidebar />
// 					</div>
// 				)}

// 				<div
// 					className={`${
// 						toggle ? "ml-[300px]" : ""
// 					} flex flex-col flex-grow `}
// 					onClick={(e)=>closeSidebar(e)}
// 				>
// 					<Header />
// 					<Outlet />
// 				</div>
// 			</div>

// 			<div className='block md:hidden relative'>
// 				{toggle && (
// 					<div className='fixed inset-0 bg-black opacity-10 z-10' onClick={(e)=>closeSidebar(e)}></div>
// 				)}
// 				<div
// 					className={`fixed overflow-y-auto inset-y-0 left-0 transform ${
// 						toggle ? "translate-x-0" : "-translate-x-full"
// 					} transition-transform duration-300 ease-in-out z-20`}
// 				>
// 					<Sidebar />
// 				</div>
// 				<div className='relative z-10'>
// 					<Header />
// 					<Outlet />
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default Layout;


import React, { useContext } from "react";
import Sidebar from "../Global/Sidebar/Sidebar";
import Header from "../Global/Header/Header";
import { Outlet } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";

function Layout() {
	const { toggle, toggleSidebar } = useContext(SidebarContext);
	const closeSidebar = (e) => {
		e.preventDefault();
		if (toggle) {
			toggleSidebar();
		}
	};

	return (
		<>
			<div className='hidden md:flex'>
				{toggle && (
					<div className='fixed inset-y-0 left-0 z-[99] overflow-y-auto'>
						<Sidebar />
					</div>
				)}

				<div
					className={`${
						toggle ? "ml-[300px]" : ""
					} flex flex-col flex-grow`}
					onClick={(e) => closeSidebar(e)}
				>
					<Header />
					<Outlet />
				</div>
			</div>

			<div className='block md:hidden relative'>
				{toggle && (
					<div
						className='fixed inset-0 bg-black opacity-10 z-10'
						onClick={(e) => closeSidebar(e)}
					></div>
				)}
				<div
					className={`fixed overflow-y-auto inset-y-0 left-0 transform ${
						toggle ? "translate-x-0" : "-translate-x-full"
					} transition-transform duration-300 ease-in-out z-20`}
				>
					<Sidebar />
				</div>
				<div className='relative z-10' onClick={(e) => closeSidebar(e)}>
					<Header />
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Layout;
