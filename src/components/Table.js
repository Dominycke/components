import React from 'react'

export const formatDateTime = (date) => {
	const fecha = new Date(date)
	const dia = ('0' + fecha.getDate()).slice(-2)
	const mes = ('0' + (fecha.getMonth() + 1)).slice(-2)
	const anio = fecha.getFullYear().toString().slice(-2)
	const fechaFormateada = `${dia}/${mes}/${anio}`
	return fechaFormateada
}

export const SGVCheck = () => {
	return (
		<svg class="w-6 h-6 text-green-600 dark:text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
		</svg>
	)
}
export const SGVWorst = () => {
	return (
		<svg class="w-6 h-6 text-red-600 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
		</svg>
	)
}

const SGVCustomer = () => {
	return (
		<svg class="w-6 h-6 text-gray-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
		</svg>
	)
}

const SGVEmail = () => {
	return (
		<svg class="w-6 h-6 text-gray-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 21">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2" />
		</svg>
	)
}

const SGVPhone = () => {
	return (
		<svg class="w-6 h-6 text-gray-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 25">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 14h12M1 4h12M6.5 16.5h1M2 1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
		</svg>
	)
}



const Booking = (params) => {

	const {
		pnr,
		agent,
		pax,
		name,
		flights,
		departure,
		travel,
		status,
		total,
		expiration,
		customer,
		email,
		phone
	} = params
	return (
		<tr>
			<td>
				<Link href={`/booking/${pnr}`}>{pnr}</Link>
			</td>
			<td>{agent}</td>
			<td>{pax}</td>
			<td>
				<div
					className='text-nowrap'
					data-bs-toggle='tooltip'
					title={name}
					style={{ width: '5rem', overflow: 'hidden' }}
				>
					{name}
				</div>
			</td>
			<td>{flights}</td>
			<td>{departure && formatDateTime(departure)}</td>
			<td>{travel}</td>
			<td>{status}</td>
			<td>{total}</td>
			<td>{expiration && formatDateTime(expiration)}</td>
			<td>{customer ? <SGVCheck /> : <SGVWorst />}</td>
			<td>{email ? <SGVCheck /> : <SGVWorst />}</td>
			<td>{phone ? <SGVCheck /> : <SGVWorst />}</td>
		</tr>
	)
}

const Table = () => {
	return (
		<div className='pt-2 pl-2 w-full p-4'>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-2 py-2">Reserva</th>
							<th scope="col" className="px-2 py-2">Agente</th>
							<th scope="col" className="px-2 py-2">PAX</th>
							<th scope="col" className="px-2 py-2">Nombre</th>
							<th scope="col" className="px-2 py-2">Vuelos</th>
							<th scope="col" className="px-2 py-2">Salida</th>
							<th scope="col" className="px-2 py-2">Ruta</th>
							<th scope="col" className="px-2 py-2">Estado</th>
							<th scope="col" className="px-2 py-2">Total</th>
							<th scope="col" className="px-2 py-2">Expiración</th>
							<th scope="col" className="px-2 py-2"><SGVCustomer /></th>
							<th scope="col" className="px-2 py-2"><SGVEmail /></th>
							<th scope="col" className="px-2 py-2"><SGVPhone /></th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
							<th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								SDSRFZ
							</th>
							<td className="px-2 py-2">B83</td>
							<td className="px-2 py-2">3</td>
							<td className="px-2 py-2">Esteban Rodriguez Sifuentes</td>
							<td className="px-2 py-2">1</td>
							<td className="px-2 py-2">17/08/23</td>
							<td className="px-2 py-2">FSD - DEN</td>
							<td className="px-2 py-2">Confrimed</td>
							<td className="px-2 py-2">$280.90 USD</td>
							<td className="px-2 py-2">07/07/23</td>
							<td className="px-2 py-2"><SGVWorst /></td>
							<td className="px-2 py-2"><SGVCheck /></td>
							<td className="px-2 py-2"><SGVCheck /></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table