import React, { useContext, useState } from "react";
import OverView from "../../../assets/SvgIcon/Overview.svg?react";
import Management from "../../../assets/SvgIcon/Management.svg?react";
import ToggleMenu from "../../../assets/SvgIcon/ToggleMenu.svg?react";
import Documents from "../../../assets/SvgIcon/Documents.svg?react";
import Brokers from "../../../assets/SvgIcon/Brokers.svg?react";
import Confidentials from "../../../assets/SvgIcon/Confidentials.svg?react";
import DownArrow from "../../../assets/SvgIcon/DownArrow.svg?react";
import ComapnyBranch from "../../../assets/SvgIcon/CompanyBranch.svg?react";
import AboutCompany from "../../../assets/SvgIcon/AboutCompany.svg?react";
import { SidebarContext } from "../../../context/SidebarContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
	const [menu, togglemenu] = useState({
		management: false,
		documents: false,
		companyBranch: false,
		aboutCompany: false,
	});
	const { toggle, toggleSidebar } = useContext(SidebarContext);
	const navigate = useNavigate();

	return (
		<>
			{toggle && (
				<nav className='w-[300px] p-5 h-[100vh] text-[#262626]'>
					<article className='flex justify-between items-center'>
						<h1 className='uppercase font-bold text-[32px] text-[#262626]'>
							amilek
						</h1>
						<button onClick={toggleSidebar}>
							<ToggleMenu className='cursor-pointer' />
						</button>
					</article>
					<article className=' pt-8 mb-8 px-3 flex flex-col justify-center  gap-4 w-[260px] relative'>
						<div
							className='flex gap-3  cursor-pointer'
							onClick={() => navigate("/")}
						>
							<OverView />
							<span className='font-medium text-base '>
								Overview
							</span>
						</div>

						<div
							className='flex justify-between'
							onClick={() => {
								togglemenu({
									...menu,
									management: !menu.management,
								});
							}}
						>
							<div className='flex gap-3  cursor-pointer'>
								<Management />
								<span className='font-medium text-base '>
									Management
								</span>
							</div>

							<DownArrow
								className={`mt-2 cursor-pointer ${
									menu.management ? "rotate-180" : ""
								}`}
							/>
						</div>
						{menu.management && (
							<ul className='flex flex-col ml-3 border-l-[1px] border-[#C9C9C9] pl-4 font-medium'>
								<li
									onClick={() =>
										navigate("/management/projects")
									}
									className={`cursor-pointer px-4 py-1 rounded-xl ${
										window.location.pathname.includes(
											"/management/projects"
										)
											? "bg-[#F4F5F8]"
											: "bg-white"
									}`}
								>
									Projects
								</li>
								<li
									onClick={() =>
										navigate("/management/sponsers")
									}
									className={`cursor-pointer px-4 py-1 rounded-xl ${
										window.location.pathname.includes(
											"/management/sponsers"
										)
											? "bg-[#F4F5F8]"
											: "bg-white"
									}`}
								>
									Sponsors
								</li>
								<li
									onClick={() =>
										navigate("/management/employees")
									}
									className={`cursor-pointer px-4 py-1 rounded-xl ${
										window.location.pathname.includes(
											"/management/employees"
										)
											? "bg-[#F4F5F8]"
											: "bg-white"
									}`}
								>
									Employees
								</li>
								<li
									onClick={() =>
										navigate("/management/partners")
									}
									className={`cursor-pointer px-4 py-1 rounded-xl ${
										window.location.pathname.includes(
											"/management/partners"
										)
											? "bg-[#F4F5F8]"
											: "bg-white"
									}`}
								>
									Partners
								</li>
							</ul>
						)}
						<div
							className='flex justify-between '
							onClick={() =>
								togglemenu({
									...menu,
									documents: !menu.documents,
								})
							}
						>
							<div className='flex gap-3  cursor-pointer'>
								<Documents />
								<span className='font-medium text-base'>
									Documents
								</span>
							</div>

							<DownArrow
								className={`mt-2 cursor-pointer ${
									menu.documents ? "rotate-180" : ""
								}`}
							/>
						</div>
						{menu.documents && (
							<ul className='flex flex-col gap-2 ml-3 border-l-[1px] border-[#C9C9C9] pl-6 font-medium'>
								<li>Projects</li>
								<li>Sponsors</li>
								<li>Employees</li>
								<li>Partners</li>
							</ul>
						)}

						<div className='flex gap-3  cursor-pointer'>
							<Brokers />
							<span className='font-medium text-base'>
								Brokers
							</span>
						</div>
						<div className='flex gap-3 font-medium text-base cursor-pointer'>
							<Confidentials />
							<span className='font-medium'>Confidentials</span>
						</div>
						<div className='absolute bottom-[-30px] left-20 w-20  border-[3px] border-[#EEEEEE]'></div>
					</article>

					<article className=' pt-8 mb-8 px-3 flex flex-col justify-center  gap-4  w-[260px] relative'>
						<div
							className='flex justify-between'
							onClick={() =>
								togglemenu({
									...menu,
									companyBranch: !menu.companyBranch,
								})
							}
						>
							<div className='flex gap-3 font-medium text-base cursor-pointer'>
								<ComapnyBranch />
								<span className='font-medium'>
									Company Branches
								</span>
							</div>

							<DownArrow
								className={`mt-2 cursor-pointer ${
									menu.companyBranch ? "rotate-180" : ""
								}`}
							/>
						</div>
						{menu.companyBranch && (
							<ul className='flex flex-col gap-2 ml-3 border-l-[1px] border-[#C9C9C9] pl-6 font-medium'>
								<li>Ahmedabad</li>
								<li>Surat</li>
								<li>Vadodara</li>
							</ul>
						)}

						<div className='absolute bottom-[-30px] left-20 w-20  border-[3px] border-[#EEEEEE]'></div>
					</article>

					<article className=' pt-8 mb-8 px-3 flex flex-col justify-center  gap-4  w-[260px] '>
						<div
							className='flex justify-between'
							onClick={() =>
								togglemenu({
									...menu,
									aboutCompany: !menu.aboutCompany,
								})
							}
						>
							<div className='flex gap-3  cursor-pointer'>
								<AboutCompany />
								<span className='font-medium text-base'>
									About Company
								</span>
							</div>

							<DownArrow
								className={`mt-2 cursor-pointer ${
									menu.aboutCompany ? "rotate-180" : ""
								}`}
							/>
						</div>
						{menu.aboutCompany && (
							<ul className='flex flex-col gap-2 ml-3 pl-6  border-l-[1px] border-[#C9C9C9] font-medium '>
								<li>History</li>
								<li>Images</li>
								<li>Events</li>
							</ul>
						)}
					</article>
				</nav>
			)}
		</>
	);
}

export default Sidebar;
