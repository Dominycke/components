import React from 'react'

const CRUD = () => {
	return (
		<section class="bg-white dark:bg-gray-900">
			<div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
				<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Agregar un nuevo Cliente</h2>
				<form action="#">
					<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
						<div class="w-full w-4/12">
							<label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DK</label>
							<input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="DK Cliente" required="" />
						</div>
						<div class="w-full w-8/12">
							<label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
							<input type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre Cliente" required="" />
						</div>
					</div>

					<button type="submit"
						className=" inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Agregar Cliente</button>

				</form>
			</div>
		</section>
	)
}

export default CRUD