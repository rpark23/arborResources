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
      <a href="/healthEd/exercise/HipArthritis.pdf" download="HipArthritis.pdf">Hip Arthritis</a>
      <a href="/healthEd/exercise/KneeJoint.pdf" download="KneeJoint.pdf">Knee Joint</a>
      <a href="/healthEd/exercise/LowBack.pdf" download="LowBack.pdf">Low Back</a>
      <a href="/healthEd/exercise/NeckPain.pdf" download="LowBack.pdf">Neck Pain</a>
      <a href="/healthEd/exercise/Shoulder.pdf" download="LowBack.pdf">Shoulder</a>
    </div>
  )
}
