import React, { useContext } from "react";
import ToggleMenu from "../../assets/SvgIcon/ToggleMenu.svg?react";
import { SidebarContext } from "../../context/SidebarContext";
import ArrowLeft from "../../assets/SvgIcon/ArrowLeft.svg?react";
import Bell from "../../assets/SvgIcon/Bell.svg?react";
import ProfilePhoto from "../../assets/Images/Profile_photo.png";
import MapPoint from "../../assets/SvgIcon/MapPoint.svg?react";

function Header() {
	const { toggle, toggleSidebar } = useContext(SidebarContext);
	return (
		<nav
			className={`flex flex-col gap-4 p-5 ${!toggle ? "w-[100vw]" : ""}`}
		>
			<section className='flex justify-between '>
				<article className='flex gap-5 items-center'>
					{!toggle && (
						<button onClick={toggleSidebar}>
							<ToggleMenu />
						</button>
					)}
					<button className='flex gap-2 items-center justify-center w-[86px] h-[37px] border-[1px] border-[#262626] rounded-xl text-sm'>
						<ArrowLeft />
						Back
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
				<article>
					<button className='h-[48px] w-[94px] rounded-xl '>
						Export
					</button>
					<button>Import</button>
				</article>
			</section>
		</nav>
	);
}

export default Header;
