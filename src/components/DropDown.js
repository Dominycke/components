import React, { useState } from 'react'

const DropDown = ({ text }) => {
	const [dropDown, setDropDown] = useState(false)

	const handleDropDown = () => {
		setDropDown(!dropDown)
	}

	return (
		<div className='relative mr-5'>
			<button onClick={handleDropDown} id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
				</svg>
				{text}
				<svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
				</svg>
			</button>

			<div id="dropdownBgHover" className={`${dropDown ? '' : 'hidden'} absolute z-10 w-48 bg-white rounded-lg shadow dark:bg-gray-700`}>
				<ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">

					<li>
						<div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
							<input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
							<label for="checkbox-item-4" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Todos</label>
						</div>
					</li>
					<hr className="border-t border-gray-300 dark:border-gray-600" />


				</ul>
			</div>
		</div>
	)
}

// export const DropdownCheckboxItem = ({ children, value = '', onClick, checked, divider = false }) => {
// export const DropdownCheckboxItem = () => {
// 	return (
// 		<li className='dropdown-item py-0 px-2' value={value} onClick={onClick}>
// 			<div className='form-check' value={value}>
// 				<input className='form-check-input' type='checkbox' checked={checked} value={value} readOnly />
// 				<label className='form-check-label' value={value}>
// 					{children}
// 				</label>
// 			</div>
// 			{divider && <div className='dropdown-divider my-1' />}
// 		</li>
// 	)
// }

export default DropDown

