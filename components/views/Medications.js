import { useState } from 'react';
import styles from '../../styles/Home.module.css'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

export default function Medications(props) {
  const {getMedications, prevScreen} = props;
  const [value, setValue] = useState('');

  const [medication, setMedication] = useState(null);
  const [pharmacyImg, setPharmacyImg] = useState(null);

  const onChange = async (e) => {
    let drug = e.target.value.split('drug_id=');
    setPharmacyImg(null);
    setValue(e.target.value);
    if (drug.length > 1) {
      drug = drug[1].split('&pharmacy_id=');
      if (drug.length > 1) {
        let pharmacy = drug[1].split('&quantity=');
        if (pharmacy.length > 1) {
          let quantity = pharmacy[1].split('&')[0];
          //console.log(drug[0], pharmacy[0], quantity);
          const res = await fetch(`https://www.goodrx.com/api/v4/drugs/${drug[0]}`)
          const json = await res.json();
          setMedication(`${quantity} ${json.drug.plural_display}`);
          fetch(`https://www.grxstatic.com/pharmacy_logos/circle_icon/${pharmacy[0]}.png`)
            .then(response => response.blob())
            .then(imageBlob => {
              const imageObjectURL = URL.createObjectURL(imageBlob);
              setPharmacyImg(imageObjectURL);
            });
        }
      }
    }
    
  }

  return (
    <div className={styles.view}>
      <h3>Medications</h3>
      <p className={styles.description1}>
        We recommend you obtain coupons for your medications using:
      </p>
      <a className={styles.goodrx} href="https://www.goodrx.com/" target="_blank"><h2>GoodRx</h2></a>
      <p className={styles.description3}>
        *Remember to select the correct <strong>type</strong>, <strong>quantity</strong>, and <strong>dosage strength</strong>{' '}
        as the prescription written by your provider.
      </p>
      <p className={styles.description3}>
        When you are done, paste the coupon URL below:
      </p>
      <form onSubmit={(e) => getMedications(e, medication, value)}>
        <TextField className={styles.goodrxURL} value={value} onChange={onChange} label="GoodRx Coupon URL"/>
        {pharmacyImg ? 
        <div className={styles.control}>
            <div className={styles.medication}>
              <img src={pharmacyImg} /><p>{medication}</p>
            </div>
            {/* <Button variant="contained" className={styles.left} onClick={prevScreen}><ArrowBackIcon/></Button> */}
            <Button variant="contained" className={styles.next} type="submit">
              <p>Next</p>
              <ArrowForwardIcon className={styles.right}/>
            </Button>
        </div> : <p className={styles.toContinue}>Enter a valid GoodRx Coupon link to continue</p>}
      </form>
    </div>
  )
}