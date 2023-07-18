import React, { useState } from 'react'

const NavBar = ({ onClick }) => {
	return (
		// class fixed
		<nav className="top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
			<div className="px-3 py-3 lg:px-5 lg:pl-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-start">
						<div className="flex items-center ml-3">
							<button onClick={onClick}>
								<svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
								</svg>
							</button>
						</div>
					</div>
					<div className="flex items-center justify-start">
						<div className="flex items-center ml-3">
							<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white ">Travel</span>
						</div>
					</div>
					<div className="flex items-center">
						<div className="flex items-center ml-3">
							<div>
								<svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar