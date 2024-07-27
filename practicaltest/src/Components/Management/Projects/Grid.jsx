import React, { useContext, useState } from "react";
import VilleIcon from "../../../assets/SvgIcon/VilleIcon.svg?react";
import ThreeSquare from "../../../assets/SvgIcon/ThreeSquare.svg?react";
import Triangle from "../../../assets/SvgIcon/Triangle.svg?react";
import RedTriangle from "../../../assets/SvgIcon/RedTriangle.svg?react";
import { SidebarContext } from "../../../context/SidebarContext";
import Plan from "../../../assets/Images/plan.png";
import TopView from "../../../assets/SvgIcon/TopView.svg?react";
import Sofa from "../../../assets/SvgIcon/Sofa.svg?react";
import Rooms from "../../../assets/SvgIcon/Rooms.svg?react";
import Layout from "../../../assets/SvgIcon/Layout.svg?react";
import BluePrint from "../../../assets/SvgIcon/BluePrint.svg?react";
import FaceToward from "../../../assets/SvgIcon/FaceToward.svg?react";
import plan1 from "../../../assets/Images/plan1.png";
import plan2 from "../../../assets/Images/plan2.png";
import plan3 from "../../../assets/Images/plan3.png";

function Grid() {
	const [plan, setPlan] = useState({ floor: "1", block: "1001" });
	const { toggle } = useContext(SidebarContext);

	const floorSeclect = (e) => {
		if (e.target.value < 1 || e.target.value > 36) {
			alert("Invalid Input");
		} else {
			setPlan({ ...plan, floor: e.target.value });
		}
	};

	return (
		<section className=''>
			<article className='flex gap-4'>
				<button className='flex gap-3 justify-center items-center  border-[1px] border-[#e5e5e5] rounded-xl w-[113px] h-[48px]'>
					<VilleIcon />
					<span className='font-bold text-[#00000080]'>
						Ami Ville
					</span>
				</button>
				<button className='flex gap-1 justify-center items-center  border-[1px] border-[#e5e5e5] rounded-xl w-[100px] h-[48px]'>
					<ThreeSquare />
					<h1 className='font-bold text-[#00000080]'>Wing A</h1>
				</button>
			</article>
			<article
				className={`flex flex-col lg:grid lg:grid-cols-[1fr_441px] xl:grid-cols-[1fr_636px]  gap-6 py-5 ${
					toggle ? "flex" : ""
				} `}
			>
				<main className='hidden lg:flex flex-col bg-[#fafafa] border-[#0000000D] rounded-xl border-t-[1px] border-b-[0.5px] border-r-[0.5px] border-l-[0.5px] h-min' onClick={(e)=>e.stopPropagation()}>
					<div className=' flex justify-between items-center h-[74px]   px-5    '>
						<span className='text-[22px] font-medium text-[#1B1B1B]'>
							Floors
						</span>
						<span className='text-base font-bold text-custom-gray'>
							150 Units
						</span>
					</div>

					<div className=' flex flex-wrap '>
						{Array.from({ length: 36 }, (_, index) => (
							<div
								key={index + 1}
								className={`flex-grow min-w-[108px]   h-[95px] border-[0.5px] border-[#0000000D] flex flex-col gap-1 justify-center items-center cursor-pointer   ${
									index + 1 === plan.floor
										? " bg-[#e9e8f7]"
										: ""
								}`}
								onClick={() =>
									setPlan({ ...plan, floor: index + 1 })
								}
							>
								<span
									className={`text-[22px] text-[#1B1B1B] font-medium ${
										index + 1 === plan.floor
											? "text-[#5046E5]"
											: ""
									}`}
								>
									{index + 1}
								</span>
								<span
									className={`text-custom-gray font-medium ${
										index + 1 === plan.floor
											? "text-[#5046E5]"
											: ""
									}`}
								>
									5 units
								</span>
							</div>
						))}
					</div>
				</main>

				<div className=' lg:hidden flex gap-3'onClick={(e)=>e.stopPropagation()}>
					<h2 className='font-medium text-[24px] text-[#262626] '>
						Enter Floor
					</h2>
					<input
						type='number'
						placeholder='enter floor 1 to 36'
						className='bg-[#fafafa] border border-[#0000000D] rounded-md focus:outline-0 px-2'
						onChange={(e) => floorSeclect(e)}

					/>
				</div>

				<main className='flex flex-col  gap-6 '>
					<div className='flex justify-center lg:justify-start flex-wrap gap-6 '>
						{Array.from({ length: 10 }, (_, index) => (
							<div
								key={index}
								className={`w-[131px] xl:w-[141px]  h-[74px] rounded-xl border-[1px] border-[#0000000D] relative flex  items-center  justify-center  cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${
									plan.block ===
									`${plan.floor * 100 + index + 1}`
										? "bg-[#e9e8f7]"
										: "bg-[#fafafa]"
								}`}
								onClick={(e) =>{setPlan({
									...plan,
									block: `${
										plan.floor * 100 + index + 1
									}`,
								});e.stopPropagation()}
									
								}
							>
								<span
									className={`text-[22px] font-medium text-[#262626] leading-[26.25px] ${
										plan.block ===
										`${plan.floor * 100 + index + 1}`
											? "text-[#5046E5]"
											: ""
									}`}
								>
									A-{plan.floor * 100 + index + 1}
								</span>
								<span className='absolute bottom-2 right-2'>
									{index === 2 ||
									index === 3 ||
									index === 4 ? (
										<RedTriangle />
									) : (
										<Triangle />
									)}
								</span>
							</div>
						))}
					</div>
					<div className='flex flex-col gap-6 border-[#0000000D] rounded-xl border-[1px]  p-6 bg-[#fafafa]'>
						<div className='flex justify-between '>
							<span className='text-[24px] font-bold text-[#000000]'>
								A-{plan.block}
							</span>

							<span
								className={`text-[20px] font-medium ${
									plan.block &&
									["3", "4", "5"].includes(
										plan.block.slice(-1)
									)
										? "text-[#FF0000]"
										: "text-[#20BC59]"
								}`}
							>
								{plan.block &&
								["3", "4", "5"].includes(plan.block.slice(-1))
									? "Not Available"
									: "Available"}
							</span>
						</div>
						<div
							className={`flex flex-col items-center  xl:flex-row gap-6  `}
						>
							<div className='flex flex-col items-center lg:items-start  gap-6'>
								<img src={Plan} alt='plan' className="w-[326px] sm:w-[536px] xl:w-[326px]" />
								<div className='flex justify-center lg:justify-start gap-3 md:gap-6'>
									<img
										src={plan1}
										alt=''
										className='rounded-md'
									/>
									<img
										src={plan2}
										alt=''
										className='rounded-md'
									/>
									<img
										src={plan3}
										alt=''
										className='rounded-md'
									/>
								</div>
								<span className='text-[#5046E5] text-[20px] font-medium'>
									View Details
								</span>
							</div>
							<div className='flex  xl:flex-col gap-6'>
								<div className='flex flex-col gap-6'>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2 items-center'>
											<TopView />
											<span className='text-custom-gray  txet-sm'>
												TopView
											</span>
										</div>
										<span className='font-medium text-[#262626]'>
											3 BHK Type 6
										</span>
									</div>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2 items-center'>
											<Sofa />
											<span className='text-custom-gray  txet-sm'>
												Sofa
											</span>
										</div>
										<span className='font-medium text-[#262626]'>
											3
										</span>
									</div>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2 items-center'>
											<Rooms />
											<span className='text-custom-gray  txet-sm'>
												Rooms
											</span>
										</div>
										<span className='font-medium text-[#262626]'>
											4
										</span>
									</div>
								</div>
								<div className='flex flex-col gap-6'>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2 items-center'>
											<Layout />
											<span className='text-custom-gray  txet-sm'>
												Layout
											</span>
										</div>
										<span className='font-medium text-[#262626]'>
											Same in all
										</span>
									</div>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2 items-center'>
											<BluePrint />
											<span className='text-custom-gray  txet-sm'>
												BluePrint Cost
											</span>
										</div>
										<span className='font-medium text-[#262626]'>
											rs. 19,000
										</span>
									</div>
									<div className='flex flex-col gap-2'>
										<div className='flex gap-2 items-center'>
											<FaceToward />
											<span className='text-custom-gray  txet-sm'>
												Face Towards
											</span>
										</div>
										<span className='font-medium text-[#262626]'>
											West
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</article>
		</section>
	);
}

export default Grid;
