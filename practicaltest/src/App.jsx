import { useState } from "react";
import "./fonts.css";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
	return (
		<SidebarProvider>
			<section className='grid grid-cols-[300px_1fr]'>
				<Sidebar />
				<Header />
			</section>
		</SidebarProvider>
	);
}

export default App;
