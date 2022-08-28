import Head from 'next/head'
import styles from '../../styles/Volunteers.module.css'
//import Welcome from '../components/Welcome'

export default function Flow() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arbor Clinic Flow</title>
        <meta name="description" content="Clinic Flow Diagram" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.flowDiagram}>
        <img  src="/images/ClinicFlow.png" />
      </div>
    </div>
  )
}
