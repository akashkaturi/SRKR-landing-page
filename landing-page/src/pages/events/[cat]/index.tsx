import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const event1 = () => {
    return (
        <div >
            <Head>Cultural Events</Head>
            <h1>Cultural Events</h1>
            <ul>
                <li>
                    <Link href='/events/event1'>Cultural Event 1</Link>

                </li>
                <li>
                    <Link href='/events/event2'>Cultural Event 2</Link>

                </li>
                <li>
                    <Link href='/events/event3'>Cultural Event 3</Link>

                </li>
                <li>
                    <Link href='/events/event4'>Cultural Event 4</Link>

                </li>
                <li>

                    <Link href='/events/event5'>Cultural Event 5</Link>
                </li>
            </ul>

        </div>
    )
}

export default event1