import Head from 'next/head'
import FormReservation from '../components/form/Index'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>XinoVAC</title>
      </Head>
      <h1 className="homepic">
        <Image className="meeting" src="public/meeting.png" alt="" width={700} height={465} loading="lazy"/>
        <FormReservation />  
      </h1>
    </div>
  )
}
