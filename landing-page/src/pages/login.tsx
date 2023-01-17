import React from 'react'
import Head from 'next/head'
import LoginLayout from '@/layout/layout'
const login = () => {
    return (

        <LoginLayout>
            <Head>
                <title>
                    Login
                </title>
            </Head>
            <h1>Login Page</h1>
            <section className='w-3/4 mx-auto flex flex-column gap-10'>
                <div className='title'>
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Head</h1>
                </div>
            </section>
        </LoginLayout>
    )
}

export default login