import Head from 'next/head'
import styles from '../../styles/Volunteers.module.css'
//import Welcome from '../components/Welcome'

export default function Volunteers() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arbor Free Clinic Resources</title>
        <meta name="description" content="Access affordable care options" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <Welcome /> */}
    </div>
  )
}
