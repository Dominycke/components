import React from 'react'

const SideBarItem = ({ children, open, title, href, fill = 'currentColor', key, count }) => {
  return (
    <li key={key}>
      <a href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 20 20">
            {children}
        </svg>
        {open && <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>}
        {count && <span className={`${open ? "w-3 h-3 p-3 ml-3" : "absolute w-2 h-2 p-2 ml-5 mb-6"} inline-flex items-center justify-center  text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300`}>{count}</span>}
      </a>
    </li>
  )
}

export default SideBarItem