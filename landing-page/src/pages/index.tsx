import Head from 'next/head'
import Carousel_layout from './carousel'
export default function Home() {
  return (
    <div>
      <Head>
        <title>SRKR</title>
        <meta name="keywords" content='srkr, club, college, bhimavaram' />
      </Head>
      <h1 className="text-5xl font-bold underline">
        Hello world!
      </h1>
      <h1>Home Page</h1>
      <h2>Woah</h2>
      <div style={{ 'width': '700px', 'height': '500px', 'margin': 'auto' }}>
        <Carousel_layout />
      </div>

     

    </div>
  )
}
