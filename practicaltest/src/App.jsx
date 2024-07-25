import { useState } from "react";
import "./fonts.css";
import "./App.css";
import Sidebar from "./Components/Global/Sidebar/Sidebar";
import Header from "./Components/Global/Header/Header";
import { SidebarProvider } from "./context/SidebarContext";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Overview from "./Components/Overview/Overview";
import Projects from "./Components/Management/Projects/Projects";
import Sponsers from "./Components/Management/Sponsers";
import Employees from "./Components/Management/Employees";
import Partners from "./Components/Management/Partners";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Overview />} />
					<Route path='/management/projects' element={<Projects />} />
					<Route path='/management/sponsers' element={<Sponsers />} />
					<Route
						path='/management/employees'
						element={<Employees />}
					/>
					<Route path='/management/partners' element={<Partners />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
