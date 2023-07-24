import React from 'react'

const labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const h3Class = 'text-lg font-semibold text-gray-900 dark:text-white'
const inputClass = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
const btnAddClass = 'border border-gray-300 text-gray-900 dark:text-white inline-flex items-center bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
const divClass1 = 'fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-50 z-50'
const divClass2 = 'relative p-4 w-full max-w-2xl'
const divContent = 'relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5'
const divHeaderClass = 'flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600'
const divBody = 'grid gap-4 mb-4 sm:grid-cols-2'

const BTNClose = () => {
	return (
		<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
			<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			<span className="sr-only">Close modal</span>
		</button>
	)
}

const SGV = () => {
	return (
		<svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd">
			</path>
		</svg>
	)
}

const CRUDCustomer = () => {
	return (
		<div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`${divClass1}`}>
			<div className={`${divClass2}`}>
				{/* <!-- Modal content --> */}
				<div className={`${divContent}`}>
					{/* <!-- Modal header --> */}
					<div className={`${divHeaderClass}`}>
						<h3 className={`${h3Class}`}>
							Agregar Cliente
						</h3>
						<BTNClose />
					</div>
					{/* <!-- Modal body --> */}
					<form action="#">
						<div className={`${divBody}`}>
							<div>
								<label for="name" className={`${labelClass}`}>DK</label>
								<input type="text" name="name" id="name" className={`${inputClass}`} placeholder="Customer DK" required="" />
							</div>
							<div>
								<label for="brand" className={`${labelClass}`}>Name</label>
								<input type="text" name="brand" id="brand" className={`${inputClass}`} placeholder="Customer Name" required="" />
							</div>
						</div>
						<button type="submit" className={`${btnAddClass}`}>
							<SGV />
							Agregar Nuevo Cliente
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CRUDCustomer



export const CRUDAgent = () => {
	return (
		<div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`${divClass1}`}>
			<div className={`${divClass2}`}>
				{/* <!-- Modal content --> */}
				<div className={`${divContent}`}>
					{/* <!-- Modal header --> */}
					<div className={`${divHeaderClass}`}>
						<h3 className={`${h3Class}`}>
							Agregar Agente
						</h3>
						<BTNClose />
					</div>
					{/* <!-- Modal body --> */}
					<form action="#">
						<div className={`${divBody}`}>
							<div>
								<label for="name" className={`${labelClass}`}>Num</label>
								<input type="text" name="name" id="name" className={`${inputClass}`} placeholder="Agent Num" required="" />
							</div>
							<div>
								<label for="brand" className={`${labelClass}`}>Name</label>
								<input type="text" name="brand" id="brand" className={`${inputClass}`} placeholder="Agent Name" required="" />
							</div>
							<div>
								<label for="price" className={`${labelClass}`}>Queue</label>
								<input type="number" name="price" id="price" className={`${inputClass}`} placeholder="Queue" required="" />
							</div>
						</div>
						<button type="submit" className={`${btnAddClass}`}>
							<SGV />
							Agregar Nuevo Agente
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export const CRUDNotice = () => {
	return (
		<div id="defaultModal" tabIndex="-1" aria-hidden="true" className={`${divClass1}`}>
			<div className={`${divClass2}`}>
				{/* <!-- Modal content --> */}
				<div className={`${divContent}`}>
					{/* <!-- Modal header --> */}
					<div className={`${divHeaderClass}`}>
						<h3 className={`${h3Class}`}>
							Agregar Aviso
						</h3>
						<BTNClose />
					</div>
					{/* <!-- Modal body --> */}
					<form action="#">
						<div className={`${divBody}`}>
							<div>
								<label for="name" className={`${labelClass}`}>Code</label>
								<input type="text" name="name" id="name" className={`${inputClass}`} placeholder="Code Notice" required="" />
							</div>
							<div>
								<label for="brand" className={`${labelClass}`}>Message</label>
								<input type="text" name="brand" id="brand" className={`${inputClass}`} placeholder="Message Notice" required="" />
							</div>
							<div>
								<label for="price" className={`${labelClass}`}>Action</label>
								<input type="number" name="price" id="price" className={`${inputClass}`} placeholder="Action Notice" required="" />
							</div>
						</div>
						<button type="submit" className={`${btnAddClass}`}>
							<SGV />
							Agregar Nuevo Aviso
						</button>
					</form>
				</div>
			</div>
		</div >
	)
}