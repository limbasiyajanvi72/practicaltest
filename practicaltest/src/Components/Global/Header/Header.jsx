import React, { useContext } from "react";
import ToggleMenu from "../../../assets/SvgIcon/ToggleMenu.svg?react";
import { SidebarContext } from "../../../context/SidebarContext";
import ArrowLeft from "../../../assets/SvgIcon/ArrowLeft.svg?react";
import Bell from "../../../assets/SvgIcon/Bell.svg?react";
import ProfilePhoto from "../../../assets/Images/Profile_photo.png";
import MapPoint from "../../../assets/SvgIcon/MapPoint.svg?react";
import ExportArrow from "../../../assets/SvgIcon/ExportArrow.svg?react";
import ImportArrow from "../../../assets/SvgIcon/ImportArrow.svg?react";

function Header() {
	const { toggle, toggleSidebar } = useContext(SidebarContext);
	return (
		<nav className={`flex flex-col gap-4 p-5 sticky top-0 bg-[#FFF] z-30`}>
			<section className='flex justify-between '>
				<article className='flex gap-5 items-center'>
					{!toggle && (
						<button onClick={toggleSidebar}>
							<ToggleMenu />
						</button>
					)}
					<button className='flex gap-2 items-center justify-center w-[86px] h-[37px] border-[1px] border-[#262626] rounded-xl text-sm'>
						<ArrowLeft />
						<span className='font-medium'>Back</span>
					</button>
				</article>
				<article className='flex gap-5 items-center'>
					<Bell />
					<img src={ProfilePhoto} alt='profile-photo' />
				</article>
			</section>
			<section className='flex justify-between '>
				<article>
					<span className='text-[#141239] text-[28px] font-medium'>
						Amilek Estate
					</span>
					<div className='flex gap-1 items-center'>
						<MapPoint />
						<span className='text-[#888888] text-sm '>
							Besides World Trade Tower - 30775, Makarba
						</span>
					</div>
				</article>
				<article className='flex gap-3'>
					<button className='h-[48px] w-[94px] border-[1px] border-[#262626] rounded-xl flex justify-center items-center gap-2 '>
						<ExportArrow />
						<span className='font-medium text-[#262626]'>
							Export
						</span>
					</button>
					<button className='h-[48px] w-[94px] bg-[#5046E5] rounded-xl flex justify-center items-center gap-2 '>
						<ImportArrow />
						<span className=' text-white'>Import</span>
					</button>
				</article>
			</section>
		</nav>
	);
}

export default Header;
