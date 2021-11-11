import Head from 'next/head'
import FormReservation from '../components/form/Index'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>XinoVAC</title>
      </Head>

      <main className={styles.main}>
        <h1>BU Meeting Room Reservation</h1>
        <FormReservation />
      </main>

      <footer className={styles.footer}>
       <span className="footer-content">
         Powered By Xinovac Group
       </span>
      </footer>
    </div>
  )
}
