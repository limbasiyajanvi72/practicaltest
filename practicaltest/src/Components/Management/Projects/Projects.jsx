import React, { useState } from "react";
import Buyers from "./Buyers";
import Information from "./Information";
import Grid from "./Grid";
import Files from "./Files";

function Projects() {
	let tabValue = ["Information", "Grid", "Files", "Buyers"];
	const [tabActive, setTabActive] = useState(tabValue[1]);
	const renderTabContent = () => {
		switch (tabActive) {
			case tabValue[0]:
				return <Information />;
			case tabValue[1]:
				return <Grid />;
			case tabValue[2]:
				return <Files />;
			case tabValue[3]:
				return <Buyers />;
			default:
				return null;
		}
	};

	return (
		<section className='p-5 flex flex-col gap-6'>
			<ul className='rounded-lg bg-[#F4F5F8] flex justify-center items-center w-[330px]'>
				{tabValue.map((tab, index) => (
					<li
						key={index}
						className={`px-4 py-2 cursor-pointer rounded-lg my-[2px] font-medium ${
							tabActive === tab
								? "bg-white shadow-[1px_1px_12px_0px_rgba(0,0,0,0.1)]"
								: ""
						}`}
						onClick={() => setTabActive(tabValue[index])}
					>
						{tab}
					</li>
				))}
			</ul>
			<div className='mt-4'>{renderTabContent()}</div>
		</section>
	);
}

export default Projects;
