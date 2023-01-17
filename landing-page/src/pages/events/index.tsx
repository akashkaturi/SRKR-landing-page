import Head from "next/head"
import Link from "next/link"
const index = () => {
    return (
        <div>
            <Head>
                <title>Events</title>
            </Head>
            <h1> <Link href="cultural"> Cultural Events</Link> </h1>
        </div>
    )
}

export default index