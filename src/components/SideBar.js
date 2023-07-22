import React, { useState } from 'react'
import NavBar from './NavBar'
import SideBarItem from './SideBarItem'
import Filters from './Filters'
import DropdownRadio from './DropdownRadio'
import Table from './Table'

const SideBar = () => {
	const [open, setOpen] = useState(true)

	return (
		<>
			<NavBar onClick={() => setOpen(!open)} />
			<div className='flex '>
				<div className={`bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-screen p-3 pt-4 ${open ? "w-64" : "w-16"} relative`}>
					<ul className="space-y-2 font-medium">
						<SideBarItem open={open} title='Buzón' count={3}>
							<path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
						</SideBarItem>
						<SideBarItem open={open} title='Boletos' >
							<path d="M18 14H2a2 2 0 0 1-2-2V9.5a1 1 0 0 1 1-1 1.5 1.5 0 0 0 0-3 1 1 0 0 1-1-1V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.5a1 1 0 0 1-1 1 1.5 1.5 0 0 0 0 3 1 1 0 0 1 1 1V12a2 2 0 0 1-2 2Z" />
						</SideBarItem>
						<SideBarItem open={open} title='Reservas Eliminadas' fill='none' >
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
						</SideBarItem>
						<SideBarItem open={open} title='Bookings'>
							<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
							<path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
							<path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
						</SideBarItem>
					</ul>
				</div>
				<div className='w-full bg-white border-b border-gray-500 dark:bg-gray-700 dark:border-gray-600'>
					<Filters />
					<Table></Table>
				</div>
			</div>
		</>
	)
}

export default SideBar