import React from "react";
import VilleIcon from "../../../assets/SvgIcon/VilleIcon.svg?react";
import ThreeSquare from "../../../assets/SvgIcon/ThreeSquare.svg?react";

function Grid() {
	return (
		<article className='flex gap-4'>
			<button className='flex gap-1 justify-center items-center px-4 py-2 border-[1px] border-[#e5e5e5] rounded-xl'>
				<VilleIcon />
				<span className='font-bold text-[#00000080]'>Ami Ville</span>
			</button>
			<button className='flex gap-1 justify-center items-center px-4 py-2 border-[1px] border-[#e5e5e5] rounded-xl'>
				<ThreeSquare />
				<h1 className='font-bold text-[#00000080]'>Wing A</h1>
			</button>
		</article>
	);
}

export default Grid;
