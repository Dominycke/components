import React from 'react'
import DropDown from './DropDown'

const Filters = () => {

  return (
    <div className='pt-2 pl-2 w-full flex'>
      <div className="flex mr-5">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          Reservas
        </span>
        <span type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          15
        </span>
      </div>
      <DropDown text="Clientes"></DropDown>
      <DropDown text="Agentes"></DropDown>
      <DropDown text="Aviso"></DropDown>
    </div>
  )
}

export default Filters
