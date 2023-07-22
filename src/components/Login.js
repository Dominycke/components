import React, { useState } from 'react'

const classAll = 'text-gray-900 dark:text-white'
const classInput = '`bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className={`flex items-center mb-6 text-2xl font-semibold ${classAll}`}>
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Travel
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className={`text-xl font-bold leading-tight tracking-tight md:text-2xl ${classAll}`}>
              Bienvenido
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" className={`block mb-2 text-sm font-medium ${classAll}`}>Agente</label>
                <input type="email" name="email" id="email" className={`${classInput} ${classAll}`}
                  placeholder="User ID" required="" />
              </div>
              <div>
                <label for="password" className={`block mb-2 text-sm font-medium ${classAll}`}>Contraseña</label>
                <input
                  type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password"
                  className={` ${classInput} ${classAll}`} required="" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input onClick={handlePassword} id="remember" aria-describedby="remember" type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />

                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500 dark:text-gray-300">Mostrar Contraseña</label>
                  </div>
                </div>
              </div>
              <button type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-16 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >Inciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login