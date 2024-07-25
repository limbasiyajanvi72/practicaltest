import React from "react";
import VilleIcon from "../../../assets/SvgIcon/VilleIcon.svg?react";
import ThreeSquare from "../../../assets/SvgIcon/ThreeSquare.svg?react";
import Triangle from "../../../assets/SvgIcon/Triangle.svg?react";
import RedTriangle from "../../../assets/SvgIcon/RedTriangle.svg?react";

function Grid() {
	return (
		<section className='p-5'>
			<article className='flex gap-4'>
				<button className='flex gap-1 justify-center items-center  border-[1px] border-[#e5e5e5] rounded-xl w-[113px] h-[48px]'>
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
			<section className=' flex gap-6  py-5 w-[100%]'>
				<article className='flex flex-col w-[50%]'>
					<div className=' flex justify-between items-center h-[74px] border-t-[1px] border-l-[1px] border-r-[1px] border-[#0000000D] rounded-t-xl px-5  bg-[#fafafa]'>
						<span className='text-[22px] font-medium text-[#1B1B1B]'>
							Floors
						</span>
						<span className='text-base font-bold text-custom-gray'>
							150 Units
						</span>
					</div>

					<div className=' flex flex-wrap bg-[#fafafa]'>
						{Array.from({ length: 36 }, (_, index) => (
							<div
								key={index + 1}
								className='flex-grow min-w-[108px] max-w-[20%] h-[95px] border-[0.5px] border-[#0000000D] flex flex-col gap-1 justify-center items-center'
							>
								<span className='text-[22px] text-[#1B1B1B] font-medium'>
									{index + 1}
								</span>
								<span className='text-custom-gray font-medium'>
									5 units
								</span>
							</div>
						))}
					</div>
				</article>
				<article className='flex flex-col w-[50%]'>
					<main className='flex gap-4 flex-wrap '>
						{Array.from({ length: 10 }, (_, index) => (
							<div
								key={index}
								className='min-w-[141px] max-w-[30%] h-[74px] rounded-xl border-[1px] border-[#0000000D] relative'
							>
								{index + 1}
								<span className='absolute bottom-2 right-2'>
									{index === 5 || index === 4 ? (
										<RedTriangle />
									) : (
										<Triangle />
									)}
								</span>
							</div>
						))}
					</main>
					<main className=''>
						<div className='flex '>
							<span>A-1206</span>
							<span>Available</span>
						</div>
						<div></div>
					</main>
				</article>
			</section>
		</section>
	);
}

export default Grid;
