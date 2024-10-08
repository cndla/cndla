'use client'
import React from 'react'

const EmailTemplate = ({ name, company, email, message }) => {
    return (
        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-900">


            <main className="mt-8">
                <h2 className="text-gray-700 dark:text-gray-200">Hola,</h2>

                <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                    {name} de {company} te envió un mensaje desde la página web de <span className="font-semibold ">CNDLA</span>.
                </p>

                <p className='mt-2 leading-loose text-gray-600 dark:text-gray-300'>
                    {message}
                </p>

                <ul>
                    info de contacto:
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{company}</li>

                </ul>

                <p className="mt-8 text-gray-600 dark:text-gray-300">
                    Thanks, <br />
                    Roumec team
                </p>
            </main>


            <footer className="mt-8">


            </footer>
        </section>)
}

export default EmailTemplate